import { Component, OnInit } from '@angular/core';
import {CakeService} from "../services/cake.service";
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

  deleteCake(id: string){

    this.service.deleteCake(id).subscribe(data => {console.log(data);});

    let index = this.data.findIndex((x: { id: string; }) => x.id === id);
    this.data.splice(index, 1);
  }


  protected readonly CakeModel = CakeModel;




}
