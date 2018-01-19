import { Action } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';

export const ADD_INGREDIENT = "ADD_INGREDIENT";//Uppercase is better

export class AddIngredient implements Action {

    readonly type = ADD_INGREDIENT;//forced to provide a readonly type property because of Action

    /*by adding this constructor, I want to use the typescript short cut of turing this 
    argument into a property of this class by adding an accesory in front of it */
    constructor(public payload) {}
}

export type ShoppingListActions = AddIngredient;