import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CoffeePlaceService {

  private baseUrl = "http://localhost:5056/api/CoffeePlace"
  constructor(private http: HttpClient) { }

  getPlaces() : Observable<Object>{
    return this.http.get(this.baseUrl + "/GetCoffeePlaces");
  }

  getPlace(id: string) : Observable<Object>{
    return this.http.get(this.baseUrl + "/" + id);
  }

}
