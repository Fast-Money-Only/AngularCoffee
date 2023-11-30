import {Guid} from "guid-typescript";
export class CustomCoffeeModel{
  id: string = Guid.create().toString();
  name: string  = "";
}
