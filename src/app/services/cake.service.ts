import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {CakeModel} from "../cakes/Cake.Model";

@Injectable({
  providedIn: 'root'
})
export class CakeService {

  private baseUrl = "http://localhost:5056/api/Cake"

  constructor(private http: HttpClient) { }

  getCakes() : Observable<Object>{
    return this.http.get(this.baseUrl + "/GetCakes")
  }

  addCake(cake: CakeModel) : Observable<any>{
    return this.http.post(this.baseUrl, cake)
  }


}
