import { Component } from '@angular/core';
import {CoffeeService} from "../services/coffee.service";
import {CoffeeModel} from "./Coffee.Model";
import {CoffeeCakeModel} from "../coffee-cake/Coffee-Cake.Model";
import {CoffeeIngredientModel} from "../coffee-ingredient/Coffee-Ingredient.Model";

@Component({
  selector: 'app-coffees',
  templateUrl: './coffees.component.html',
  styleUrls: ['./coffees.component.css']
})
export class CoffeesComponent {

}
