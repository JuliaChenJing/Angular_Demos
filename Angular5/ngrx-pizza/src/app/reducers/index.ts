import { ActionReducerMap } from '@ngrx/store';
import { pizzaReducer } from '../pizza/pizza.reducer';

/*export all of our reducers as a single constant.
In this example we only have one but you could imagine how much more convenient if we have 10 reducers 
to manage.
*/
export const reducers: ActionReducerMap<any> = {
    pizza: pizzaReducer
};