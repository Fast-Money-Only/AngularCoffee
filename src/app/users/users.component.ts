import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {NgForm} from "@angular/forms";
import {UserModel} from "./User.Model";
import {MembershipModel} from "../memberships/Membership.Model";

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


  findUserOrders(findUserOrdersForm: any) {
    this.getUser(findUserOrdersForm.value.name);
    this.service.getUserOrders(findUserOrdersForm.value.name)
        .subscribe(userOrdersData => this.userOrdersData = userOrdersData);
  }

  createUser(createUserForm: any) {
    let user = new UserModel();
    let membership = new MembershipModel();
    membership.id = '4d07ca7e-aa29-456f-8808-27ea0dcfe096';
    user.firstname = createUserForm.value.fname;
    user.lastname = createUserForm.value.lname;
    user.phone = createUserForm.value.telnr;
    user.email = createUserForm.value.mail;
    user.password = createUserForm.value.kode;
    user.membership = membership;
    console.log(user);

    this.service.createUser(user).subscribe((response) =>
    {console.log(response), this.ngOnInit()});
  }
}
