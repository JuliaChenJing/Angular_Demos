import { Action } from '@ngrx/store';

//the purpose of this function is to take the current state and copy it over 
//to the new state based on whatever changes to the action is trying to make
export function simpleReducer(state: string = 'Hello World', action: Action) {
    console.log(action.type, state);

    switch (action.type) {
        case 'SPANISH':
            return state = 'Hola Mundo';
        case 'FRENCH':
            return state = 'Bonjour le monde';

        default:
            return state;

    }
}