// home.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserResponse } from 'src/app/model/personaLogin.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private baseURL = 'https://localhost:7289/api/v1/user'; // Asegúrate de que esta URL sea correcta

  constructor(private http: HttpClient) { }

  // Método para obtener información del usuario por ID
  getUserInfo(userId: string): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${this.baseURL}/${userId}`);
  }
}
