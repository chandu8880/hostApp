import { Routes } from '@angular/router';
import { Shell } from './components/shell/shell';
import { AuthGuard } from '../auth.service';

export const shellRoutes: Routes = [
  {
    path: '',
    component: Shell,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./../dashboard/dashboard.routing.module').then(m => m.dashboardRoutes),
        canActivate: [AuthGuard],
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./../users/users.routing.module').then(m => m.userRoutes),
        canActivate: [AuthGuard],
      }
    ]
  },
  {
    path: '',
    redirectTo: 'shell',
    pathMatch: 'full'
  }
];
