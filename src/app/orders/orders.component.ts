import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {OrderService} from "../services/order.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  data: any;


  constructor(private service: OrderService) {
  }

  ngOnInit(): void {
    this.service.getOrders().subscribe(data => this.data = data);
    console.log(this.data);
  }

}
