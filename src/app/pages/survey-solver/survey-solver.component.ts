import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/model/answer.moldels';
import { OptionsResponse } from 'src/app/model/options.moldels';
import { Survey, SurveyResponseById, Question } from 'src/app/model/survey.models';
import { AnswerService } from 'src/app/service/questionnaire/answer.service';
import { OptionsService } from 'src/app/service/questionnaire/options.service';
import { SurveyService } from 'src/app/service/questionnaire/survey.service';

@Component({
  selector: 'app-survey-solver',
  templateUrl: './survey-solver.component.html',
  styleUrls: ['./survey-solver.component.css']
})
export class SurveySolverComponent implements OnInit {
  private PERSON_ID: string = sessionStorage.getItem('personId')!;
  survey!: Survey;
  errorMessage: string | null = null;
  answeredQuestions: Map<string, { optionId: string, answerText: string }> = new Map();
  unansweredQuestions: { id: string, text: string }[] = [];

  constructor(
    private surveyService: SurveyService,
    private optionsService: OptionsService,
    private answerService: AnswerService
  ) {}

  ngOnInit(): void {
    const surveyId = sessionStorage.getItem('currentSurveyId');
    if (surveyId) {
      this.surveyService.getSurveyById(surveyId).subscribe({
        next: (data: SurveyResponseById) => {
          if (data.value) {
            this.survey = data.value;
            this.loadOptionsForQuestions(this.survey.questions);
            this.updateUnansweredQuestions();
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

  private loadOptionsForQuestions(questions: Question[]): void {
    questions.forEach(question => {
      this.optionsService.getOptions(question.id).subscribe({
        next: (response: OptionsResponse) => {
          if (response.success) {
            question.options = response.value.options;
          } else {
            console.warn('Error al obtener opciones para la pregunta:', response.errors);
          }
        },
        error: (err) => {
          console.error('Error al obtener opciones para la pregunta:', err);
        }
      });
    });
  }

  onAnswerSelected(questionId: string, optionId: string, answerText: string): void {
    this.answeredQuestions.set(questionId, { optionId, answerText });
    this.updateUnansweredQuestions();
  }

  private updateUnansweredQuestions(): void {
    if (this.survey && this.survey.questions) {
      this.unansweredQuestions = this.survey.questions
        .filter(question => !this.answeredQuestions.has(question.id))
        .map(question => ({ id: question.id, text: question.questionText }));
    }
  }

  isSubmitDisabled(): boolean {
    return this.unansweredQuestions.length > 0;
  }

  handleSubmit(): void {
    this.answeredQuestions.forEach((value, questionId) => {
      const answer: Answer = {
        questionId,
        personId: this.PERSON_ID,
        optionId: value.optionId,
        answerText: value.answerText
      };

      this.answerService.submitAnswers(answer).subscribe({
        next: (response) => {

        },
        error: (err) => {
          console.warn('Error al enviar la respuesta:', err);
        }
      });
    });
  }
}
