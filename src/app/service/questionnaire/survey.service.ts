import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISurvey } from 'src/app/model/survey.models';
import { Result } from 'src/app/model/survey.models';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  constructor(private http: HttpClient) {}

  private baseUrl = sessionStorage.getItem('baseUrl') + `/survey`;

  postSurvey(survey: ISurvey): Observable<any> {
    return this.http.post<Result>(`${this.baseUrl}`, survey);

  }

  getSurveyById(id: string): Observable<Result> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  getAllSurveys(): Observable<Result> {
    return this.http.get<Result>(`${this.baseUrl}`);
  }
}
