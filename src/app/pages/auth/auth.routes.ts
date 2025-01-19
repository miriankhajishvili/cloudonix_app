import { Routes } from '@angular/router';
import { loginGuard } from '../../core/guards/login.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./log-in/log-in.component').then((m) => m.LogInComponent),
        canActivate: [loginGuard],
      },
    ],
  },
];
