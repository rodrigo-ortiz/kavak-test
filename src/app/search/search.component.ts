import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs/operators'
import {EMPTY, Observable } from 'rxjs'

import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  findControl = new FormControl()
  private sUrlPost = 'https://jsonplaceholder.typicode.com/posts'
  public aPosts$: Observable<any> = null;
  public aPosts2$: Observable<any> = null;
  public aSearchPosts : any;
  public sKeyword: string;
  constructor(  private location:Location, private route:ActivatedRoute, private httpClient: HttpClient ) { 

  }

  ngOnInit() {
    /*this.findControl.valueChanges
    .pipe(filter(value => value.length > 3), 
    debounceTime(1000), 
    switchMap(value => 
      this.httpClient.get(this.sUrlPost)
    ))*/
      this.getPosts()
      

  }

  getPosts(){
    this.sKeyword = this.route.snapshot.paramMap.get('keyword');
    this.aPosts$ = this.httpClient.get(this.sUrlPost);
    this.aPosts2$ = this.aPosts$.pipe(map((posts)=>{
      return Object.keys(posts).map(key => ({
        posts : (posts[key].title.includes(this.sKeyword))? posts[key]: null
      }))
    }))


    
  }

  transformData(aPosts) {
   

    aPosts.map((a, i) => {
      //console.log(a)
      //console.log('A', a.title.includes(keyword))
    })

    /*const current = currentRates.rates;
    return Object.keys(current).map(key => ({
      date: currentRates.date,
      currency: key,
      euros: current[key]
    }));*/
  }

}
