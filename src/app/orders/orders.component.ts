import {Component, OnInit} from '@angular/core';
import {OrderService} from "../services/order.service";
import {NgForm} from "@angular/forms";
import {OrderModel} from "./order.Model";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  data: any;
  coffeePlaces: any;
  selectedPlace!: string;


  constructor(private service: OrderService) {
  }

  ngOnInit(): void {
    this.service.getOrders().subscribe(data => this.data = data);
    this.service.getCoffeePlaces().subscribe(coffePlaces => this.coffeePlaces = coffePlaces);
  }


  createOrder(orderForm: NgForm) {
    let order = new OrderModel();
    order.pickup = orderForm.value.pickup.toString().slice(0, 19).replace('T', ' ');
    order.coffeePlaceId = this.selectedPlace;
    order.userId = "5a217f9c-95f9-422a-aa32-fe970a70f946";
    console.log(order);
    this.service.addOrder(order)
        .subscribe((response) => {console.log(response)});
  }

  onSelected(value: string) {
    this.selectedPlace = value;
  }
}
