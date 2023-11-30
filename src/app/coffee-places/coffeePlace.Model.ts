import {Guid} from "guid-typescript";
export class CoffeePlaceModel{
    id: string = Guid.create().toString();
    name: string  = "";
    addressId: string = "";
}
