import { Component, OnInit } from '@angular/core';
import {CakeService} from "../cake.service";
import {CakeModel} from "./Cake.Model";
import {NgForm} from "@angular/forms";
import {Guid} from "guid-typescript";

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css']
})
export class CakesComponent implements OnInit{
  data: any;
  cake1: any

  constructor(private service: CakeService) {
  }

  ngOnInit(): void{
    this.service.getCakes().subscribe(data => this.data = data)
  }

  onSubmit(cakeForm: any): void{
    let cake = new CakeModel();
    cake.id = Guid.create().toString();
    cake.name = cakeForm.value.name;

    this.service.addCake(cake).subscribe((response) => {console.log(response)})
  }



  protected readonly CakeModel = CakeModel;




}
