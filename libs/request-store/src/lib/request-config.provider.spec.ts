import { provideRequestConfig, RequestConfig } from './request-config.provider';

describe('RequestConfigProvider', () => {
    it('should create an instance', () => {
        const config = { apiPath: 'test' } as RequestConfig;
        expect(provideRequestConfig(config)).toBeDefined();
    });
});
