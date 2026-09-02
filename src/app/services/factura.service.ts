import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { Factura } from '../models/factura.model';

@Injectable({
  providedIn: 'root'
})

export class FacturaService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getFacturas(): Observable<Factura[]> {
    return this.http.get<Factura[]>(`${this.apiUrl}/facturas`);
  }

  getFacturasPorCaso(casoId: string): Observable<Factura[]> {
    return this.http.get<Factura[]>(`${this.apiUrl}/facturas/caso/${casoId}`);
  }

  getFactura(id: string): Observable<Factura> {
    return this.http.get<Factura>(`${this.apiUrl}/facturas/${id}`);
  }

  createFactura(factura: Partial<Factura>): Observable<Factura> {
    return this.http.post<Factura>(`${this.apiUrl}/facturas`, factura);
  }

  createFacturaAutomatica(casoId: string, numeroFactura: string, tarifaPorHora: number, diasVencimiento?: number): Observable<Factura> {
    let url = `${this.apiUrl}/facturas/auto/${casoId}?numeroFactura=${numeroFactura}&tarifaPorHora=${tarifaPorHora}`;
    if (diasVencimiento) {
      url += `&diasVencimiento=${diasVencimiento}`;
    }
    return this.http.post<Factura>(url, {});
  }

  actualizarEstado(id: string, estado: string): Observable<Factura> {
    return this.http.patch<Factura>(`${this.apiUrl}/facturas/${id}/estado?estado=${estado}`, {});
  }

  updateFactura(id: string, factura: Partial<Factura>): Observable<Factura> {
    // Nota: El backend puede no tener PUT para facturas
    return this.http.put<Factura>(`${this.apiUrl}/facturas/${id}`, factura);
  }

  deleteFactura(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/facturas/${id}`);
  }

  getTotalFacturadoPorCaso(casoId: string): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/facturas/caso/${casoId}/total-facturado`);
  }

  registrarPago(id: string, medioPago: string, fechaPago?: Date): Observable<Factura> {
    const body = { medioPago, fechaPago };
    return this.http.patch<Factura>(`${this.apiUrl}/facturas/${id}/pagar`, body);
  }

  getCasosConTimerActivo(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/registros-tiempo/casos-activos`);
  }

  cancelarFactura(id: string): Observable<Factura> {
    return this.http.patch<Factura>(`${this.apiUrl}/facturas/${id}/cancelar`, {});
  }
  
}