// src/app/core/modal/modal.config.ts
import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

/**
 * Proveedor global para configuración de modales con NgbModal
 * Se puede registrar en app.config.ts
 */
export function provideCustomModalConfig(): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: NgbModalConfig,
      useFactory: () => {
        const config = new NgbModalConfig();

        // Configuraciones predeterminadas para TODOS los modales
        config.backdrop = 'static';           // No se cierra al hacer clic fuera
        config.keyboard = false;              // No se cierra con ESC
        config.centered = true;               // Centrado vertical
        config.size = 'lg';                   // Tamaño por defecto
        config.scrollable = true;             // Habilitar scroll si hay contenido largo

        return config;
      },
    },
  ]);
}
