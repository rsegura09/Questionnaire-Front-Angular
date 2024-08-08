"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreatesurveyComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var forms_2 = require("@angular/forms");
var router_1 = require("@angular/router");
var CreatesurveyComponent = /** @class */ (function () {
    function CreatesurveyComponent(formBuilder, _surveyService) {
        this.formBuilder = formBuilder;
        this._surveyService = _surveyService;
        this.PERSON_ID = sessionStorage.getItem('personId');
        this.surveyList = [];
        this.surveyForm = this.formBuilder.group({
            title: ['', forms_1.Validators.required],
            description: ['', forms_1.Validators.required],
            startDate: ['', forms_1.Validators.required],
            startHour: ['', forms_1.Validators.required]
        });
    }
    CreatesurveyComponent.prototype.ngOnInit = function () {
        this.getAllSurveys();
    };
    CreatesurveyComponent.prototype.getAllSurveys = function () {
        var _this = this;
        this._surveyService.getSurveys().subscribe({
            next: function (response) {
                _this.surveyList = response.value.items;
                console.log(_this.surveyList);
            },
            error: function (error) {
                console.error('Error al obtener información de la encuesta:', error);
            }
        });
    };
    CreatesurveyComponent.prototype.submitSurvey = function () {
        var date = this.surveyForm.value.startDate + 'T' + this.surveyForm.value.startHour;
        var data = {
            personId: this.PERSON_ID,
            title: this.surveyForm.value.title,
            description: this.surveyForm.value.description,
            startDate: new Date(date)
        };
        this.addSurvey(data);
        this.resetForm();
    };
    CreatesurveyComponent.prototype.addSurvey = function (survey) {
        var _this = this;
        this._surveyService.createSurvey(survey).subscribe({
            next: function (result) {
                console.log('Cuestionario agregado correctamente!', result);
                _this.getAllSurveys();
            },
            error: function (err) {
                console.error('Error al agregar encuesta', err);
            }
        });
    };
    CreatesurveyComponent.prototype.deleteSurvey = function (id) {
        var _this = this;
        this._surveyService.deleteSurveyById(id).subscribe({
            next: function (result) {
                console.log('Escuesta agregadA correctamente!', result);
                _this.getAllSurveys();
            },
            error: function (err) {
                console.error('Error al agregar cuestionario', err);
            }
        });
    };
    CreatesurveyComponent.prototype.resetForm = function () {
        this.surveyForm.reset();
    };
    CreatesurveyComponent = __decorate([
        core_1.Component({
            selector: 'app-createsurvey',
            templateUrl: './createsurvey.component.html',
            standalone: true,
            imports: [common_1.DatePipe, forms_2.ReactiveFormsModule, common_1.CommonModule, router_1.RouterModule],
            styleUrls: ['./createsurvey.component.css']
        })
    ], CreatesurveyComponent);
    return CreatesurveyComponent;
}());
exports.CreatesurveyComponent = CreatesurveyComponent;
