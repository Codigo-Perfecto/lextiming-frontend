import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { RegistroTiempo } from '../models/registro-tiempo.model';

@Injectable({
  providedIn: 'root'
})
export class RegistroTiempoService {
  //  Detección automática del entorno
  private apiUrl = window.location.hostname === 'localhost' 
    ? environment.apiUrl 
    : 'https://lextiming-backend.onrender.com/api';     // URL de desarrollo

  constructor(private http: HttpClient) {}

  getRegistros(): Observable<RegistroTiempo[]> {
    return this.http.get<RegistroTiempo[]>(`${this.apiUrl}/registros-tiempo`);
  }

  getRegistrosPorCaso(casoId: string): Observable<RegistroTiempo[]> {
    return this.http.get<RegistroTiempo[]>(`${this.apiUrl}/registros-tiempo/caso/${casoId}`);
  }

  getRegistroActivo(): Observable<RegistroTiempo> {
    return this.http.get<RegistroTiempo>(`${this.apiUrl}/registros-tiempo/activo`);
  }

  iniciarRegistro(registro: Partial<RegistroTiempo>): Observable<RegistroTiempo> {
    return this.http.post<RegistroTiempo>(`${this.apiUrl}/registros-tiempo/iniciar`, registro);
  }

  pausarRegistro(id: string): Observable<RegistroTiempo> {
    return this.http.patch<RegistroTiempo>(`${this.apiUrl}/registros-tiempo/${id}/pausar`, {});
  }

  reanudarRegistro(id: string): Observable<RegistroTiempo> {
    return this.http.patch<RegistroTiempo>(`${this.apiUrl}/registros-tiempo/${id}/reanudar`, {});
  }

  finalizarRegistro(id: string): Observable<RegistroTiempo> {
    return this.http.patch<RegistroTiempo>(`${this.apiUrl}/registros-tiempo/${id}/finalizar`, {});
  }

  crearRegistroCompleto(registro: Partial<RegistroTiempo>): Observable<RegistroTiempo> {
    return this.http.post<RegistroTiempo>(`${this.apiUrl}/registros-tiempo`, registro);
  }

  deleteRegistro(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/registros-tiempo/${id}`);
  }

  getTotalHorasPorCaso(casoId: string): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/registros-tiempo/caso/${casoId}/total-horas`);
  }

  // 👇 NUEVOS MÉTODOS

  crearTimerPausado(registro: Partial<RegistroTiempo>): Observable<RegistroTiempo> {
    return this.http.post<RegistroTiempo>(`${this.apiUrl}/registros-tiempo/pausado`, registro);
  }

  listarTimersPausados(): Observable<RegistroTiempo[]> {
    return this.http.get<RegistroTiempo[]>(`${this.apiUrl}/registros-tiempo/pausados`);
  }

  obtenerTimerCorriendo(): Observable<RegistroTiempo> {
    return this.http.get<RegistroTiempo>(`${this.apiUrl}/registros-tiempo/corriendo`);
  }

  pausarTimerActual(): Observable<RegistroTiempo> {
    return this.http.post<RegistroTiempo>(`${this.apiUrl}/registros-tiempo/pausar-actual`, {});
  }

  reanudarTimerEspecifico(registroId: string): Observable<RegistroTiempo> {
    return this.http.post<RegistroTiempo>(`${this.apiUrl}/registros-tiempo/${registroId}/reanudar-especifico`, {});
  }

  casoHasTimerActivo(casoId: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/registros-tiempo/caso/${casoId}/tiene-activo`);
  }

  casoEstaFinalizado(casoId: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/registros-tiempo/caso/${casoId}/finalizado`);
  }

  // Obtener IDs de casos que tienen un timer activo (CORRIENDO o PAUSADO)
  getCasosConTimerActivo(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/registros-tiempo/casos-activos`);
  }
}