import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadChildren: () =>
            import('./auth/auth.routing.module').then(m => m.authRoutes)
    },
    {
        path: 'shell',
        loadChildren: () =>
            import('./shell/shell.route.module').then(m => m.shellRoutes)
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
];
