import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { pizzaReducer } from './pizza.reducer';

import { PizzaOrderComponent } from './pizza-order/pizza-order.component';

@NgModule({

  //imports makes the exported declarations of other modules available in the current module
  imports: [
    CommonModule,
    /*
    When you have (lazy loaded) feature modules and you want to register reducers within that
     module, then you use forFeature. 
     
    Otherwise, in your AppModule you use forRoot.*/
    StoreModule.forFeature('pizza', pizzaReducer),
  ],

  /*declarations are to make directives (including components and pipes) from the CURRENT MODEL
   available to other directives in the current module. Selectors of directives, 
   components or pipes are only matched against the HTML if they are declared or imported.*/
  declarations: [PizzaOrderComponent],

  /*exports makes the components, directives, and pipes available in modules that add this 
  module to imports.  exports can also be used to re-export modules such as CommonModule 
  and FormsModule, which is often done in shared modules.*/
  exports: [PizzaOrderComponent]

})
export class PizzaModule { }
