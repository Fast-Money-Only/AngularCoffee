import {Guid} from "guid-typescript";

export class OrderModel {
  id: string = Guid.create().toString();
  created: string = Date.now().toString();
  pickup: string = Date.now().toString();
  isDone: boolean = false;
  coffeePlaceId: string = "";
  userId: string = "";
}
