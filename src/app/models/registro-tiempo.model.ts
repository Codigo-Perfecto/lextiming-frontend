export interface RegistroTiempo {
  id: string;
  casoId: string;
  casoTitulo?: string;
  fechaHoraInicio: Date;
  fechaHoraInicioOriginal?: Date;  // AGREGAR: Hora de inicio original (para pausa/reanudar)
  fechaHoraFin?: Date;
  horasTotales?: number;
  horasAcumuladas?: number;
  estadoTimer?: string;
  categoria: string;
  descripcion?: string;
  facturable: boolean;
  facturaId?: string;
  fechaCreacion: Date;
  fechaActualizacion?: Date;
}

export const CATEGORIAS_TIEMPO = [
  'AUDIENCIA',
  'REDACCIÓN',
  'INVESTIGACIÓN',
  'CONSULTA_CLIENTE',
  'TRASLADO',
  'ADMINISTRATIVO',
  'OTRO'
];

export const ESTADOS_TIMER = [
  'CORRIENDO',
  'PAUSADO',
  'FINALIZADO'
];