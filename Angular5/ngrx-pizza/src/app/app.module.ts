import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {PizzaModule} from './pizza/pizza.module';
import{reducers} from'./reducers';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge:25
    }),
    PizzaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
