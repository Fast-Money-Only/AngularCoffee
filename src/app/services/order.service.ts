import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostModel} from "../posts/post.Model";
import {OrderModel} from "../orders/order.Model";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl :string = "http://localhost:5056/api/Order";

  constructor(private http: HttpClient) { }

  getOrders() : Observable<Object>{
    return this.http.get(this.baseUrl + "/GetOrders");
  }

  getOrder(id: string): Observable<Object>{
    return this.http.get(this.baseUrl + id);
  }

  addOrder(order: OrderModel): Observable<any>{
    return this.http.post(this.baseUrl, order);
  }

  getUserOrders(id: string) : Observable<Object>{
    return this.http.get(this.baseUrl + "/Get user orders" + id)
  }
}
