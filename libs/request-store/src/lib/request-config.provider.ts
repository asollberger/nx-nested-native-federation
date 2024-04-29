import {
    EnvironmentProviders,
    InjectionToken,
    makeEnvironmentProviders,
    ValueProvider,
} from '@angular/core';

export interface RequestConfig {
    apiPath: string;
}

export const REQUEST_CONFIG_TOKEN = new InjectionToken<RequestConfig>(
    'request-config'
);

export function provideRequestConfig(
    config: RequestConfig
): EnvironmentProviders {
    return makeEnvironmentProviders([
        { provide: REQUEST_CONFIG_TOKEN, useValue: config },
    ]);
}
