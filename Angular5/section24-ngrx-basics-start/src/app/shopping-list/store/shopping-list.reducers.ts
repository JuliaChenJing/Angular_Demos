//action is to be dispatched (派遣，发送)
import { Action } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';



//we need to define some initial state for the first run
const initialState = {
    ingredients: [new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10)]

}
/*the function will receive two arguments. 
the arguments will be passed into the function automatically by @ngrx.
I will show you how to dispatch the action to trigger the reducer through out this module.

A Reducer function will be triggered whenever an anction is dispatched */
export function shoppingListReducer(state = initialState, action: Action) {
    // you typically use a switch statement to determine which type of action was dispatched
    switch (action.type) {

        case ADD_INGREDIENT:
            return {
                ...state,/*this is the spread operators, taking all the old state parameters, 
            so that all properties of the old object will be added on new object*/
                ingredient: [...state.ingredients, action]
            }

    }

    /*behind this scenes,@ngrxwill replace the state with the new one
     even though in this case, they will be equal*/
    return state;

}