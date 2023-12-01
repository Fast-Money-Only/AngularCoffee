import {Component, OnInit} from '@angular/core';
import {AddressService} from "../services/address-service";
import {AddressModel} from "./Address.Model";
import {NgForm} from "@angular/forms";
import {Guid} from "guid-typescript";

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit{
  data: any;
  aId!: string;

  constructor(private service: AddressService) {
  }

  ngOnInit(): void {
    this.service.getAddress("35c7ceda-15ac-44b1-8863-ce2975a04f2e").subscribe(data => this.data = data);
  }

  getAddress(findForm: any){
    this.aId = findForm.value.id;
    this.service.getAddress(this.aId).subscribe(data => this.data = data);
  }

  onSubmit(addressForm: any): void{
    let address = new AddressModel();
    address.streetName = addressForm.value.street;
    address.houseNumber = addressForm.value.house;
    address.cityName = addressForm.value.city;
    address.postNumber = addressForm.value.postal;

    this.service.addAddress(address).subscribe((response) => {console.log(response)})
  }

  deleteAddress(){
    console.log(this.aId);
    this.service.deleteAddress(this.aId).subscribe((response) =>
    {console.log(response), this.ngOnInit()});
  }




}
