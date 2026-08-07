export interface Caso {
  id: string;
  titulo: string;
  descripcion?: string;
  numeroExpediente?: string;
  estado: string;
  clienteId: string;
  clienteNombre?: string;
  clienteApellido?: string;
  fechaCreacion: Date;
}

export const ESTADOS_CASO = [
  'ACTIVO',
  'CERRADO',
  'SUSPENDIDO',
  'ARCHIVADO'
];