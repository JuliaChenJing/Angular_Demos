import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module'
import { CoreModule } from './core/core.module';
import { shoppingListReducer } from 'app/shopping-list/store/shopping-list.reducers';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule,
    /*you need to add forRoot because it is for our main 
    application for eagerly loaded modules,not lazily loaded ones
    
    By adding the following line, 
    ngrx will setup a store ,
    register the ShoppingListReducer as one thing that can be added */
    StoreModule.forRoot({ shoppingList: shoppingListReducer })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
