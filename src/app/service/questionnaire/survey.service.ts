import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SurveyRequest, SurveyResponseById } from 'src/app/model/survey.models';
import { SurveyResponse } from 'src/app/model/survey.models';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  constructor(private http: HttpClient) {}

  private surveyApiUrl = sessionStorage.getItem('baseUrl') + `/survey`;

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




}
