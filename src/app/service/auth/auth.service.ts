import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _auth: boolean = false;
  private _Id: string | null = null;

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
}

