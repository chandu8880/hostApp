import { Routes } from '@angular/router';
import { Shell } from './components/shell/shell';

export const shellRoutes: Routes = [
    {
      path: '',
      component: Shell,
      children: [
        {
          path: '',
          redirectTo: 'dashboard',
          pathMatch: 'full'
        },
        {
          path: 'dashboard',
          loadChildren: () =>
            import('./../dashboard/dashboard.routing.module').then(m => m.dashboardRoutes)
        },
        {
          path: 'users',
          loadChildren: () =>
            import('./../users/users.routing.module').then(m => m.userRoutes)
        }
      ]
    },
    {
      path: '',
      redirectTo: 'shell',
      pathMatch: 'full'
    }
  ];
  