import { Routes } from '@angular/router';
import { NoFound404Component } from './no-found404/no-found404.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {path: 'auth', component: AuthComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', component: DashboardComponent},
  {path: '**', component: NoFound404Component}
];
