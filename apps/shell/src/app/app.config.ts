import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideRequestConfig } from '@my/request-store';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(appRoutes),
        provideHttpClient(),
        // FIXME I shouldn't have to provide everything at the shell/dynamic host level
        // provideRequestConfig({ apiPath: '/api' })
    ],
};
