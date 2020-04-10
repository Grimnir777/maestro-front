import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'http://localhost:3000/auth/login';
  constructor(
    private http: HttpClient
  ) {}

  public async login(pseudo: string, password: string ) {
    const res = await this.http.post<string>(this.authUrl, {pseudo, password}).toPromise();
    return await this.setSession(res);
  }

  private async setSession(authResult) {
    if (authResult.expiresIn && authResult.token) {
      const expiresAt = moment().add(authResult.expiresIn, 'days');
      localStorage.setItem('id_token', authResult.token);
      localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()) );
      return true;
    } else {
      return false;
    }
  }

  public logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  public isLoggedOut() {
    return !this.isLoggedIn();
  }

  public getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
