import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomCoffeeModel} from "../custom-coffee/CustomCoffee.Model";

@Injectable({
  providedIn: 'root'
})
export class CustomCoffeeService {

  private baseUrl = "http://localhost:5056/api/CustomCoffee"

  constructor(private http: HttpClient) { }

  addCustomCoffee(customCoffee: CustomCoffeeModel) : Observable<any>{
    return this.http.post(this.baseUrl, customCoffee)
}

  findCustomCoffee(id: string) : Observable<Object>{
    return this.http.get(this.baseUrl + "/" + id)
  }

}
