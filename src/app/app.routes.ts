import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { CasosComponent } from './components/casos/casos.component';
import { RegistrosTiempoComponent } from './components/registros-tiempo/registros-tiempo.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'clientes', component: ClientesComponent, canActivate: [AuthGuard] },
  { path: 'casos', component: CasosComponent, canActivate: [AuthGuard] },
  { path: 'registros-tiempo', component: RegistrosTiempoComponent, canActivate: [AuthGuard] },
  { path: 'facturas', component: FacturasComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];