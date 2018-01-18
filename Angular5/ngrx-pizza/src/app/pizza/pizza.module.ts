import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { pizzaReducer } from './pizza.reducer';

import { PizzaOrderComponent } from './pizza-order/pizza-order.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('pizza', pizzaReducer),
  ],

  declarations: [PizzaOrderComponent],
  exports: [PizzaOrderComponent]

})
export class PizzaModule { }
