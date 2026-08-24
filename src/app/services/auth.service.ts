import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  barNumber: string;
  phone?: string;
  lawFirm?: string;
}

export interface AuthResponse {
  token: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.production 
    ? 'https://lextiming-backend.onrender.com/api'   // ← URL de producción
    : environment.apiUrl;                            // ← URL de desarrollo

  private tokenKey = 'auth_token';

  constructor(private http: HttpClient) {
    console.log('🌐 API URL:', this.apiUrl);
  }

  register(data: RegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/register`, data);
  }

  login(data: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/login`, data)
      .pipe(
        tap(response => {
          console.log('Login response:', response);
          if (response.token) {
            this.setToken(response.token);
            console.log('Token guardado:', response.token);
          }
        })
      );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    return this.isTokenValid();
  }

  // Verificar si el token tiene formato válido
  isTokenValid(): boolean {
    const token = this.getToken();
    if (!token) return false;
    
    // Verificar formato básico de JWT (eyJ...)
    const parts = token.split('.');
    if (parts.length !== 3) return false;
    
    // Verificar si está expirado (opcional)
    try {
      const payload = JSON.parse(atob(parts[1]));
      const exp = payload.exp;
      if (exp && Date.now() >= exp * 1000) {
        this.logout(); // Limpiar token expirado
        return false;
      }
    } catch (e) {
      this.logout(); // Limpiar token corrupto
      return false;
    }
    
    return true;
  }

}