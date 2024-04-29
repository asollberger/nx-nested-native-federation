import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { REQUEST_CONFIG_TOKEN } from './request-config.provider';
import { RequestStoreDto } from './request-store.interface';
import { map, Observable, pipe } from 'rxjs';

interface Activity {
    activity: string;
    type: string;
    key: string;
}

@Injectable({ providedIn: 'root' })
export class RequestStoreService {
    private _httpClient = inject(HttpClient);
    private _requestConfig = inject(REQUEST_CONFIG_TOKEN);

    getData(): Observable<RequestStoreDto> {
        const url = `${this._requestConfig.apiPath}/activity`;
        // mock the accounts and clients
        return this._httpClient.get<Activity>(url).pipe(
            map(
                ({ activity, type, key }) =>
                    ({
                        accounts: { [key]: { type } },
                        clients: { [key]: { name: activity } },
                    } as RequestStoreDto)
            )
        );
    }
}
