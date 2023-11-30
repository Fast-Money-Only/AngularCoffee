import { Component } from '@angular/core';
import {CustomCoffeeModel} from "./CustomCoffee.Model";
import {CustomCoffeeService} from "../services/custom-coffee.service";
import {Guid} from "guid-typescript";
import {CoffeeModel} from "../coffees/Coffee.Model";

@Component({
  selector: 'app-custom-coffee',
  templateUrl: './custom-coffee.component.html',
  styleUrls: ['./custom-coffee.component.css']
})
export class CustomCoffeeComponent {

  customCoffee: any;
  constructor(private service: CustomCoffeeService) {
  }

  addCustomCoffee(customCoffeeForm: any): void{
    let customCoffee = new CustomCoffeeModel();
    customCoffee.id = Guid.create().toString();
    customCoffee.name = customCoffeeForm.value.name;

    this.service.addCustomCoffee(customCoffee).subscribe((response) => {console.log(response)})
  }

  findCustomCoffee(findCustomCoffeeForm: any){
    let x = findCustomCoffeeForm.value.coffeeid;
    this.service.findCustomCoffee(x).subscribe((response) =>
    {
      this.customCoffee = response;
      console.log(response)});
  }




}
