import {Guid} from "guid-typescript";
import {dateTimestampProvider} from "rxjs/internal/scheduler/dateTimestampProvider";
import {CoffeePlaceModel} from "../coffee-places/coffeePlace.Model";
import {UserModel} from "../users/User.Model";
import {DateAdapter} from "@angular/material/core";

export class OrderModel {
  id: string = Guid.create().toString();
  created: string = new Date().toISOString().slice(0, 19).replace('T', ' ');
  pickup: string = new Date().toString().slice(0, 19).replace('T', ' ');
  isDone: boolean = false;
  coffeePlaceId: string = "be9b2cb9-31b8-446b-8795-69c81f9c571c";
  coffeePlace: CoffeePlaceModel = new CoffeePlaceModel();
  userId: string = "";
  user: UserModel = new UserModel();
}
