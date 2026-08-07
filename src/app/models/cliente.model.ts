export interface Cliente {
  id: string;
  nombre: string;
  apellido: string;
  email: string;
  telefono?: string;
  documento?: string;
  direccion?: string;
  notas?: string;
  fechaCreacion: Date;
}