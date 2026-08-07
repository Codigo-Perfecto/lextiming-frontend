import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { FacturaService } from '../../services/factura.service';

@Component({
  selector: 'app-pago-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  template: `
    <h2 mat-dialog-title>Registrar Pago</h2>
    <mat-dialog-content>
      <mat-form-field appearance="outline" class="full-width">
        <mat-label>Medio de pago</mat-label>
        <mat-select [(ngModel)]="medioPago" required>
          <mat-option value="TRANSFERENCIA">Transferencia bancaria</mat-option>
          <mat-option value="TARJETA_CREDITO">Tarjeta de crédito</mat-option>
          <mat-option value="TARJETA_DEBITO">Tarjeta de débito</mat-option>
          <mat-option value="CONTADO">Contado (efectivo)</mat-option>
          <mat-option value="CHEQUE">Cheque</mat-option>
        </mat-select>
      </mat-form-field>
      <mat-form-field appearance="outline" class="full-width">
        <mat-label>Fecha de pago</mat-label>
        <input matInput [matDatepicker]="picker" [(ngModel)]="fechaPago">
        <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
        <mat-datepicker #picker></mat-datepicker>
      </mat-form-field>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="cancelar()">Cancelar</button>
      <button mat-raised-button color="primary" (click)="confirmar()" [disabled]="!medioPago">Confirmar pago</button>
    </mat-dialog-actions>
  `,
  styles: [`
    .full-width { width: 100%; margin-bottom: 16px; }
  `]
})

export class PagoDialogComponent {
  medioPago = '';
  fechaPago = new Date();

  constructor(
    private facturaService: FacturaService,
    public dialogRef: MatDialogRef<PagoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { facturaId: string }
  ) {}

  confirmar(): void {
    this.facturaService.registrarPago(this.data.facturaId, this.medioPago, this.fechaPago).subscribe({
      next: () => {
        this.dialogRef.close(true);
      },
      error: (err) => {
        console.error(err);
        // Aquí podrías mostrar un snackbar con el error
      }
    });
  }

  cancelar(): void {
    this.dialogRef.close(false);
  }
}