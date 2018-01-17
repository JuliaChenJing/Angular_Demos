import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { postReducer } from './reducers/post.reducer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      post: postReducer,

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
