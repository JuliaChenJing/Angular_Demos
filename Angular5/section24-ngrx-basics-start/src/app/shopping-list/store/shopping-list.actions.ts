import { Action } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';

//1 add the constent
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const ADD_INGREDIENTS = "ADD_INGREDIENTS";


//2 add the class
export class AddIngredient implements Action {

    readonly type = ADD_INGREDIENT;//forced to provide a readonly type property because of Action

    /*by adding this constructor, I want to use the typescript short cut of turing this 
    argument into a property of this class by adding an accesory in front of it */
    constructor(public payload: Ingredient) { }
}


export class AddIngredients implements Action {

    readonly type = ADD_INGREDIENTS;

    constructor(public payload: Ingredient[]) { }
}

//3 add the type
export type ShoppingListActions = AddIngredient | AddIngredients;