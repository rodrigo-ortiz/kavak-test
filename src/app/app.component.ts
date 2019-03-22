import { Component } from '@angular/core';
import { Location } from '@angular/common'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kavak-test';

  constructor(private router: Router){ }

  onSubmit(keyword: string){
    this.router.navigate(['/search', keyword])
  }

}
