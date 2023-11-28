import {Guid} from "guid-typescript";

export class UserModel {
    id: string = Guid.create().toString();
    firstName: string = "";
    lastName: string = "";
    email: string = "";
    phone: string = "";
    password: string = "";
    membershipId: string = "4d07ca7e-aa29-456f-8808-27ea0dcfe096"; //Id fra customer
}
