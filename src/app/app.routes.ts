import { Routes } from '@angular/router';
import { NoFound404Component } from './no-found404/no-found404.component';

export const routes: Routes = [
  {path: '**', component: NoFound404Component}
];
