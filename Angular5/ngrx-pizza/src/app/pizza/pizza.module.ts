import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {StoreModule} from '@ngrx/store';
import {pizzaReducer} from './pizza.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('pizza',pizzaReducer),
  ],

})
export class PizzaModule { }
