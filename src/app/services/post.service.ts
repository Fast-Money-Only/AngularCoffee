import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostModel} from "../posts/post.Model";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl :string = "http://localhost:5056/api/Post";

  constructor(private http: HttpClient) { }

  getPosts() : Observable<Object>{
    return this.http.get(this.baseUrl + "/GetPosts");
  }

  getPost(id: string): Observable<Object>{
    return this.http.get(this.baseUrl + id);
  }

  deletePost(id: string) : Observable<Object>{
    return this.http.delete(this.baseUrl + "/" + id);
  }

  addPost(post: PostModel): Observable<any>{
    return this.http.post(this.baseUrl, post);
  }
}
