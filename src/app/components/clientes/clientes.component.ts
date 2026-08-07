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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog';
import { MatDialogModule } from '@angular/material/dialog';

import { ClienteService } from '../../services/cliente.service';
import { AuthService } from '../../services/auth.service';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-clientes',
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
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  displayedColumns: string[] = ['nombre', 'apellido', 'email', 'telefono', 'acciones'];
  loading = true;
  showForm = false;
  editMode = false;
  selectedClienteId: string | null = null;
  clienteForm: FormGroup;

  constructor(
    private clienteService: ClienteService,
    private authService: AuthService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog
  ) {
    this.clienteForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: [''],
      documento: [''],
      direccion: [''],
      notas: ['']
    });
  }

  ngOnInit(): void {
    this.loadClientes();
  }

  loadClientes(): void {
    // Verificar si hay token antes de cargar
    const token = this.authService.getToken();
    console.log('🔵 Token en loadClientes:', token ? 'presente' : 'ausente');
    
    if (!token) {
      console.log('🔴 No hay token, redirigiendo a login');
      this.authService.logout();
      window.location.href = '/login';
      return;
    }
    
    this.loading = true;
    this.cdr.detectChanges(); // Forzar actualización de la vista
    
    this.clienteService.getClientes().subscribe({
      next: (data) => {
        console.log('📦 Respuesta del backend:', data);
        
        if (Array.isArray(data)) {
          this.clientes = data;
        } else if (data && (data as any).content) {
          this.clientes = (data as any).content;
        } else {
          this.clientes = [];
        }
        
        this.loading = false;
        this.cdr.detectChanges(); // Forzar actualización después de cargar
      },
      error: (error) => {
        console.error('❌ Error:', error);
        this.snackBar.open('Error al cargar clientes', 'Cerrar', { duration: 3000 });
        this.loading = false;
        this.cdr.detectChanges();
        
        // Si el token expiró o es inválido
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
    this.selectedClienteId = null;
    this.clienteForm.reset();
  }

  closeForm(): void {
    this.showForm = false;
    this.clienteForm.reset();
  }

  editCliente(cliente: Cliente): void {
    this.editMode = true;
    this.selectedClienteId = cliente.id;
    this.clienteForm.patchValue({
      nombre: cliente.nombre,
      apellido: cliente.apellido,
      email: cliente.email,
      telefono: cliente.telefono,
      documento: cliente.documento,
      direccion: cliente.direccion,
      notas: cliente.notas
    });
    this.showForm = true;
  }

  saveCliente(): void {
    if (this.clienteForm.invalid) return;

    this.loading = true;
    const clienteData = this.clienteForm.value;

    if (this.editMode && this.selectedClienteId) {
      this.clienteService.updateCliente(this.selectedClienteId, clienteData).subscribe({
        next: () => {
          this.snackBar.open('Cliente actualizado', 'Cerrar', { duration: 3000 });
          this.loadClientes();
          this.closeForm();
        },
        error: (error) => {
          this.snackBar.open('Error al actualizar cliente', 'Cerrar', { duration: 3000 });
          this.loading = false;
        }
      });
    } else {
      this.clienteService.createCliente(clienteData).subscribe({
        next: () => {
          this.snackBar.open('Cliente creado', 'Cerrar', { duration: 3000 });
          this.loadClientes();
          this.closeForm();
        },
        error: (error) => {
          this.snackBar.open('Error al crear cliente', 'Cerrar', { duration: 3000 });
          this.loading = false;
        }
      });
    }
  }

  deleteCliente(id: string): void {
    console.log('🔴 ELIMINAR CLIENTE - ID:', id);
    
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {
        title: 'Confirmar eliminación',
        message: '¿Estás seguro de eliminar este cliente? Esta acción no se puede deshacer.',
        confirmText: 'Eliminar',
        cancelText: 'Cancelar'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('🔴 Resultado del diálogo:', result);
      
      if (result) {
        console.log('🔴 Eliminando cliente...');
        this.loading = true;
        
        this.clienteService.deleteCliente(id).subscribe({
          next: () => {
            this.snackBar.open('Cliente eliminado', 'Cerrar', { duration: 3000 });
            this.loadClientes();
            this.loading = false;
          },
          error: (error) => {
            const errorMessage = error.error?.message || error.message || 'Error al eliminar cliente';
            this.snackBar.open(errorMessage, 'Cerrar', { duration: 5000 });
            this.loading = false;
          }
        });
      }
    });
  }
}