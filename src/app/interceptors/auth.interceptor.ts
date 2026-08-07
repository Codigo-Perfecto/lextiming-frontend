import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('🔵 INTERCEPTOR EJECUTADO - URL:', req.url);
  const authService = inject(AuthService);
  const router = inject(Router);
  
  // Excluir endpoints de autenticación
  const authUrls = ['/auth/login', '/auth/register'];
  const shouldSkip = authUrls.some(url => req.url.includes(url));
  
  if (shouldSkip) {
    return next(req);
  }
  
  const token = authService.getToken();
  
  if (token) {
    // Verificar si el token tiene formato válido (empieza con eyJ)
    const isValidFormat = token.startsWith('eyJ');
    
    if (!isValidFormat) {
      console.warn('Token con formato inválido, limpiando...');
      authService.logout();
      router.navigate(['/login']);
      return next(req);
    }
    
    const cloned = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
    
    return next(cloned).pipe(
      catchError((error) => {
        // Verificar si el error es de negocio (mensaje específico del backend)
        const errorMessage = error.error?.message || error.message || '';
        
        // Si el mensaje contiene "timer activo" (para ambos casos: ya hay timer activo o no se puede agregar manual)
        if (errorMessage.includes('timer activo') || errorMessage.includes('Ya tiene un registro de tiempo activo')) {
            console.warn('⚠️ Error de negocio (timer activo):', errorMessage);
            return throwError(() => error);
        }

        // Si el error es "ya hay un timer activo", NO redirigir al login
        if (errorMessage.includes('Ya tiene un registro de tiempo activo')) {
          console.warn('⚠️ Error de negocio:', errorMessage);
          return throwError(() => error);
        }
        
        // Si es otro error de validación de negocio (ej: "No tiene acceso")
        if (error.status === 403 && errorMessage.includes('acceso')) {
          console.warn('⚠️ Error de acceso:', errorMessage);
          return throwError(() => error);
        }
        
        // Solo redirigir a login si es error de autenticación (401)
        if (error.status === 401) {
          console.warn('Token inválido o expirado, redirigiendo a login...');
          authService.logout();
          router.navigate(['/login']);
        }
        
        // Para otros errores (400, 500, etc.), solo propagarlos sin redirigir
        return throwError(() => error);
      })
    );
  }
  
  return next(req);
};