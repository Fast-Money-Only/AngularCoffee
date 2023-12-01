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

  getAddress(id: string) : Observable<Object> {
    return this.http.get(this.baseUrl + "/" + id)
  }
  addAddress(address: AddressModel) : Observable<any>{
    return this.http.post(this.baseUrl, address)
  }

  deleteAddress(id: string) : Observable<Object>{
    return this.http.delete(this.baseUrl + "/" + id);
  }



}
