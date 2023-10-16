import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseUrl = 'https://e-commerce-api-p313.onrender.com'; // Adjust the URL to match your Node.js server

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/api/v1/product`);
  }
  getOneProduct(pid: string): Observable<any> {
    const authToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Mjk0ZWY1MGE1MDFiMGQwZGE4NTM3MyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjk3MjA4NTM5LCJleHAiOjE3MDQ5ODQ1Mzl9.pa1QK1D0nj-j7BmZLOEz0ZIQrRduMiYrOdlqPEJmEY4';

    // Create an HttpHeaders object with the authorization header
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });
    return this.http.get<any>(`${this.baseUrl}/api/v1/product/${pid}`, {
      headers,
    });
  }
}
