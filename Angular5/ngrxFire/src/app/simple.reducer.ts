import { Action } from '@ngrx/store';

/*
the purpose of this function is to take the current state and copy it over 
to the new state based on whatever changes to the action is trying to make

A reducer has two variables: state and action. There might be another simple.action.ts document to 
register the actions 
*/
export function simpleReducer(state: string = 'Hello World', action: Action) {

    /*new acton type: Chinese          previous state: Hello World
      new acton type: FRENCH           previous state: 你好
      new acton type: Chinese          previous state: Bonjour le monde
      new acton type: FRENCH           previous state: 你好
    */

    console.log("new acton type: " + action.type + "          previous state: " + state);


    /*
    In redux, the only way to change the state is by dispatching an action.

    Once an action is dispatched, it will go to reducer function,which will copy the
    current state of application along with any data changes to a new javascript object. 

    It is important to know that the state is immutable meaning that it cannot be changed directly, 
    it has to be copied over to a whole brand new state. The reason for this is,it  gives a 
    predictable tree of state changes that we can use to debug the application, and that is
    really the main benefit of redex.
     
    Once the reducer has created the new state, it is saved in a datastore which can be thought as
    a client side database more or less. 
    
    In ngrx, we treat this datastore as Observable so we can subscribe to it from anywhere of
     the application.*/
    switch (action.type) {

        case 'Chinese':
            return state = '你好';

        case 'FRENCH':
            return state = 'Bonjour le monde';

        default:
            return state;
    }
}