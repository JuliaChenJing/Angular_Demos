import { Ingredient } from '../../shared/ingredient.model';
/*import everything that is exported from  shopping-list.acitons.ts file, 
and store it in a ShoppingListActions variable as one JavaScript Object
*/
import * as Shopping_List_Actions from './shopping-list.actions'

//in shopping-list.reducers.ts this is the new way
const initialState = {
    ingredients: [new Ingredient('Apple', 200),
    new Ingredient('Tomato', 200)]

}
/*the function will receive two arguments. 
the arguments will be passed into the function automatically by @ngrx.
I will show you how to dispatch the action to trigger the reducer through out this module.

A Reducer function will be triggered whenever an anction is dispatched */
export function shoppingListReducer(state = initialState, action: Shopping_List_Actions.ShoppingListActions) {
    // you typically use a switch statement to determine which type of action was dispatched
    switch (action.type) {

        case Shopping_List_Actions.ADD_INGREDIENT:
            return {
                ...state,/*this is the spread operators, taking all the old state parameters, 
            so that all properties of the old object will be added on new object*/
                ingredient: [...state.ingredients, action.payload]
            }

        case Shopping_List_Actions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            }
        /*behind this scenes,@ngrxwill replace the state with the new one
        even though in this case, they will be equal*/
        default: return state;
    }




}