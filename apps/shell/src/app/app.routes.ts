import { loadRemoteModule } from '@angular-architects/native-federation';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'landing',
        loadChildren: () =>
            loadRemoteModule('landing', './routes').then((m) => m.appRoutes),
    },
    {
        path: 'request',
        loadChildren: () =>
            loadRemoteModule('request', './routes').then((m) => m.appRoutes),
    },
];
