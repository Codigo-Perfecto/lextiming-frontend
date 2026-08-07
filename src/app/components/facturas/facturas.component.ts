import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { FacturaService } from '../../services/factura.service';
import { CasoService } from '../../services/caso.service';
import { AuthService } from '../../services/auth.service';
import { RegistroTiempoService } from '../../services/registro-tiempo.service';
import { Factura, ESTADOS_FACTURA } from '../../models/factura.model';
import { Caso } from '../../models/caso.model';
import { RegistroTiempo } from '../../models/registro-tiempo.model';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog';
import { PagoDialogComponent } from '../pago-dialog/pago-dialog';

@Component({
  selector: 'app-facturas',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {
  facturas: Factura[] = [];
  casos: Caso[] = [];
  casosDisponibles: Caso[] = [];
  casosFiltradosManual: Caso[] = [];

  displayedColumns: string[] = ['numeroFactura', 'cliente', 'caso', 'monto', 'fechaEmision', 'fechaVencimiento', 'estado', 'acciones'];

  loading = true;
  showForm = false;
  showAutoForm = false;
  editMode = false;
  selectedFacturaId: string | null = null;
  facturaForm: FormGroup;
  autoFacturaForm: FormGroup;

  estados = ESTADOS_FACTURA.filter(estado => estado !== 'VENCIDA');

  casosConTimerActivoIds: Set<string> = new Set();
  casosConRegistrosDisponibles: Set<string> = new Set();

  constructor(
    private facturaService: FacturaService,
    private casoService: CasoService,
    private authService: AuthService,
    private registroService: RegistroTiempoService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog
  ) {
    this.facturaForm = this.fb.group({
      casoId: ['', Validators.required],
      numeroFactura: ['', Validators.required],
      monto: ['', [Validators.required, Validators.min(0.01)]],
      horasTrabajadas: [''],
      tarifaPorHora: [''],
      fechaVencimiento: [''],
      descripcion: ['']
    });

    this.autoFacturaForm = this.fb.group({
      casoId: ['', Validators.required],
      numeroFactura: [''],
      tarifaPorHora: ['', [Validators.required, Validators.min(0.01)]],
      diasVencimiento: [30]
    });
  }

  ngOnInit(): void {
    this.loadCasos();
    this.loadFacturas();
    this.cargarCasosConTimerActivo();
    this.cargarCasosConRegistrosDisponibles();
  }

  cargarCasosConRegistrosDisponibles(): void {
    this.registroService.getRegistros().subscribe({
      next: (registros: RegistroTiempo[]) => {
        console.log('📋 Registros obtenidos:', registros);
        // Filtramos registros finalizados y sin factura asignada
        const disponibles = registros.filter(r => 
          r.estadoTimer === 'FINALIZADO' && !r.facturaId
        );
        console.log('✅ Registros disponibles (FINALIZADO y sin factura):', disponibles);
        this.casosConRegistrosDisponibles = new Set(disponibles.map(r => r.casoId));
        console.log('🔑 IDs de casos con registros disponibles:', this.casosConRegistrosDisponibles);
        this.actualizarCasosDisponibles();
      },
      error: (error) => {
        console.error('❌ Error al cargar registros:', error);
        this.casosConRegistrosDisponibles = new Set();
        this.actualizarCasosDisponibles();
      }
    });
  }

  actualizarCasosDisponibles(): void {
    // 1. Filtrar casos que no estén cerrados
    const casosActivos = this.casos.filter(caso => caso.estado !== 'CERRADO');

    // 2. Filtrar por casos que tengan registros disponibles (si el set está vacío, no mostrar nada)
    const casosConRegistros = casosActivos.filter(caso =>
      this.casosConRegistrosDisponibles.has(caso.id)
    );

    // 3. Aplicar filtros de factura activa y timer activo
    if (this.facturas.length === 0) {
      this.casosDisponibles = casosConRegistros.filter(caso =>
        !this.casosConTimerActivoIds.has(caso.id)
      );
    } else {
      this.casosDisponibles = casosConRegistros.filter(caso => {
        const tieneFactura = this.facturas.some(factura =>
          factura.casoId === caso.id &&
          (factura.estado === 'PENDIENTE' || factura.estado === 'PAGADA')
        );
        return !tieneFactura && !this.casosConTimerActivoIds.has(caso.id);
      });
    }

    console.log('📋 Casos disponibles para facturar:', this.casosDisponibles.map(c => c.titulo));

    if (!this.editMode) {
      this.casosFiltradosManual = [...this.casosDisponibles];
    }
    this.cdr.detectChanges();
  }

  cargarCasosConTimerActivo(): void {
    this.facturaService.getCasosConTimerActivo().subscribe({
      next: (ids) => {
        this.casosConTimerActivoIds = new Set(ids);
        this.actualizarCasosDisponibles();
      },
      error: (error) => console.error('Error al cargar casos con timer activo:', error)
    });
  }

  loadCasos(): void {
    this.casoService.getCasos().subscribe({
      next: (data: any) => {
        this.casos = Array.isArray(data) ? data : (data?.content || []);
        this.actualizarCasosDisponibles();
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al cargar casos:', error);
      }
    });
  }

  loadFacturas(callback?: () => void): void {
    const token = this.authService.getToken();
    if (!token) {
      this.authService.logout();
      window.location.href = '/login';
      return;
    }

    this.loading = true;
    this.cdr.detectChanges();

    this.facturaService.getFacturas().subscribe({
      next: (data: any) => {
        console.log('📦 Facturas recibidas:', data);
        this.facturas = Array.isArray(data) ? data : (data?.content || []);
        this.actualizarCasosDisponibles();
        this.loading = false;
        this.cdr.detectChanges();
        if (callback) callback();
      },
      error: (error) => {
        console.error('❌ Error al cargar facturas:', error);
        this.snackBar.open('Error al cargar facturas', 'Cerrar', { duration: 3000 });
        this.loading = false;
        this.cdr.detectChanges();
        if (error.status === 401 || error.status === 403) {
          this.authService.logout();
          window.location.href = '/login';
        }
        if (callback) callback();
      }
    });
  }

  openForm(): void {
    this.editMode = false;
    this.showForm = true;
    this.showAutoForm = false;
    this.selectedFacturaId = null;
    this.facturaForm.reset({
      casoId: '',
      numeroFactura: '',
      monto: '',
      horasTrabajadas: '',
      tarifaPorHora: '',
      fechaVencimiento: '',
      descripcion: ''
    });
    this.casosFiltradosManual = [...this.casosDisponibles];
    this.cdr.detectChanges();
  }

  openAutoForm(): void {
    this.showAutoForm = true;
    this.showForm = false;
    // Forzar recarga de registros para actualizar la lista
    this.cargarCasosConRegistrosDisponibles();
    this.autoFacturaForm.reset({
      casoId: '',
      numeroFactura: '',
      tarifaPorHora: '',
      diasVencimiento: 30
    });
  }

  closeForm(): void {
    this.showForm = false;
    this.showAutoForm = false;
    this.facturaForm.reset();
    this.autoFacturaForm.reset();
    this.casosFiltradosManual = [];
  }

  editFactura(factura: Factura): void {
    this.editMode = true;
    this.selectedFacturaId = factura.id;
    this.showForm = true;
    this.showAutoForm = false;

    const casoActual = this.casos.find(c => c.id === factura.casoId);
    const disponibles = [...this.casosDisponibles];
    if (casoActual && !disponibles.some(c => c.id === casoActual.id)) {
      this.casosFiltradosManual = [casoActual, ...disponibles];
    } else {
      this.casosFiltradosManual = [...disponibles];
    }

    let fechaVencimiento = '';
    if (factura.fechaVencimiento) {
      const date = new Date(factura.fechaVencimiento);
      fechaVencimiento = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}T${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
    }

    this.facturaForm.patchValue({
      casoId: factura.casoId,
      numeroFactura: factura.numeroFactura,
      monto: factura.monto,
      horasTrabajadas: factura.horasTrabajadas,
      tarifaPorHora: factura.tarifaPorHora,
      fechaVencimiento: fechaVencimiento,
      descripcion: factura.descripcion
    });
    this.cdr.detectChanges();
  }

  saveFactura(): void {
    if (this.facturaForm.invalid) return;

    this.loading = true;
    const facturaData = this.facturaForm.value;
    const casoId = facturaData.casoId;

    if (this.editMode && this.selectedFacturaId) {
      this.facturaService.updateFactura(this.selectedFacturaId, facturaData).subscribe({
        next: () => {
          this.snackBar.open('Factura actualizada', 'Cerrar', { duration: 3000 });
          this.loadFacturas(() => {
            this.actualizarEstadoCasoPorFacturas(casoId);
            this.loadCasos();
          });
          this.closeForm();
        },
        error: (error) => {
          const errorMessage = error.error?.message || 'Error al actualizar factura';
          this.snackBar.open(errorMessage, 'Cerrar', { duration: 3000 });
          this.loading = false;
        }
      });
    } else {
      this.facturaService.createFactura(facturaData).subscribe({
        next: () => {
          this.snackBar.open('Factura creada', 'Cerrar', { duration: 3000 });
          this.loadFacturas(() => {
            this.actualizarEstadoCasoPorFacturas(casoId);
            this.loadCasos();
          });
          this.closeForm();
          this.loading = false;
        },
        error: (error) => {
          const errorMessage = error.error?.message || 'Error al crear factura';
          this.snackBar.open(errorMessage, 'Cerrar', { duration: 3000 });
          this.loading = false;
        }
      });
    }
  }

  crearFacturaAutomatica(): void {
    if (this.autoFacturaForm.invalid) return;

    this.loading = true;
    this.cdr.detectChanges();
    const { casoId, numeroFactura, tarifaPorHora, diasVencimiento } = this.autoFacturaForm.value;

    this.facturaService.createFacturaAutomatica(casoId, numeroFactura, tarifaPorHora, diasVencimiento).subscribe({
      next: () => {
        this.snackBar.open('Factura automática creada', 'Cerrar', { duration: 3000 });
        this.loadFacturas(() => {
          this.actualizarEstadoCasoPorFacturas(casoId);
          this.loadCasos();
        });
        this.closeForm();
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        const errorMessage = error.error?.message || 'Error al crear factura automática';
        if (errorMessage.includes('No hay registros de tiempo no facturados')) {
          this.snackBar.open(
            'El caso seleccionado no tiene horas registradas sin facturar. Inicie el timer o genere una factura manual.',
            'Cerrar',
            { duration: 6000 }
          );
        } else {
          this.snackBar.open(errorMessage, 'Cerrar', { duration: 3000 });
        }
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  estaVencida(factura: Factura): boolean {
    if (!factura.fechaVencimiento) return false;
    if (factura.estado === 'PAGADA' || factura.estado === 'CANCELADA') return false;
    const hoy = new Date();
    const vencimiento = new Date(factura.fechaVencimiento);
    return vencimiento < hoy;
  }

  getEstadoMostrar(factura: Factura): string {
    if (this.estaVencida(factura)) return 'VENCIDA';
    return factura.estado;
  }

  cancelarFactura(id: string): void {
    const factura = this.facturas.find(f => f.id === id);
    if (!factura) return;

    this.facturaService.cancelarFactura(id).subscribe({
      next: () => {
        this.snackBar.open('Factura cancelada correctamente', 'Cerrar', { duration: 3000 });
        this.loadFacturas(() => {
          this.actualizarEstadoCasoPorFacturas(factura.casoId);
          this.loadCasos();
        });
      },
      error: (error) => {
        const msg = error.error?.message || 'Error al cancelar la factura';
        this.snackBar.open(msg, 'Cerrar', { duration: 5000 });
      }
    });
  }

  deleteFactura(id: string): void {
    const factura = this.facturas.find(f => f.id === id);

    if (factura?.estado === 'PAGADA') {
      this.snackBar.open('No se puede eliminar una factura pagada. Use la opción "Cancelar" si es necesario.', 'Cerrar', { duration: 4000 });
      return;
    }

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {
        title: 'Confirmar eliminación',
        message: '¿Estás seguro de eliminar esta factura? Esta acción no se puede deshacer.',
        confirmText: 'Eliminar',
        cancelText: 'Cancelar'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loading = true;
        this.facturaService.deleteFactura(id).subscribe({
          next: () => {
            this.snackBar.open('Factura eliminada', 'Cerrar', { duration: 3000 });
            this.loadFacturas(() => {
              if (factura) {
                this.actualizarEstadoCasoPorFacturas(factura.casoId);
              }
              this.loadCasos();
            });
            this.loading = false;
          },
          error: (error) => {
            const errorMessage = error.error?.message || 'Error al eliminar factura';
            this.snackBar.open(errorMessage, 'Cerrar', { duration: 3000 });
            this.loading = false;
          }
        });
      }
    });
  }

  formatFecha(fecha: Date): string {
    if (!fecha) return '-';
    return new Date(fecha).toLocaleString();
  }

  getNombreCaso(casoId: string): string {
    const caso = this.casos.find(c => c.id === casoId);
    return caso ? caso.titulo : 'Cargando...';
  }

  getMontoTotal(): number {
    return this.facturas.reduce((total, factura) => total + (factura.monto || 0), 0);
  }

  pagarFactura(factura: Factura): void {
    const dialogRef = this.dialog.open(PagoDialogComponent, {
      width: '400px',
      data: { facturaId: factura.id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadFacturas(() => {
          this.actualizarEstadoCasoPorFacturas(factura.casoId);
          this.loadCasos();
        });
      }
    });
  }

  private actualizarEstadoCasoPorFacturas(casoId: string): void {
    const facturasActivas = this.facturas.filter(f => f.casoId === casoId && f.estado !== 'CANCELADA');
    const nuevoEstado = facturasActivas.length > 0 ? 'CERRADO' : 'ACTIVO';

    const casoActual = this.casos.find(c => c.id === casoId);
    if (casoActual && casoActual.estado !== nuevoEstado) {
      this.casoService.cambiarEstado(casoId, nuevoEstado).subscribe({
        next: () => console.log(`✅ Caso ${casoId} ahora en estado ${nuevoEstado}`),
        error: (err) => console.error(`❌ Error al actualizar caso ${casoId}:`, err)
      });
      this.actualizarCasosDisponibles();
      this.cdr.detectChanges();
    }
  }
}