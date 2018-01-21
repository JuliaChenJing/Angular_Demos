import { Component, NgModule } from '@angular/core';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable';

import { Post } from './models/post.model';
import * as PostActions from './actions/post.actions';

interface AppState {
  post: Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  /* Like a traditional database represents the point of record for an application, 
  your store can be thought of as a client side ‘single source of truth’, or database.*/
  
  post: Store<Post> //<div *ngIf="post|async as p">
  editedText: string;

  constructor(private store: Store<AppState>) {
    this.post = this.store.select('post');
  }

  editText() {
    this.store.dispatch(new PostActions.EditText(this.editedText)) 
  }

  resetPost() {
    this.store.dispatch(new PostActions.Reset())
  }

  upvote() {
    this.store.dispatch(new PostActions.Upvote())
  }

  downvote() {
    this.store.dispatch(new PostActions.Downvote())
  }
}
