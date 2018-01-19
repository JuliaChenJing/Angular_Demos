//action is to be dispatched (派遣，发送)
import { Action } from '@ngrx/store';
import { Ingredient } from '../shared/ingredient.model';
//we need to define some initial state for the first run
const initialState = {
    ingredients: [new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10)]

}
/*the function will receive two arguments. 
the arguments will be passed into the function automatically by ngrx.
I will show you how to dispatch the action to trigger the reducer through out this module.

A Reducer function will be triggered whenever an anction is dispatched */
export function shoppingListReducer(state, action: Action) {

}