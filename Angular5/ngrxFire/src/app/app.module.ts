import { BrowserModule,  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {StoreModule} from '@ngrx/store';
import {simpleReducer} from './simple.reducer';
//import { AppRoutingModule} from './app.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  //  AppRoutingModule,
    StoreModule.forRoot({message:simpleReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
