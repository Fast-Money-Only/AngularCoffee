import { Component } from '@angular/core';
import {AddressService} from "../services/address-service";
import {AddressModel} from "./Address.Model";
import {NgForm} from "@angular/forms";
import {Guid} from "guid-typescript";

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent {

  constructor(private service: AddressService) {
  }

  onSubmit(addressForm: any): void{
    let address = new AddressModel();
    address.addressId = Guid.create().toString();
    address.streetName = "Hejsa"; //addressForm.value.streetName;
    address.houseNumber = "Hej pernille";//addressForm.value.houseNumber;
    address.cityName = "Perniiiiiiiiille";//addressForm.value.cityName;
    address.postNumber = 5;//addressForm.value.postNumber;

    this.service.addAddress(address).subscribe((response) => {console.log(response)})
  }



}
