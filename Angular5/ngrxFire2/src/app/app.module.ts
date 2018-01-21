import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';


import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { postReducer } from './reducers/post.reducer';

import { FormsModule } from '@angular/forms';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreDevtools } from '@ngrx/store-devtools/src/devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    /*If store is to be thought of as your client side database,
       reducers can be considered the tables in said database.
        Reducers represent sections, or slices of state within your 
        application and should be structured and composed accordingly.*/
    StoreModule.forRoot({
      post: postReducer,
    }),

    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
