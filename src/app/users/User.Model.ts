import {Guid} from "guid-typescript";

export class UserModel {
    id: string = Guid.create().toString();
    firstName: string = "";
    lastName: string = "";
    email: string = "";
    phone: string = "";
    password: string = "";
    membershipId: string = "";
}
