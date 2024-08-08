"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(form, router, _authService) {
        this.form = form;
        this.router = router;
        this._authService = _authService;
        this.loginErrorSwitch = false;
        this.loginError = '';
        this.formLogin = this.form.group({
            Correo: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            Contrasenna: ['', forms_1.Validators.required]
        });
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.formLogin.valid) {
            var credenciales = {
                Email: this.formLogin.value.Correo,
                Password: this.formLogin.value.Contrasenna
            };
            console.log(credenciales);
            this._authService.verificarCredenciales(credenciales).subscribe({
                next: function (response) {
                    if (response.success) {
                        _this.router.navigate(['/home']);
                        _this._authService.auth = true;
                        _this._authService.Id = response.value.id;
                        sessionStorage.setItem('personId', response.value.id);
                        sessionStorage.setItem('auth', 'true');
                        sessionStorage.setItem('isAdmin', response.value.isAdmin);
                        sessionStorage.setItem('isAuthenticated', 'true');
                    }
                    else {
                        _this.loginError = 'Error: algo no está bien, intenta de nuevo.';
                        _this.loginErrorSwitch = true;
                    }
                },
                error: function (error) {
                    console.error(error);
                    _this.loginError = 'Error: algo no está bien, intenta de nuevo.';
                    _this.loginErrorSwitch = true;
                }
            });
        }
        else {
            this.formLogin.markAllAsTouched();
        }
    };
    LoginComponent.prototype.hasErrors = function (controlName, errorType) {
        var _a, _b;
        return ((_a = this.formLogin.get(controlName)) === null || _a === void 0 ? void 0 : _a.hasError(errorType)) && ((_b = this.formLogin.get(controlName)) === null || _b === void 0 ? void 0 : _b.touched);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
