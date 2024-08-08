import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Answer } from 'src/app/model/answer.moldels';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  private baseUrl = sessionStorage.getItem('baseUrl') + `/answer`;

  constructor(private http: HttpClient) { }

  submitAnswers(answer: Answer): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, answer);
  }
}
