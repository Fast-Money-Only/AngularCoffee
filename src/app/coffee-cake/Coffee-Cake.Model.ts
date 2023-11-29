import {Guid} from "guid-typescript";
export class CoffeeCakeModel{
  id: string = Guid.create().toString();
  cakeid: string  = "";
  coffeeid: string  = "";
}
