// home.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from 'src/app/model/person.models';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private baseURL = 'https://localhost:44321/api/v1/person'; // Asegúrate de que esta URL sea correcta

  constructor(private http: HttpClient) {}

  // Método para obtener información del usuario por ID
  getUserInfo(userId: string): Observable<Result> {
    return this.http.get<Result>(`${this.baseURL}/${userId}`);
  }
}
