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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog';
import { MatDialogModule } from '@angular/material/dialog';

import { CasoService } from '../../services/caso.service';
import { ClienteService } from '../../services/cliente.service';
import { AuthService } from '../../services/auth.service';
import { Caso, ESTADOS_CASO } from '../../models/caso.model';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-casos',
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
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  templateUrl: './casos.component.html',
  styleUrls: ['./casos.component.css']
})

export class CasosComponent implements OnInit {
  casos: Caso[] = [];
  clientes: Cliente[] = [];
  displayedColumns: string[] = ['titulo', 'cliente', 'numeroExpediente', 'estado', 'acciones'];
  loading = true;
  showForm = false;
  editMode = false;
  selectedCasoId: string | null = null;
  casoForm: FormGroup;
  estados = ESTADOS_CASO;

  constructor(
    private casoService: CasoService,
    private clienteService: ClienteService,
    private authService: AuthService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog
  ) {
    this.casoForm = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: [''],
      numeroExpediente: [''],
      clienteId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadClientes();
    this.loadCasos();
  }

  loadClientes(): void {
    this.clienteService.getClientes().subscribe({
      next: (data: any) => {
        // Corregido: usar 'any' temporalmente o tipar correctamente
        this.clientes = Array.isArray(data) ? data : (data?.content || []);
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al cargar clientes:', error);
      }
    });
  }

  loadCasos(): void {
    const token = this.authService.getToken();
    if (!token) {
      this.authService.logout();
      window.location.href = '/login';
      return;
    }

    this.loading = true;
    this.cdr.detectChanges();

    this.casoService.getCasos().subscribe({
      next: (data: any) => {
        console.log('📦 Casos recibidos:', data);
        // Corregido: usar 'any' temporalmente
        this.casos = Array.isArray(data) ? data : (data?.content || []);
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('❌ Error al cargar casos:', error);
        this.snackBar.open('Error al cargar casos', 'Cerrar', { duration: 3000 });
        this.loading = false;
        this.cdr.detectChanges();

        if (error.status === 401 || error.status === 403) {
          this.authService.logout();
          window.location.href = '/login';
        }
      }
    });
  }

  openForm(): void {
    this.showForm = true;
    this.editMode = false;
    this.selectedCasoId = null;
    this.casoForm.reset({ estado: 'ACTIVO' });
  }

  closeForm(): void {
    this.showForm = false;
    this.casoForm.reset();
  }

  editCaso(caso: Caso): void {
    this.editMode = true;
    this.selectedCasoId = caso.id;
    this.casoForm.patchValue({
      titulo: caso.titulo,
      descripcion: caso.descripcion,
      numeroExpediente: caso.numeroExpediente,
      estado: caso.estado,
      clienteId: caso.clienteId
    });
    this.showForm = true;
  }

  saveCaso(): void {
    if (this.casoForm.invalid) return;

    this.loading = true;
    const casoData = this.casoForm.value;

    if (this.editMode && this.selectedCasoId) {
      this.casoService.updateCaso(this.selectedCasoId, casoData).subscribe({
        next: () => {
          this.snackBar.open('Caso actualizado', 'Cerrar', { duration: 3000 });
          this.loadCasos();
          this.closeForm();
        },
        error: (error) => {
          this.snackBar.open('Error al actualizar caso', 'Cerrar', { duration: 3000 });
          this.loading = false;
        }
      });
    } else {
      this.casoService.createCaso(casoData).subscribe({
        next: () => {
          this.snackBar.open('Caso creado', 'Cerrar', { duration: 3000 });
          this.loadCasos();
          this.closeForm();
        },
        error: (error) => {
          this.snackBar.open('Error al crear caso', 'Cerrar', { duration: 3000 });
          this.loading = false;
        }
      });
    }
  }
/*
  cambiarEstado(caso: Caso, nuevoEstado: string): void {
    this.casoService.cambiarEstado(caso.id, nuevoEstado).subscribe({
      next: () => {
        this.snackBar.open(`Estado cambiado a ${nuevoEstado}`, 'Cerrar', { duration: 3000 });
        this.loadCasos();
      },
      error: (error) => {
        this.snackBar.open('Error al cambiar estado', 'Cerrar', { duration: 3000 });
      }
    });
  }
*/

  deleteCaso(id: string): void {
    console.log('🔴 ELIMINAR - Entró al método con ID:', id);
    
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {
        title: 'Confirmar eliminación',
        message: '¿Estás seguro de eliminar este caso? Esta acción no se puede deshacer.',
        confirmText: 'Eliminar',
        cancelText: 'Cancelar'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('🔴 Resultado del diálogo:', result);
      
      if (result) {
        console.log('🔴 ELIMINAR - Confirmado, procediendo...');
        this.loading = true;
        
        this.casoService.deleteCaso(id).subscribe({
          next: () => {
            console.log('✅ Eliminado correctamente');
            this.snackBar.open('Caso eliminado', 'Cerrar', { duration: 3000 });
            this.loadCasos();
          },
          error: (error) => {
            console.error('❌ Error:', error);
            this.snackBar.open('Error al eliminar caso', 'Cerrar', { duration: 3000 });
            this.loading = false;
          }
        });
      } else {
        console.log('🔴 ELIMINAR - Cancelado por el usuario');
      }
    });
  }

}