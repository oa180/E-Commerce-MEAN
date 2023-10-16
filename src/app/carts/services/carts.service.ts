import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartsService {
  private baseUrl = 'https://e-commerce-api-p313.onrender.com'; // Adjust the URL to match your Node.js server

  cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable();

  constructor(private http: HttpClient) {}

  getUserCart(uId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/api/v1/cart/${uId}`);
  }

  addProductToCart(pId: string | undefined): Observable<any> {
    const authToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Mjk0ZWY1MGE1MDFiMGQwZGE4NTM3MyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjk3MjA4NTM5LCJleHAiOjE3MDQ5ODQ1Mzl9.pa1QK1D0nj-j7BmZLOEz0ZIQrRduMiYrOdlqPEJmEY4';

    // Create an HttpHeaders object with the authorization header
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });

    // Cart Count

    return this.http.patch<any>(
      `${this.baseUrl}/api/v1/cart/add-cart-item`,
      {
        productId: pId,
      },
      { headers }
    );
  }
}
