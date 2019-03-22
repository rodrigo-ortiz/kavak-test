import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  title = "Mis Posts"

  users = [
    {id:1, name: 'Roni'},
    {id:2, name: 'Elias'},
    {id:3, name: 'Susana'}
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
