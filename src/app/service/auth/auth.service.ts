import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _auth: boolean = false;

  get auth(): boolean {
    return this._auth;
  }

  set auth(value: boolean) {
    this._auth = value;
  }
}

