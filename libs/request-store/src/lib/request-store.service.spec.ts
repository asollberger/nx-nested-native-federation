import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RequestStoreService } from './request-store.service';
import { REQUEST_CONFIG_TOKEN } from './request-config.provider';

describe('RequestStoreService', () => {
    let service: RequestStoreService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                { provide: REQUEST_CONFIG_TOKEN, useValue: { apiPath: 'api' } },
            ],
        });
        service = TestBed.inject(RequestStoreService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
