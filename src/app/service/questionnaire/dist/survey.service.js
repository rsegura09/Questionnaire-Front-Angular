"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SurveyService = void 0;
var core_1 = require("@angular/core");
var SurveyService = /** @class */ (function () {
    function SurveyService(http) {
        this.http = http;
        this.surveyApiUrl = sessionStorage.getItem('baseUrl') + "/survey";
        this.questionApiUrl = sessionStorage.getItem('baseUrl') + "/question";
    }
    SurveyService.prototype.createSurvey = function (survey) {
        return this.http.post("" + this.surveyApiUrl, survey);
    };
    SurveyService.prototype.getSurveyByPersonId = function (id) {
        return this.http.get(this.surveyApiUrl + "/" + id);
    };
    SurveyService.prototype.getSurveys = function () {
        return this.http.get("" + this.surveyApiUrl);
    };
    SurveyService.prototype.deleteSurveyById = function (id) {
        return this.http["delete"](this.surveyApiUrl + "/" + id);
    };
    SurveyService.prototype.getSurveyById = function (id) {
        return this.http.get(this.surveyApiUrl + "/" + id);
    };
    // Métodos para preguntas
    SurveyService.prototype.getQuestions = function (surveyId) {
        return this.http.get(this.questionApiUrl + "?surveyId=" + surveyId);
    };
    SurveyService.prototype.getQuestion = function (id) {
        return this.http.get(this.questionApiUrl + "/" + id);
    };
    SurveyService.prototype.createQuestion = function (question) {
        return this.http.post(this.questionApiUrl, question);
    };
    SurveyService.prototype.updateQuestion = function (id, question) {
        return this.http.put(this.questionApiUrl + "/" + id, question);
    };
    SurveyService.prototype.deleteQuestion = function (id) {
        return this.http["delete"](this.questionApiUrl + "/" + id);
    };
    SurveyService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], SurveyService);
    return SurveyService;
}());
exports.SurveyService = SurveyService;
