import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IQuestion } from 'src/app/model/question.models';
import { SurveyRequest, SurveyResponseById } from 'src/app/model/survey.models';
import { SurveyResponse } from 'src/app/model/survey.models';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  constructor(private http: HttpClient) {}

  private surveyApiUrl = sessionStorage.getItem('baseUrl') + `/survey`;
  private questionApiUrl = sessionStorage.getItem('baseUrl') + `/question`;
  private optionApiUrl = sessionStorage.getItem('baseUrl') + `/option`;

  createSurvey(survey: SurveyRequest): Observable<any> {
    return this.http.post<SurveyResponse>(`${this.surveyApiUrl}`, survey);
  }

  getSurveyById(id: string): Observable<SurveyResponseById> {
    return this.http.get<SurveyResponseById>(`${this.surveyApiUrl}/${id}`);
  }

  getSurveys(): Observable<SurveyResponse> {
    return this.http.get<SurveyResponse>(`${this.surveyApiUrl}`);
  }

  deleteSurveyById(id: string): Observable<SurveyResponse> {
    return this.http.delete<SurveyResponse>(`${this.surveyApiUrl}/${id}`);
  }

  // Métodos para preguntas
  getQuestions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.questionApiUrl}`);
  }

  getQuestionById(id: string): Observable<any> {
    return this.http.get<any>(`${this.questionApiUrl}/${id}`);
  }

  createQuestion(question: IQuestion): Observable<any> {
    return this.http.post<any>(this.questionApiUrl, question);
  }

  updateQuestion(id: string, question: IQuestion): Observable<any> {
    return this.http.put<any>(`${this.questionApiUrl}/${id}`, question);
  }

  deleteQuestion(id: string): Observable<any> {
    return this.http.delete<any>(`${this.questionApiUrl}/${id}`);
  }

  // Métodos para opciones
  getOptions(questionId: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.optionApiUrl}?questionId=${questionId}`
    );
  }

  getOption(id: number): Observable<any> {
    return this.http.get<any>(`${this.optionApiUrl}/${id}`);
  }

  createOption(option: any): Observable<any> {
    return this.http.post<any>(this.optionApiUrl, option);
  }

  updateOption(id: number, option: any): Observable<any> {
    return this.http.put<any>(`${this.optionApiUrl}/${id}`, option);
  }

  deleteOption(id: number): Observable<any> {
    return this.http.delete<any>(`${this.optionApiUrl}/${id}`);
  }
}
