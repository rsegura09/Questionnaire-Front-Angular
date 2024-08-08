import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonResponse } from 'src/app/model/person.models';
import { SurveyRequest, SurveyResponseById } from 'src/app/model/survey.models';
import { SurveyResponse } from 'src/app/model/survey.models';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  constructor(private http: HttpClient) {}

  private surveyApiUrl = sessionStorage.getItem('baseUrl') + `/survey`;
  private questionApiUrl = sessionStorage.getItem('baseUrl') + `/question`;

  createSurvey(survey: SurveyRequest): Observable<any> {
    return this.http.post<SurveyResponse>(`${this.surveyApiUrl}`, survey);
  }

  getSurveyByPersonId(id: string): Observable<PersonResponse> {
    return this.http.get<PersonResponse>(`${this.surveyApiUrl}/${id}`);
  }

  getSurveys(): Observable<SurveyResponse> {
    return this.http.get<SurveyResponse>(`${this.surveyApiUrl}`);
  }

  deleteSurveyById(id: string): Observable<SurveyResponse> {
    return this.http.delete<SurveyResponse>(`${this.surveyApiUrl}/${id}`);
  }
  getSurveyById(id: string): Observable<SurveyResponseById> {
    return this.http.get<SurveyResponseById>(`${this.surveyApiUrl}/${id}`);
  }

  // Métodos para preguntas
  getQuestions(surveyId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.questionApiUrl}?surveyId=${surveyId}`);
  }

  getQuestion(id: number): Observable<any> {
    return this.http.get<any>(`${this.questionApiUrl}/${id}`);
  }

  createQuestion(question: any): Observable<any> {
    return this.http.post<any>(this.questionApiUrl, question);
  }

  updateQuestion(id: number, question: any): Observable<any> {
    return this.http.put<any>(`${this.questionApiUrl}/${id}`, question);
  }

  deleteQuestion(id: number): Observable<any> {
    return this.http.delete<any>(`${this.questionApiUrl}/${id}`);
  }
}
