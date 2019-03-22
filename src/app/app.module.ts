import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatGridListModule, MatCardModule, MatDividerModule } from '@angular/material'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostsDetailsComponent } from './posts-details/posts-details.component';
import { PostsService } from './posts/posts.service';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { FrmsearchComponent } from './frmsearch/frmsearch.component';


const routes: Routes = [
  {path : '', component: PostsComponent},
  {path : 'search/:keyword', component: SearchComponent},
  {path : 'frmsearch', component: FrmsearchComponent},
  {path : 'post/:id', component : PostsDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostsDetailsComponent,
    SearchComponent,
    FrmsearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatGridListModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
