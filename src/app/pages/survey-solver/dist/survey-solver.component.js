"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SurveySolverComponent = void 0;
var core_1 = require("@angular/core");
var SurveySolverComponent = /** @class */ (function () {
    function SurveySolverComponent(surveyService, optionsService) {
        this.surveyService = surveyService;
        this.optionsService = optionsService;
        this.errorMessage = null;
    }
    SurveySolverComponent.prototype.ngOnInit = function () {
        var _this = this;
        var surveyId = sessionStorage.getItem('currentSurveyId');
        if (surveyId) {
            this.surveyService.getSurveyById(surveyId).subscribe({
                next: function (data) {
                    if (data.value) {
                        _this.survey = data.value;
                        _this.loadOptionsForQuestions(_this.survey.questions);
                    }
                    else {
                        _this.errorMessage = 'Datos del cuestionario no válidos.';
                        console.warn('Datos del cuestionario no válidos:', data);
                    }
                },
                error: function (err) {
                    _this.errorMessage =
                        'No se pudo cargar el cuestionario. Inténtelo de nuevo más tarde.';
                    console.error('Error al obtener el cuestionario:', err);
                }
            });
        }
        else {
            this.errorMessage = 'ID de cuestionario no encontrado.';
        }
    };
    SurveySolverComponent.prototype.loadOptionsForQuestions = function (questions) {
        var _this = this;
        questions.forEach(function (question) {
            _this.optionsService.getOptions(question.id).subscribe({
                next: function (response) {
                    if (response.success) {
                        question.options = response.value.options;
                    }
                    else {
                        console.warn('Error al obtener opciones para la pregunta:', response.errors);
                    }
                },
                error: function (err) {
                    console.error('Error al obtener opciones para la pregunta:', err);
                }
            });
        });
    };
    SurveySolverComponent = __decorate([
        core_1.Component({
            selector: 'app-survey-solver',
            templateUrl: './survey-solver.component.html',
            styleUrls: ['./survey-solver.component.css']
        })
    ], SurveySolverComponent);
    return SurveySolverComponent;
}());
exports.SurveySolverComponent = SurveySolverComponent;
