import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {CoffeeModel} from "../coffees/Coffee.Model";
import {CoffeeIngredientModel} from "../coffee-ingredient/Coffee-Ingredient.Model";
import {CoffeeCakeModel} from "../coffee-cake/Coffee-Cake.Model";

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  private baseUrl = "http://localhost:5056/api/Coffee"

  constructor(private http: HttpClient) { }

  addCoffee(coffee: CoffeeModel) : Observable<any>{
      return this.http.post(this.baseUrl, coffee)
  }

  getAllCoffees() : Observable<Object>{
    return this.http.get(this.baseUrl + "/GetCoffees")
  }

  findCoffee(id: string) : Observable<Object>{
    return this.http.get(this.baseUrl + "/" + id)
  }


  findCoffeeIngredients(id: string) : Observable<Object>{
    return this.http.get(this.baseUrl + "/CoffeeIngredients/" + id);
  }

  addIngredientToCoffee(coffeeIngredient : CoffeeIngredientModel) : Observable<any>{
    return this.http.post(this.baseUrl + "/CoffeeIngredients/Add", coffeeIngredient);
  }

  findCoffeeCake(id: string) : Observable<Object>{
    return this.http.get(this.baseUrl + "/CoffeeCake/" + id);
  }

  addCakeToCoffee(coffeeCake : CoffeeCakeModel) : Observable<any>{
    return this.http.post(this.baseUrl + "/CoffeeCake/Add", coffeeCake);
  }


}
