import {Guid} from "guid-typescript";
export class AddressModel{
  addressId: string = Guid.create().toString();
  streetName: string  = "";
  houseNumber: string  = "";
  cityName: string  = "";
  postNumber: number  = 0;
}
