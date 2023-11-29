import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {PostService} from "../services/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  data: any;


  constructor(private service: PostService) {
  }

  ngOnInit(): void {
    this.service.getPosts().subscribe(data => this.data = data);
    console.log(this.data);
  }

}
