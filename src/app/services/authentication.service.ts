import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private authUrl = 'https://localhost:7180';
  constructor(private http: HttpClient) {}
  email: string = '';
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.authUrl}/login`, { email, password });
  }
  register(email: string, password: string): Observable<any> {
    return this.http.post(`${this.authUrl}/register`, { email, password });
  }

  storeToken(token: string): void {
    sessionStorage.setItem('authToken', token);
    document.cookie = `authToken=${token}; HttpOnly; Secure; SameSite=Strict`;
  }
  getToken(): string | null {
    return sessionStorage.getItem('authToken');
  }
  storeRefreshToken(refreshToken: string): void {
    sessionStorage.setItem('refreshToken', refreshToken);
  }
  getRefreshToken(): string | null {
    return sessionStorage.getItem('refreshToken');
  }
}
