import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:3000/api/orders';

  constructor(private http: HttpClient) {}

  orders(orderDetails: any): Observable<any> {
    console.log('Sending data to backend:', orderDetails);  // Log sent data
    return this.http.post<any>(this.apiUrl, orderDetails);
  }
}

export default OrderService; // Ensure OrderService is properly exported
