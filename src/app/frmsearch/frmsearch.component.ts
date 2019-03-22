import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { Router } from '@angular/router';
@Component({
  selector: 'app-frmsearch',
  templateUrl: './frmsearch.component.html',
  styleUrls: ['./frmsearch.component.css']
})
export class FrmsearchComponent implements OnInit {

  constructor( private location:Location, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(keyword: string){
    this.router.navigate(['/search', keyword])
  }

  goBack(){
    this.location.back()
  }

}
