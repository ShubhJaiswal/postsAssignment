import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = `https://jsonplaceholder.typicode.com/`;

  constructor(private http: HttpClient) { }

  getPostList(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}posts`);
  }
  
  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.url}posts/${id}`);
  }

  createNewPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.url}posts`, {body: post});
  }

  searchPostsByTitle(title: string): Observable<Post[]> {
    const url = `${this.url}/posts?title=${title}`;
    return this.http.get<Post[]>(url);
  }
}
