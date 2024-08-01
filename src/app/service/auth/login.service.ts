import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person, Personlogin } from 'src/app/model/personaLogin.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseURL = 'https://localhost:44321/';

  constructor(private http: HttpClient) {}

  verificarCredenciales(credenciales: Personlogin): Observable<any> {
    return this.http.post<any>(`${this.baseURL}api/v1/login`, credenciales);
  }
}
