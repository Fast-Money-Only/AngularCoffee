import {Guid} from "guid-typescript";

export class ProductModel {
    id: string = Guid.create().toString();
    productName: string = "";
    productNumber: string = ""; //Id fra kaffe, kage, costum kaffe etc.


}
