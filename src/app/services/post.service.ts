import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl :string = "http://localhost:5056/api/Post";

  constructor(private http: HttpClient) { }

  getPosts() : Observable<Object>{
    return this.http.get(this.baseUrl + "/GetPosts");
  }
}
