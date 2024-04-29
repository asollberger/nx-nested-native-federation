const {
    withNativeFederation,
    shareAll,
} = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
    name: 'landing',

    exposes: {
        // './LandingComponent': './apps/landing/src/app/landing.component.ts'
        './routes': './apps/landing/src/app/app.routes.ts',
    },

    shared: {
        ...shareAll({
            singleton: true,
            strictVersion: true,
            requiredVersion: 'auto',
        }),
    },

    skip: [
        'rxjs/ajax',
        'rxjs/fetch',
        'rxjs/testing',
        'rxjs/webSocket',
        // Add further packages you don't need at runtime
    ],
});
