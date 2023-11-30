import {Component, OnInit} from '@angular/core';
import {IngredientService} from "../services/ingredient.service";
import {NgForm} from "@angular/forms";
import {Guid} from "guid-typescript";
import {IngredientModel} from "./Ingredient.Model";

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit{

  data: any;

  constructor(private service: IngredientService) {
  }

  ngOnInit(): void {
    this.service.getIngredients().subscribe(data => this.data = data);
  }



  onSubmit(ingredientForm: NgForm) {
    let ingredient = new IngredientModel();
    ingredient.name = ingredientForm.value.name;

    this.service.addIngredient(ingredient).subscribe((response) => {console.log(response); this.ngOnInit()})
  }

  deleteIngredient(id: string) {
    this.service.deleteIngredient(id).subscribe((response) =>
    {console.log(response), this.ngOnInit()});
  }
}
