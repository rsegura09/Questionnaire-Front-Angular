import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personalogin } from 'src/app/model/personaLogin.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL = 'https://localhost:7194';

  constructor(private http: HttpClient) { }

  verificarCredenciales(credenciales: Personalogin): Observable<any> {
    return this.http.post<Personalogin>(`${this.baseURL}/api/persona/verificar`, credenciales);
  }
}
