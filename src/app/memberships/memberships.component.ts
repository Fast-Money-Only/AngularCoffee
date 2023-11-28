import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {MembershipService} from "../services/membership.service";
import {Guid} from "guid-typescript";
import {MembershipModel} from "./Membership.Model";

@Component({
  selector: 'app-memberships',
  templateUrl: './memberships.component.html',
  styleUrls: ['./memberships.component.css']
})
export class MembershipsComponent{



  constructor(private service: MembershipService) {
  }


  onSubmit(memebershipForm: any) {
    console.log(memebershipForm.value.name);
    let ms :MembershipModel = new MembershipModel();
    ms.title = memebershipForm.value.name;
    console.log(ms);

    this.service.createMembership(ms)
      .subscribe((response) =>
      {console.log(response)});
  }
}
