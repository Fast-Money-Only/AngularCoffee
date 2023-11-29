import {Guid} from "guid-typescript";
export class CoffeeIngredientModel{
  id: string = Guid.create().toString();
  ingredientid: string  = "";
  coffeeid: string  = "";
}
