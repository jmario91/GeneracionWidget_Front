import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideCustomModalConfig } from './core/modal/modal.config';

import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { ConfigPaginador } from './shared/utils/config-paginador-intl';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideCustomModalConfig(),
    provideHttpClient(  
      withInterceptorsFromDi(),  
      withFetch()               
    ),
    { provide: MatPaginatorIntl, useValue: ConfigPaginador() }
  ]
};
