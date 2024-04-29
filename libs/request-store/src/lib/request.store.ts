import {
    patchState,
    signalStore,
    withComputed,
    withHooks,
    withMethods,
    withState,
} from '@ngrx/signals';
import { computed, inject } from '@angular/core';
import { RequestStoreService } from './request-store.service';
import { Account, Client } from './request-store.interface';

export const RequestStore = signalStore(
    { providedIn: 'root' },
    withState({
        isLoading: false,
        accounts: {},
        clients: {},
    }),
    withComputed((store) => ({
        account: computed(() => Object.values(store.accounts())[0] as Account),
        client: computed(() => Object.values(store.clients())[0] as Client),
    })),
    withMethods((store) => {
        const requestStoreService = inject(RequestStoreService);
        return {
            load: (requestId: number) => {
                patchState(store, { isLoading: true });
                requestStoreService.getData().subscribe({
                    next: ({ accounts, clients }) => {
                        patchState(store, { accounts, clients });
                    },
                    error: console.error,
                    complete: () => {
                        patchState(store, { isLoading: false });
                    },
                });
            },
        };
    }),
    withHooks({
        onInit({ load }) {
            load(7118276);
        },
        onDestroy() {
            // a clear would probably be smart
            console.log('RequestStore destroyed');
        },
    })
);
