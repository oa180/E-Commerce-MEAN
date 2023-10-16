import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  userRoleSubject = new BehaviorSubject<string>('');
  userRole$ = this.userRoleSubject.asObservable();

  private baseUrl = 'https://e-commerce-api-p313.onrender.com'; // Adjust the URL to match your Node.js server
  constructor(private http: HttpClient) {}

  sigin(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/api/v1/auth/signin`, {
      email,
      password,
    });
  }
}
