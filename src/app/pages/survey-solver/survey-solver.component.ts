import { Component, OnInit } from '@angular/core';
import { Survey, SurveyResponseById } from 'src/app/model/survey.models';
import { SurveyService } from 'src/app/service/questionnaire/survey.service';

@Component({
  selector: 'app-survey-solver',
  templateUrl: './survey-solver.component.html',
  styleUrls: ['./survey-solver.component.css']
})
export class SurveySolverComponent implements OnInit {
  survey!: Survey;
  errorMessage: string | null = null;

  constructor(private surveyService: SurveyService) {}

  ngOnInit(): void {
    const surveyId = sessionStorage.getItem('currentSurveyId');
    console.log(surveyId);

    if (surveyId) {
      this.surveyService.getSurveyById(surveyId).subscribe({
        next: (data: SurveyResponseById) => {
          if (data.value && data.value) {
            this.survey = data.value;
            console.log(this.survey);
          } else {
            this.errorMessage = 'Datos del cuestionario no válidos.';
            console.warn('Datos del cuestionario no válidos:', data);
          }
        },
        error: (err) => {
          this.errorMessage = 'No se pudo cargar el cuestionario. Inténtelo de nuevo más tarde.';
          console.error('Error al obtener el cuestionario:', err);
        }
      });
    } else {
      this.errorMessage = 'ID de cuestionario no encontrado.';
    }
  }
}
