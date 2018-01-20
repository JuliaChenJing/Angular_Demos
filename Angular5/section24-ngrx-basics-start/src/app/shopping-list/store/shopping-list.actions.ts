import { Action } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';

//1 add the constent
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const ADD_INGREDIENTS = "ADD_INGREDIENTS";
export const UPDATE_INGREDIENT = "UPDATE_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";


//2 add the class

//manually add one ingredient and its amount
export class AddIngredient implements Action {

    readonly type = ADD_INGREDIENT;//forced to provide a readonly type property because of Action

    /*by adding this constructor, I want to use the typescript short cut of turing this 
    argument into a property of this class by adding an accesory in front of it */
    constructor(public payload: Ingredient) { }
}

//add several ingredients from a recipe I guess
export class AddIngredients implements Action {

    readonly type = ADD_INGREDIENTS;

    constructor(public payload: Ingredient[]) { }
}

//updating the name and number of an ingredient
export class UpdateIngredient implements Action {

    readonly type = UPDATE_INGREDIENT;

    constructor(public payload: { index: number, ingredient: Ingredient }) { }
}

//delete an existing ingredient
export class DeleteIngredient implements Action {

    readonly type = DELETE_INGREDIENT;

    constructor(public payload: number) { }
}

//3 add the type
export type ShoppingListActions =
    AddIngredient
    | AddIngredients
    | UpdateIngredient
    | DeleteIngredient;