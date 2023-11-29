import {Component, OnInit} from '@angular/core';
import {CoffeeService} from "../services/coffee.service";
import {CoffeeModel} from "./Coffee.Model";
import {CoffeeCakeModel} from "../coffee-cake/Coffee-Cake.Model";
import {CoffeeIngredientModel} from "../coffee-ingredient/Coffee-Ingredient.Model";
import {Guid} from "guid-typescript";


@Component({
  selector: 'app-coffees',
  templateUrl: './coffees.component.html',
  styleUrls: ['./coffees.component.css']
})
export class CoffeesComponent implements OnInit{

  data: any;
  coffeeIngredients: any;

  constructor(private service: CoffeeService) {
  }


  ngOnInit(): void{
    this.service.getAllCoffees().subscribe(data => this.data = data)
  }

  findAllCoffeeIngredients(){
    this.service.getAllCoffeeIngredients().subscribe(coffeeIngredients => this.coffeeIngredients = coffeeIngredients);
  }

  addCoffee(coffeeForm: any): void{
    let coffee = new CoffeeModel();
    coffee.id = Guid.create().toString();
    coffee.name = coffeeForm.value.name;

    this.service.addCoffee(coffee).subscribe((response) => {console.log(response)})
  }

  addCoffeeIngredient(coffeeIngredientForm: any): void{
    let coffeeIngredient = new CoffeeIngredientModel();
    coffeeIngredient.id = Guid.create().toString();
    coffeeIngredient.ingredientid = coffeeIngredientForm.value.ingredientid;
    coffeeIngredient.coffeeid = coffeeIngredientForm.value.coffeeid;

    this.service.addIngredientToCoffee(coffeeIngredient).subscribe((response) => {console.log(response)})
  }

  addCoffeeCake(coffeeCakeForm: any): void{
    let coffeeCake = new CoffeeCakeModel();
    coffeeCake.id = Guid.create().toString();
    coffeeCake.cakeid = coffeeCakeForm.value.cakeid;
    coffeeCake.coffeeid = coffeeCakeForm.value.coffeeid;

    this.service.addCakeToCoffee(coffeeCake).subscribe((response) => {console.log(response)})
  }

  findCoffee(findCoffeeForm: any){
    let x = findCoffeeForm.value.coffeeid;
    this.service.findCoffee(x).subscribe((response) =>
    { console.log(response)});
  }

  findCoffeeIngredient(findCoffeeIngredientForm: any){
    let x = findCoffeeIngredientForm.value.coffeeid;
    this.service.findCoffeeIngredients(x).subscribe((response) =>
    { console.log(response)}), this.findAllCoffeeIngredients();
  }

  findCoffeeCake(findCoffeeCakeForm: any){
    let x = findCoffeeCakeForm.value.coffeeid;
    this.service.findCoffeeCake(x).subscribe((response) =>
    { console.log(response)});
  }
}
