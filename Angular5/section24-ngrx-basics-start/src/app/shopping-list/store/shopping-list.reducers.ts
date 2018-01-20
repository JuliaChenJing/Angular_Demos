import { Ingredient } from '../../shared/ingredient.model';
/*import everything that is exported from  shopping-list.acitons.ts file, 
and store it in a ShoppingListActions variable as one JavaScript Object
*/
import * as Shopping_List_Actions from './shopping-list.actions'

export interface AppState {
    shoppingList:State;
}
export interface State {
    ingredients: Ingredient[];
    editedIngredient: Ingredient;
    editedIngredientIndex: number;
}

//in shopping-list.reducers.ts this is the new way
const initialState: State = {
    ingredients: [new Ingredient('Apple', 200),
    new Ingredient('Tomato', 200)],
    editedIngredient: null,
    editedIngredientIndex: -1

}
/*the function will receive two arguments. 
the arguments will be passed into the function automatically by @ngrx.
I will show you how to dispatch the action to trigger the reducer through out this module.

A Reducer function will be triggered whenever an anction is dispatched */
export function shoppingListReducer(state = initialState, action: Shopping_List_Actions.ShoppingListActions) {
    // you typically use a switch statement to determine which type of action was dispatched
    switch (action.type) {

        /*manually add one ingredient and its amount
        constructor(public payload: Ingredient) { }*/
        case Shopping_List_Actions.ADD_INGREDIENT:
            return {
                ...state,/*this is the spread operators, taking all the old state parameters, 
            so that all properties of the old object will be added on new object*/

                //just add the new ingredient!
                ingredient: [...state.ingredients, action.payload]
            }


        /*add several ingredients from a recipe I guess

        constructor(public payload: Ingredient[]) { }*/
        case Shopping_List_Actions.ADD_INGREDIENTS:
            return {
                ...state,

                //just add the new ingredientS!
                ingredients: [...state.ingredients, ...action.payload]
            }


        /*updating the name and number of an ingredient

         constructor(public payload: { index: number, ingredient: Ingredient }) { }*/
        case Shopping_List_Actions.UPDATE_INGREDIENT: {


            //get useful parameter from constructor
            const updatedIndex: number = action.payload.index;
            const newIngredient: Ingredient = action.payload.ingredient;

            const oldIngredient: Ingredient = state.ingredients[updatedIndex];

            /*is it necessary to create an updatedIngredient in this way?
            What is the difference between oldIngredient and updatedIngredient? */
            const updatedIngredient: Ingredient = {
                /*javascript object,where I copy all the properties 
                of the old ingredient to update it in a immutable way,
                this will now override all the properties which were the part of oldIngredient,
                and it will give me back a new object so that they don't override this 
                in the existing ingredient*/
                ...oldIngredient,
                ...newIngredient
            };

            //obtain the previous ingredients
            const ingredients: Ingredient[] = [...state.ingredients];
            //update one of them 
            ingredients[updatedIndex] = updatedIngredient;

            return {
                ...state,
                ingredients: ingredients
            }
        }

        /*delete an existing ingredient
        constructor(public payload: number) { }*/
        case Shopping_List_Actions.DELETE_INGREDIENT: {
            const ingredients = [...state.ingredients];
            ingredients.splice(action.payload, 1);
            return {
                ...state,
                ingredients: ingredients
            }
        }


        /*behind this scenes,@ngrxwill replace the state with the new one
        even though in this case, they will be equal*/
        default: return state;
    }




}