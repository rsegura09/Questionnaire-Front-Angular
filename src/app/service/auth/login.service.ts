import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personalogin, User } from 'src/app/model/personaLogin.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL = 'https://localhost:7289';

  constructor(private http: HttpClient) { }

  verificarCredenciales(credenciales: Personalogin): Observable<any> {
    return this.http.post<any>(`${this.baseURL}/api/v1/user/authentication`, credenciales);
  }
}
