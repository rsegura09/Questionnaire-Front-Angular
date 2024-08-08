import { Component, OnInit } from '@angular/core';
import { OptionsResponse } from 'src/app/model/options.moldels';
import { Question, SurveyResponseById } from 'src/app/model/survey.models';
import { OptionsService } from 'src/app/service/questionnaire/options.service';
import { SurveyService } from 'src/app/service/questionnaire/survey.service';

@Component({
  selector: 'app-survey-solver',
  templateUrl: './survey-solver.component.html',
  styleUrls: ['./survey-solver.component.css'],
})
export class SurveySolverComponent implements OnInit {
  survey!: SurveyResponseById['value'];
  errorMessage: string | null = null;

  constructor(
    private surveyService: SurveyService,
    private optionsService: OptionsService
  ) {}

  ngOnInit(): void {
    const surveyId = sessionStorage.getItem('currentSurveyId');

    if (surveyId) {
      this.surveyService.getSurveyById(surveyId).subscribe({
        next: (data: SurveyResponseById) => {
          if (data.value) {
            this.survey = data.value;
            this.loadOptionsForQuestions(this.survey.questions);
          } else {
            this.errorMessage = 'Datos del cuestionario no válidos.';
            console.warn('Datos del cuestionario no válidos:', data);
          }
        },
        error: (err) => {
          this.errorMessage =
            'No se pudo cargar el cuestionario. Inténtelo de nuevo más tarde.';
          console.error('Error al obtener el cuestionario:', err);
        },
      });
    } else {
      this.errorMessage = 'ID de cuestionario no encontrado.';
    }
  }

  private loadOptionsForQuestions(questions: Question[]): void {
    questions.forEach((question) => {
      this.optionsService.getOptions(question.id).subscribe({
        next: (response: OptionsResponse) => {
          if (response.success) {
            question.options = response.value.options;
          } else {
            console.warn(
              'Error al obtener opciones para la pregunta:',
              response.errors
            );
          }
        },
        error: (err) => {
          console.error('Error al obtener opciones para la pregunta:', err);
        },
      });
    });
  }
}
