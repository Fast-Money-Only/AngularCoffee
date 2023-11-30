import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {NgForm} from "@angular/forms";
import {UserModel} from "./User.Model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  data: any;
  userData: any;
  userOrdersData: any;

  constructor(private service: UserService) {
  }

  ngOnInit(): void {
    this.service.getUsers().subscribe(data => this.data = data);
  }

  getUser(id: string): void {
    this.service.getUser(id).subscribe(userData => this.userData = userData);
  }


  findUserOrders(findUserOrdersForm: NgForm) {
    this.getUser(findUserOrdersForm.value.name);
    this.service.getUserOrders(findUserOrdersForm.value.name)
        .subscribe(userOrdersData => this.userOrdersData = userOrdersData);
  }
}
