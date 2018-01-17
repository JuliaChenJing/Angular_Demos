import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';


import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { postReducer } from './reducers/post.reducer';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      post: postReducer,

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
