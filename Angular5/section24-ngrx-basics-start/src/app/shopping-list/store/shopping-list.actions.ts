import { Action } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';

export const ADD_INGREDIENT = "ADD_INGREDIENT";//Uppercase is better

export class AddIngredient implements Action {
    readonly type = ADD_INGREDIENT;//forced to provide a readonly type property because of Action 
    payload: Ingredient;
}

export type ShoppingListActions = AddIngredient;