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
var CreatesurveyComponent = /** @class */ (function () {
    function CreatesurveyComponent(formBuilder, _surveyService) {
        this.formBuilder = formBuilder;
        this._surveyService = _surveyService;
        this.PERSON_ID = sessionStorage.getItem('personId');
        this.surveyForm = this.formBuilder.group({
            title: ['', forms_1.Validators.required],
            description: ['', forms_1.Validators.required],
            startDate: ['', forms_1.Validators.required],
            startHour: ['', forms_1.Validators.required]
        });
    }
    CreatesurveyComponent.prototype.submitSurvey = function () {
        var date = this.surveyForm.value.startDate + 'T' + this.surveyForm.value.startHour;
        var data = {
            personId: this.PERSON_ID,
            title: this.surveyForm.value.title,
            description: this.surveyForm.value.description,
            startDate: new Date(date)
        };
        this._surveyService.postSurvey(data);
    };
    CreatesurveyComponent.prototype.addSurvey = function (survey) {
        this._surveyService.postSurvey(survey).subscribe({
            next: function (result) {
                console.log("Agregado correctamente");
            },
            error: function (err) {
                console.error("Error al agregar cuestionario", err);
            }
        });
    };
    CreatesurveyComponent = __decorate([
        core_1.Component({
            selector: 'app-createsurvey',
            templateUrl: './createsurvey.component.html',
            styleUrls: ['./createsurvey.component.css']
        })
    ], CreatesurveyComponent);
    return CreatesurveyComponent;
}());
exports.CreatesurveyComponent = CreatesurveyComponent;
