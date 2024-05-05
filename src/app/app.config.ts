import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { matchStoreKey } from './shared/state/match/match.selectors';
import { matchReducer } from './shared/state/match/match.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({
      [matchStoreKey]: matchReducer,
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ]
};
