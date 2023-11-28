import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {AddressModel} from "../addresses/Address.Model";
import {CakeModel} from "../cakes/Cake.Model";

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private baseUrl = "http://localhost:5056/api/Address"

  constructor(private http: HttpClient) { }

  addAddress(address: AddressModel) : Observable<any>{
    return this.http.post(this.baseUrl, address)
  }




}
