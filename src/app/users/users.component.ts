import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {UserModel} from "./User.Model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  data: any;

  constructor(private service: UserService) {
  }

  ngOnInit(): void {
    this.service.getUsers().subscribe(data => this.data = data);
    console.log(this.data);
  }
}
