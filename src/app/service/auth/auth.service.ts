import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonResponse, Personlogin } from 'src/app/model/personaLogin.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _auth: boolean = false;
  private _Id: string | null = null;

  constructor(private http: HttpClient) {}

  get Id(): string | null {
    return this._Id;
  }

  set Id(value: string | null) {
    this._Id = value;
  }

  get auth(): boolean {
    return this._auth;
  }

  set auth(value: boolean) {
    this._auth = value;
  }

  private baseURL = 'https://localhost:44321/';
  verificarCredenciales(credenciales: Personlogin): Observable<PersonResponse> {
    return this.http.post<any>(`${this.baseURL}api/v1/login`, credenciales);
  }

}


