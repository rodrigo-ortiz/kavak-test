import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http';

import { Location } from '@angular/common'

@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrls: ['./posts-details.component.css']
})
export class PostsDetailsComponent implements OnInit {

  private sUrlPost = 'https://jsonplaceholder.typicode.com/posts/'
  public aPost$: Observable<any> = null

  constructor( private location:Location, private route:ActivatedRoute, private httpClient:HttpClient ) { }

  ngOnInit() {
    this.getPost()
  }


  getPost(){
    const id = this.route.snapshot.paramMap.get('id');
    this.aPost$ = this.httpClient.get(this.sUrlPost+`${id}`)
  }

  goBack(){
    this.location.back()
  }

}
