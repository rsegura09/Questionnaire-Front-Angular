import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import localeEsCo from '@angular/common/locales/es-CO';
import { registerLocaleData } from '@angular/common';

// Registrar datos de localización para 'es-CO'
registerLocaleData(localeEsCo, 'es-CO');

// Configuración de la aplicación
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    { provide: LOCALE_ID, useValue: 'es-CO' }, // Configurar la localización
  ],
};
