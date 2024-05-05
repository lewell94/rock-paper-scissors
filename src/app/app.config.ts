import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { matchStoreKey } from './shared/state/match/match.selectors';
import { matchReducer } from './shared/state/match/match.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { roundStoreKey } from './shared/state/round/round.selectors';
import { roundReducer } from './shared/state/round/round.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({
      [matchStoreKey]: matchReducer,
      [roundStoreKey]: roundReducer,
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    importProvidersFrom(BrowserAnimationsModule)
  ]
};
