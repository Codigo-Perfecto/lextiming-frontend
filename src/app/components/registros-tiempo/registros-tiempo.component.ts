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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { RegistroTiempoService } from '../../services/registro-tiempo.service';
import { CasoService } from '../../services/caso.service';
import { AuthService } from '../../services/auth.service';
import { RegistroTiempo, CATEGORIAS_TIEMPO } from '../../models/registro-tiempo.model';
import { Caso } from '../../models/caso.model';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog';

@Component({
  selector: 'app-registros-tiempo',
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
    MatSlideToggleModule,
    MatDialogModule
  ],
  templateUrl: './registros-tiempo.component.html',
  styleUrls: ['./registros-tiempo.component.css']
})
export class RegistrosTiempoComponent implements OnInit {

  registros: RegistroTiempo[] = [];
  casos: Caso[] = [];
  casosFiltradosManual: Caso[] = []; // 👈 Casos disponibles para seleccionar en el formulario manual
  registroActivo: RegistroTiempo | null = null;
  timersPausados: RegistroTiempo[] = [];
  mostrarTimersPausados = false;
  displayedColumns: string[] = ['caso', 'fechaInicio', 'fechaFin', 'horas', 'categoria', 'facturable', 'acciones'];
  loading = true;
  showForm = false;
  editMode = false;
  selectedRegistroId: string | null = null;
  registroForm: FormGroup;
  categorias = CATEGORIAS_TIEMPO;
  tiempoTranscurrido: string = '00:00:00';
  private intervalo: any;

  // Indica si el formulario es para un timer directo (sin fecha fin)
  nuevoTimerDirecto = false;

  // IDs de casos que tienen un timer activo (CORRIENDO o PAUSADO)
  casosConTimerActivoIds: Set<string> = new Set();

  constructor(
    private registroService: RegistroTiempoService,
    private casoService: CasoService,
    private authService: AuthService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog
  ) {
    this.registroForm = this.fb.group({
      casoId: ['', Validators.required],
      fechaHoraInicio: [''],
      fechaHoraFin: [''],
      categoria: ['', Validators.required],
      descripcion: [''],
      facturable: [true]
    });
  }

  ngOnInit(): void {
    this.loadCasos();
    this.loadRegistros();
    this.cargarRegistroActivo();
  }

  loadCasos(): void {
    this.casoService.getCasos().subscribe({
      next: (data: any) => {
        this.casos = Array.isArray(data) ? data : (data?.content || []);
        this.actualizarCasosFiltradosManual();
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al cargar casos:', error);
      }
    });
  }

  loadRegistros(): void {
    const token = this.authService.getToken();
    if (!token) {
      this.authService.logout();
      window.location.href = '/login';
      return;
    }

    this.loading = true;
    this.cdr.detectChanges();

    this.registroService.getRegistros().subscribe({
      next: (data: any) => {
        console.log('📦 Registros recibidos:', data);
        this.registros = Array.isArray(data) ? data : (data?.content || []);
        this.actualizarCasosConTimerActivo(); // 👈 extraer IDs de casos con timer activo
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('❌ Error al cargar registros:', error);
        this.snackBar.open('Error al cargar registros', 'Cerrar', { duration: 3000 });
        this.loading = false;
        this.cdr.detectChanges();

        if (error.status === 401 || error.status === 403) {
          this.authService.logout();
          window.location.href = '/login';
        }
      }
    });
  }

  cargarRegistroActivo(): void {
    this.registroService.getRegistroActivo().subscribe({
      next: (data) => {
        this.registroActivo = data;
        if (data && data.estadoTimer === 'CORRIENDO') {
          this.iniciarContador();
        } else {
          this.detenerContador();
          // Si está pausado y tiene horas acumuladas, mostrar ese tiempo (opcional)
          if (data && data.horasAcumuladas) {
            this.tiempoTranscurrido = this.formatearTiempo(data.horasAcumuladas * 3600);
          }
        }
        this.cdr.detectChanges();
      },
      error: (error) => {
        if (error.status === 403) {
          console.debug('No se pudo obtener timer activo (403). Se ignora.');
          this.registroActivo = null;
        } else if (error.status !== 404) {
          console.error('Error al cargar registro activo:', error);
        } else {
          this.registroActivo = null;
        }
        this.detenerContador(); // Asegurar detener cualquier contador residual
        this.cdr.detectChanges();
      }
    });
  }

  cargarTimersPausados(): void {
    this.registroService.listarTimersPausados().subscribe({
      next: (data) => {
        this.timersPausados = data;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al cargar timers pausados:', error);
      }
    });
  }

  // Extrae los IDs de casos con timer activo (CORRIENDO o PAUSADO)
  actualizarCasosConTimerActivo(): void {
    this.casosConTimerActivoIds = new Set(
      this.registros
        .filter(r => r.estadoTimer === 'CORRIENDO' || r.estadoTimer === 'PAUSADO')
        .map(r => r.casoId)
    );
    this.actualizarCasosFiltradosManual();
  }

  // Actualiza la lista de casos que se muestran en el selector manual (excluye los que tienen timer activo)
  actualizarCasosFiltradosManual(): void {
    if (!this.editMode) {
      this.casosFiltradosManual = this.casos.filter(caso =>
        caso.estado !== 'CERRADO' && // ← excluir cerrados
        !this.casosConTimerActivoIds.has(caso.id)
      );
      this.cdr.detectChanges();
    }
  }

  // Pausar el timer actual (solo si está corriendo)
  pausarTimerActual(): void {
    if (this.registroActivo && this.registroActivo.estadoTimer === 'CORRIENDO') {
      this.detenerContador();
      this.loading = true;
      this.registroService.pausarTimerActual().subscribe({
        next: () => {
          this.snackBar.open('Timer pausado', 'Cerrar', { duration: 3000 });
          this.cargarRegistroActivo();
          this.cargarTimersPausados();
          this.loadRegistros();
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: (error) => {
          const errorMessage = error.error?.message || error.message || 'Error desconocido';
          this.snackBar.open('Error al pausar: ' + errorMessage, 'Cerrar', { duration: 5000 });
          this.loading = false;
          this.cdr.detectChanges();
        }
      });
    }
  }

  // Reanudar el timer actual (si está pausado)
  reanudarTimerActivo(): void {
    if (this.registroActivo && this.registroActivo.estadoTimer === 'PAUSADO') {
      this.loading = true;
      this.registroService.reanudarTimerEspecifico(this.registroActivo.id).subscribe({
        next: () => {
          this.snackBar.open('Timer reanudado', 'Cerrar', { duration: 3000 });
          this.cargarRegistroActivo();
          this.loadRegistros();
          this.cargarTimersPausados();
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: (error) => {
          const errorMessage = error.error?.message || error.message || 'Error desconocido';
          this.snackBar.open('Error al reanudar: ' + errorMessage, 'Cerrar', { duration: 5000 });
          this.loading = false;
          this.cdr.detectChanges();
        }
      });
    }
  }

  // Abrir diálogo para elegir timer pausado o crear nuevo
  iniciarTimer(): void {
    this.cargarTimersPausados();
    this.mostrarTimersPausados = true;
  }

  // Crea un timer directo (sin fecha fin)
  crearNuevoTimerDirecto(): void {
    this.nuevoTimerDirecto = true;
    this.showForm = true;
    this.editMode = false;
    this.selectedRegistroId = null;
    this.mostrarTimersPausados = false;
    this.registroForm.reset({
      facturable: true,
      casoId: '',
      categoria: '',
      descripcion: ''
    });
  }

  // Crear un nuevo timer (desde el diálogo de pausados) - para compatibilidad
  crearNuevoTimer(): void {
    this.crearNuevoTimerDirecto();
  }

  // Abre el formulario para registro manual (con fecha fin)
  openForm(): void {
    this.nuevoTimerDirecto = false;
    this.showForm = true;
    this.editMode = false;
    this.selectedRegistroId = null;
    this.registroForm.reset({
      facturable: true,
      fechaHoraInicio: '',
      fechaHoraFin: '',
      casoId: '',
      categoria: '',
      descripcion: ''
    });
    // Usamos el método centralizado que filtra por estado y timer activo
    this.actualizarCasosFiltradosManual();
    this.cdr.detectChanges();
  }

  // Cierra el formulario y resetea la bandera
  closeForm(): void {
    this.showForm = false;
    this.registroForm.reset();
    this.nuevoTimerDirecto = false;
  }

  editRegistro(registro: RegistroTiempo): void {
    this.editMode = true;
    this.selectedRegistroId = registro.id;
    this.showForm = true;

    // 1. Casos disponibles: activos y sin timer activo
    const disponibles = this.casos.filter(caso =>
      caso.estado !== 'CERRADO' && // 👈 Excluir cerrados
      !this.casosConTimerActivoIds.has(caso.id)
    );

    // 2. Caso actual del registro (puede estar CERRADO o tener timer activo)
    const casoActual = this.casos.find(c => c.id === registro.casoId);

    // 3. Si el caso actual no está en la lista de disponibles, lo agregamos
    if (casoActual && !disponibles.some(c => c.id === casoActual.id)) {
      this.casosFiltradosManual = [casoActual, ...disponibles];
    } else {
      this.casosFiltradosManual = [...disponibles];
    }

    // ... resto del código (fechas y patch del formulario) se mantiene igual
    let fechaVencimiento = '';
    if (registro.fechaHoraFin) {
      const date = new Date(registro.fechaHoraFin);
      fechaVencimiento = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}T${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
    }

    this.registroForm.patchValue({
      casoId: registro.casoId,
      fechaHoraInicio: new Date(registro.fechaHoraInicio),
      fechaHoraFin: fechaVencimiento,
      categoria: registro.categoria,
      descripcion: registro.descripcion,
      facturable: registro.facturable
    });
    this.cdr.detectChanges();
  }

  // SaveRegistro maneja ambos casos (timer directo vs manual)
  saveRegistro(): void {
    if (this.registroForm.invalid) return;

    this.loading = true;
    this.cdr.detectChanges();

    const registroData = this.registroForm.value;

    // =================== REGISTRO MANUAL (con fecha fin) ===================
    if (!this.nuevoTimerDirecto) {
        if (!registroData.fechaHoraInicio) {
            const ahora = new Date();
            ahora.setSeconds(0);
            const año = ahora.getFullYear();
            const mes = String(ahora.getMonth() + 1).padStart(2, '0');
            const dia = String(ahora.getDate()).padStart(2, '0');
            const horas = String(ahora.getHours()).padStart(2, '0');
            const minutos = String(ahora.getMinutes()).padStart(2, '0');
            registroData.fechaHoraInicio = `${año}-${mes}-${dia}T${horas}:${minutos}`;
        }

        if (!registroData.fechaHoraFin) {
            this.snackBar.open('Debe ingresar una fecha/hora de fin', 'Cerrar', { duration: 3000 });
            this.loading = false;
            this.cdr.detectChanges();
            return;
        }

        const inicioDate = new Date(registroData.fechaHoraInicio);
        const finDate = new Date(registroData.fechaHoraFin);
        if (finDate <= inicioDate) {
            this.snackBar.open('La fecha/hora de fin debe ser posterior a la fecha/hora de inicio', 'Cerrar', { duration: 5000 });
            this.loading = false;
            this.cdr.detectChanges();
            return;
        }

        if (this.editMode && this.selectedRegistroId) {
            this.snackBar.open('Edición no disponible para registros completos', 'Cerrar', { duration: 3000 });
            this.loading = false;
            this.cdr.detectChanges();
            this.closeForm();
            return;
        }

        this.registroService.crearRegistroCompleto(registroData).subscribe({
            next: () => {
                this.snackBar.open('Registro creado', 'Cerrar', { duration: 3000 });
                this.loadRegistros();
                this.closeForm();
                this.loading = false;
                this.cdr.detectChanges();
            },
            error: (error) => {
                const errorMessage = error.error?.message || error.message || 'Error desconocido';
                this.snackBar.open('Error al crear registro: ' + errorMessage, 'Cerrar', { duration: 3000 });
                this.loading = false;
                this.cdr.detectChanges();
            }
        });
    }
    // =================== TIMER DIRECTO (sin fecha fin) ===================
    else {
        const hayCorriendo = this.registroActivo && this.registroActivo.estadoTimer === 'CORRIENDO';
        if (hayCorriendo) {
            this.snackBar.open('⚠️ Ya hay un timer corriendo. Debes pausarlo o finalizarlo antes de iniciar otro.', 'Cerrar', { duration: 5000 });
            this.loading = false;
            this.cdr.detectChanges();
            this.closeForm();
            return;
        }

        if (!registroData.fechaHoraInicio) {
            const ahora = new Date();
            ahora.setSeconds(0);
            const año = ahora.getFullYear();
            const mes = String(ahora.getMonth() + 1).padStart(2, '0');
            const dia = String(ahora.getDate()).padStart(2, '0');
            const horas = String(ahora.getHours()).padStart(2, '0');
            const minutos = String(ahora.getMinutes()).padStart(2, '0');
            registroData.fechaHoraInicio = `${año}-${mes}-${dia}T${horas}:${minutos}`;
        }

        this.registroService.iniciarRegistro(registroData).subscribe({
            next: () => {
                this.snackBar.open('Timer iniciado', 'Cerrar', { duration: 3000 });
                this.cargarRegistroActivo();
                this.loadRegistros();
                this.closeForm();
                this.loading = false;
                this.cdr.detectChanges();
            },
            error: (error) => {
                const errorMessage = error.error?.message || error.message || 'Error desconocido';
                if (errorMessage.includes('Ya tiene un registro de tiempo activo')) {
                    this.snackBar.open('⚠️ Ya tienes un timer activo.', 'Cerrar', { duration: 5000 });
                } else {
                    this.snackBar.open('Error al iniciar timer: ' + errorMessage, 'Cerrar', { duration: 5000 });
                }
                this.loading = false;
                this.cdr.detectChanges();
            }
        });
    }
  }

  // Pausar un registro desde la tabla
  pausarRegistroDesdeTabla(registro: RegistroTiempo): void {
    if (registro.estadoTimer !== 'CORRIENDO') {
      this.snackBar.open('Solo se puede pausar un timer que esté corriendo', 'Cerrar', { duration: 3000 });
      return;
    }
    this.detenerContador();
    this.loading = true;
    this.cdr.detectChanges();
    this.registroService.pausarRegistro(registro.id).subscribe({
      next: () => {
        this.snackBar.open('Timer pausado', 'Cerrar', { duration: 3000 });
        this.cargarRegistroActivo();
        this.loadRegistros();
        this.cargarTimersPausados();
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.snackBar.open('Error al pausar: ' + (error.error?.message || error.message), 'Cerrar', { duration: 5000 });
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  // Reanudar un registro desde la tabla
  reanudarRegistroDesdeTabla(registro: RegistroTiempo): void {
    if (registro.estadoTimer !== 'PAUSADO') {
      this.snackBar.open('Solo se puede reanudar un timer que esté pausado', 'Cerrar', { duration: 3000 });
      return;
    }
    this.loading = true;
    this.cdr.detectChanges();
    this.registroService.reanudarTimerEspecifico(registro.id).subscribe({
      next: () => {
        this.snackBar.open(`Timer reanudado para caso: ${this.getNombreCaso(registro.casoId)}`, 'Cerrar', { duration: 3000 });
        this.cargarRegistroActivo();
        this.loadRegistros();
        this.cargarTimersPausados();
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.snackBar.open('Error al reanudar: ' + (error.error?.message || error.message), 'Cerrar', { duration: 5000 });
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  // Finalizar un registro desde la tabla
  finalizarRegistroDesdeTabla(registro: RegistroTiempo): void {
    if (registro.estadoTimer === 'FINALIZADO') {
      this.snackBar.open('Este registro ya está finalizado', 'Cerrar', { duration: 3000 });
      return;
    }
    this.detenerContador();
    this.loading = true;
    this.cdr.detectChanges();
    this.registroService.finalizarRegistro(registro.id).subscribe({
      next: () => {
        this.snackBar.open('Timer finalizado', 'Cerrar', { duration: 3000 });
        this.cargarRegistroActivo();
        this.loadRegistros();
        this.cargarTimersPausados();
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.snackBar.open('Error al finalizar: ' + (error.error?.message || error.message), 'Cerrar', { duration: 3000 });
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  // Reanudar timer desde diálogo
  reanudarTimerPausado(registro: RegistroTiempo): void {
    this.loading = true;
    this.registroService.reanudarTimerEspecifico(registro.id).subscribe({
      next: () => {
        this.snackBar.open(`Timer reanudado para caso: ${this.getNombreCaso(registro.casoId)}`, 'Cerrar', { duration: 3000 });
        this.cargarRegistroActivo();
        this.loadRegistros();
        this.cargarTimersPausados();
        this.mostrarTimersPausados = false;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        const errorMessage = error.error?.message || error.message || 'Error desconocido';
        this.snackBar.open('Error al reanudar: ' + errorMessage, 'Cerrar', { duration: 5000 });
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  finalizarTimer(): void {
    if (this.registroActivo) {
      this.loading = true;
      this.registroService.finalizarRegistro(this.registroActivo.id).subscribe({
        next: () => {
          this.snackBar.open('Timer finalizado', 'Cerrar', { duration: 3000 });
          this.cargarRegistroActivo();
          this.loadRegistros();
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: (error) => {
          const errorMessage = error.error?.message || error.message || 'Error desconocido';
          this.snackBar.open('Error al finalizar timer: ' + errorMessage, 'Cerrar', { duration: 3000 });
          this.loading = false;
          this.cdr.detectChanges();
        }
      });
    }
  }

  deleteRegistro(id: string): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {
        title: 'Confirmar eliminación',
        message: '¿Estás seguro de eliminar este registro de tiempo? Esta acción no se puede deshacer.',
        confirmText: 'Eliminar',
        cancelText: 'Cancelar'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loading = true;
        this.cdr.detectChanges();

        this.registroService.deleteRegistro(id).subscribe({
          next: () => {
            this.snackBar.open('Registro eliminado', 'Cerrar', { duration: 3000 });
            this.cargarRegistroActivo();
            this.loadRegistros();
            this.loading = false;
            this.cdr.detectChanges();
          },
          error: (error) => {
            const errorMessage = error.error?.message || error.message || 'Error desconocido';
            this.snackBar.open('Error al eliminar registro: ' + errorMessage, 'Cerrar', { duration: 3000 });
            this.loading = false;
            this.cdr.detectChanges();
          }
        });
      }
    });
  }

  cerrarDialogoPausados(): void {
    this.mostrarTimersPausados = false;
  }

  formatFecha(fecha: Date): string {
    if (!fecha) return '-';
    return new Date(fecha).toLocaleString();
  }

  getNombreCaso(casoId: string): string {
    const caso = this.casos.find(c => c.id === casoId);
    return caso ? caso.titulo : 'Cargando...';
  }

  formatHoras(horas: number): string {
    if (!horas && horas !== 0) return '-';
    const minutosTotales = horas * 60;
    const minutos = Math.floor(minutosTotales);
    const segundos = Math.round((minutosTotales - minutos) * 60);
    if (minutos > 0 && segundos > 0) return `${minutos}m ${segundos}s`;
    if (minutos > 0) return `${minutos}m`;
    if (segundos > 0) return `${segundos}s`;
    return '0s';
  }

  private formatearTiempo(segundosTotales: number): string {
    const horas = Math.floor(segundosTotales / 3600);
    const minutos = Math.floor((segundosTotales % 3600) / 60);
    const segundos = segundosTotales % 60;
    return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
  }

  iniciarContador(): void {
    if (this.intervalo) clearInterval(this.intervalo);
    if (this.registroActivo && this.registroActivo.estadoTimer === 'CORRIENDO') {
      this.intervalo = setInterval(() => {
        if (!this.registroActivo) return;
        const inicio = new Date(this.registroActivo.fechaHoraInicio);
        const ahora = new Date();
        let segundos = Math.floor((ahora.getTime() - inicio.getTime()) / 1000);
        if (this.registroActivo.horasAcumuladas) {
          segundos += this.registroActivo.horasAcumuladas * 3600;
        }
        this.tiempoTranscurrido = this.formatearTiempo(segundos);
        this.cdr.detectChanges(); // para actualizar la vista
      }, 1000);
    }
  }

  detenerContador(): void {
    if (this.intervalo) {
      clearInterval(this.intervalo);
      this.intervalo = null;
    }
  }

  ngOnDestroy(): void {
    this.detenerContador();
  }

}