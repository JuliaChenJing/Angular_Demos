import { BrowserModule, } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { simpleReducer } from './simple.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ messageReducer: simpleReducer })//necessary for store to work
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
