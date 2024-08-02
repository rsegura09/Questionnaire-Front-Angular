"use strict";
exports.__esModule = true;
exports.appConfig = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var es_CO_1 = require("@angular/common/locales/es-CO");
var common_1 = require("@angular/common");
// Registrar datos de localización para 'es-CO'
common_1.registerLocaleData(es_CO_1["default"], 'es-CO');
// Configuración de la aplicación
exports.appConfig = {
    providers: [
        http_1.provideHttpClient(),
        { provide: core_1.LOCALE_ID, useValue: 'es-CO' },
    ]
};
