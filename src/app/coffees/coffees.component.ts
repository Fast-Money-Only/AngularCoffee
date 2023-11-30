import {Component, OnInit} from '@angular/core';
import {CoffeeService} from "../services/coffee.service";
import {CoffeeModel} from "./Coffee.Model";
import {CoffeeCakeModel} from "../coffee-cake/Coffee-Cake.Model";
import {CoffeeIngredientModel} from "../coffee-ingredient/Coffee-Ingredient.Model";
import {Guid} from "guid-typescript";
import {IngredientModel} from "../ingredients/Ingredient.Model";
import {CakeService} from "../services/cake.service";
import {IngredientService} from "../services/ingredient.service";


@Component({
  selector: 'app-coffees',
  templateUrl: './coffees.component.html',
  styleUrls: ['./coffees.component.css']
})
export class CoffeesComponent implements OnInit{

  data: any;
  coffeeIngredients: any;
  coffeeCakes: any;
  cakeData: any;
  ingrData: any;
  selectedCoffee!: string;
  selectedCake!: string;
  selectedIngr!: string;



  constructor(private service: CoffeeService,
              private cakeService: CakeService,
              private ingrService: IngredientService) {
  }


  ngOnInit(): void{
    this.service.getAllCoffees().subscribe(data => this.data = data);
    this.cakeService.getCakes().subscribe(cakeData => this.cakeData = cakeData);
    this.ingrService.getIngredients().subscribe(ingrData => this.ingrData = ingrData);
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
    coffeeIngredient.ingredientid = this.selectedIngr;
    coffeeIngredient.coffeeid = this.selectedCoffee;

    this.service.addIngredientToCoffee(coffeeIngredient).subscribe((response) => {console.log(response)})
  }

  addCoffeeCake(coffeeCakeForm: any): void{
    let coffeeCake = new CoffeeCakeModel();
    coffeeCake.id = Guid.create().toString();
    coffeeCake.cakeid = this.selectedCake;
    coffeeCake.coffeeid = this.selectedCoffee;

    this.service.addCakeToCoffee(coffeeCake).subscribe((response) => {console.log(response); this.ngOnInit()})
  }

  findCoffee(findCoffeeForm: any){
    let x = findCoffeeForm.value.coffeeid;
    this.service.findCoffee(x).subscribe((response) =>
    { console.log(response)});
  }

  findCoffeeIngredient(findCoffeeIngredientForm: any){
    this.service.findCoffeeIngredients(this.selectedCoffee).subscribe(coffeeIngredients => this.coffeeIngredients = coffeeIngredients);
  }

  findCoffeeCake(findCoffeeCakeForm: any){
    this.service.findCoffeeCake(this.selectedCoffee).subscribe(coffeeCakes => this.coffeeCakes = coffeeCakes);
  }

  onSelected(value: string) {
    this.selectedCoffee = value;
  }

  onSelectedCake(value: string) {
    this.selectedCake = value;
  }

  onSelectedIngredient(value: string) {
    this.selectedIngr = value;
  }
}
