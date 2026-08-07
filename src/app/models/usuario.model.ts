export interface Usuario {
  id: string;
  nombre: string;
  apellido: string;
  email: string;
  matricula: string;
  telefono?: string;
  estudioJuridico?: string;
  rol: string;
}