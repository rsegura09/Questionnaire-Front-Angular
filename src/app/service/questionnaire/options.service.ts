import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OptionsResponse } from 'src/app/model/options.moldels';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {
  private baseUrl = sessionStorage.getItem('baseUrl') + `/option/optionsbyidquestion`;

  constructor(private http: HttpClient) { }

  getOptions(id: string): Observable<OptionsResponse> {
    return this.http.get<OptionsResponse>(`${this.baseUrl}/${id}`);
  }
}
