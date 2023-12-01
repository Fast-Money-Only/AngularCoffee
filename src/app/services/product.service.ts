import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel} from "../users/User.Model";
import {ProductModel} from "../products/product.Model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl :string = "http://localhost:5056/api/Product";

  constructor(private http: HttpClient) { }

  getProducts() : Observable<Object>{
    return this.http.get(this.baseUrl + "/GetProducts");
  }

  getProduct(id: string) : Observable<Object>{
    return this.http.get(this.baseUrl + "/" + id);
  }

  deleteProduct(id: string) : Observable<any>{
    return this.http.delete(this.baseUrl + "/" + id);
  }

  addProduct(product: ProductModel) : Observable<any>{
      return this.http.post(this.baseUrl, product);
  }

}
