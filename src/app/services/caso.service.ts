import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Caso } from '../models/caso.model';

@Injectable({
  providedIn: 'root'
})
export class CasoService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCasos(): Observable<Caso[]> {
    return this.http.get<Caso[]>(`${this.apiUrl}/casos`);
  }

  getCasosPorCliente(clienteId: string): Observable<Caso[]> {
    return this.http.get<Caso[]>(`${this.apiUrl}/casos/cliente/${clienteId}`);
  }

  getCaso(id: string): Observable<Caso> {
    return this.http.get<Caso>(`${this.apiUrl}/casos/${id}`);
  }

  createCaso(caso: Partial<Caso>): Observable<Caso> {
    return this.http.post<Caso>(`${this.apiUrl}/casos`, caso);
  }

  updateCaso(id: string, caso: Partial<Caso>): Observable<Caso> {
    return this.http.put<Caso>(`${this.apiUrl}/casos/${id}`, caso);
  }

  deleteCaso(id: string): Observable<void> {
    console.log('🔵 Service - Eliminando caso con ID:', id);
    return this.http.delete<void>(`${this.apiUrl}/casos/${id}`);
  }

  cambiarEstado(id: string, estado: string): Observable<Caso> {
    return this.http.patch<Caso>(`${this.apiUrl}/casos/${id}/estado?estado=${estado}`, {});
  }
}