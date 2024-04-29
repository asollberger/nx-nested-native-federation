import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ClientsComponent } from './clients.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: ClientsComponent,
        children: [{ path: 'profile', component: ProfileComponent }],
    },
];
