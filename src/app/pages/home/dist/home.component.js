"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeComponent = void 0;
// home.component.ts
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(personService, authService, router) {
        var _a;
        this.personService = personService;
        this.authService = authService;
        this.router = router;
        this.userId = null;
        this.userInfo = null;
        this.isAuthenticated = ((_a = sessionStorage.getItem('isAuthenticated')) === null || _a === void 0 ? void 0 : _a.toString()) == 'true';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.authService.Id;
        if (this.userId) {
            this.personService.getUserInfo(this.userId).subscribe({
                next: function (response) {
                    _this.userInfo = response.value;
                    _this.isAuthenticated = response.success;
                },
                error: function (error) {
                    console.error('Error al obtener información del usuario:', error);
                    _this.isAuthenticated = false;
                }
            });
        }
    };
    HomeComponent.prototype.navigateToSurvey = function (surveyId) {
        sessionStorage.setItem('currentSurveyId', surveyId);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
