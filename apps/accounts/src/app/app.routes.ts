import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AccountsComponent } from './accounts.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: AccountsComponent,
        children: [{ path: 'profile', component: ProfileComponent }],
    },
];
