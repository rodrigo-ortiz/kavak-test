import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private sUrlBase = 'https://jsonplaceholder.typicode.com/posts'
  public aPosts$: Observable<any> = null;
  constructor(private http:HttpClient) { }

  getPosts() { 
    return this.http.get(this.sUrlBase);
  }
}
