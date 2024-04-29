import { initFederation } from '@angular-architects/native-federation';

// This works just fine when started directly
initFederation('/assets/local.federation.manifest.json')
    // initFederation()
    .catch((err) => console.error(err))
    .then((_) => import('./bootstrap'))
    .catch((err) => console.error(err));
