import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl :string = "http://localhost:5056/api/product";

  constructor(private http: HttpClient) { }

  getProducts() : Observable<Object>{
    return this.http.get(this.baseUrl + "/GetProducts");
  }
}
