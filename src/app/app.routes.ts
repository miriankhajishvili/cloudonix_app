import { Routes } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/auth/auth.routes').then((m) => m.routes),
  },

  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: '',
        redirectTo: 'products-list',
        pathMatch: 'full',
      },
      {
        path: 'products-list',
        loadComponent: () =>
          import('./pages/products-list/products-list.component').then(
            (m) => m.ProductsListComponent
          ),
        canActivate: [authGuard],
      },
      {
        path: 'products-detail/:id',
        loadComponent: () =>
          import('./pages/products-detail/prodacts-detail.component').then(
            (m) => m.ProdactsDetailComponent
          ),
        canActivate: [authGuard],
      },
      {
        path: '**',
        pathMatch: 'full',
        loadComponent: () =>
          import(
            './shared/components/page-not-found/pagenotfound.component'
          ).then((m) => m.PagenotfoundComponent),
      },
    ],
  },
];
