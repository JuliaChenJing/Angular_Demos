import { Action } from '@ngrx/store';

//the purpose of this function is to take the current state and copy it over 
//to the new state based on whatever changes to the action is trying to make
export function simpleReducer(state: string = 'Hello World', action: Action) {
    
    console.log("new acton type: " + action.type + "          previous state: " + state);

    switch (action.type) {

        case 'Chinese':
            return state = '你好';

        case 'FRENCH':
            return state = 'Bonjour le monde';

        default:
            return state;
    }
}