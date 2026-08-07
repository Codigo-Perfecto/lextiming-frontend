export interface Factura {
  id: string;
  numeroFactura: string;
  casoId: string;
  casoTitulo?: string;
  clienteId?: string;
  clienteNombre?: string;
  clienteApellido?: string;
  monto: number;
  horasTrabajadas?: number;
  tarifaPorHora?: number;
  fechaEmision: Date;
  fechaVencimiento?: Date;
  estado: string;
  descripcion?: string;
  fechaCreacion: Date;
  fechaActualizacion?: Date;
  medioPago?: string;
  fechaPago?: Date;
}

export const ESTADOS_FACTURA = [
  'PENDIENTE',
  'PAGADA',
  'VENCIDA',
  'CANCELADA'
];