import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  private sUrlPosts = 'https://jsonplaceholder.typicode.com/posts'
  public aPosts$: Observable<any> = null
  
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getPosts()
  }

  getPosts(){
    this.aPosts$ = this.httpClient.get(this.sUrlPosts)
  }

}
