import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {PostService} from "../services/post.service";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {NgForm} from "@angular/forms";
import {PostModel} from "./post.Model";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  data: any;
  user:  any;


  constructor(private service: PostService) {
  }

  ngOnInit(): void {
    this.service.getPosts().subscribe(data => this.data = data);
    console.log(this.data);
  }

  onSubmit(postForm: NgForm) {
    let post :PostModel = new PostModel();
    post.title = postForm.value.title;
    post.img = postForm.value.img; //Skal rettes
    post.userID = "4d07ca7e-aa29-456f-8808-27ea0dcfe096";//hard coded to check login
    console.log(post);
    /*
    this.service.addPost(post)
        .subscribe((response) =>
        {console.log(response), this.ngOnInit()});*/
  }
}
