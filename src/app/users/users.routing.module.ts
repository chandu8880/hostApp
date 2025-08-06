import { Routes } from '@angular/router';
import { UsersLists } from './components/users-lists/users-lists';
import { UserCreate } from './components/user-create/user-create';

export const userRoutes: Routes = [
    {
        path: '',
        component: UsersLists
    },
    {
        path: 'userscreate',
        component: UserCreate
    }
];
