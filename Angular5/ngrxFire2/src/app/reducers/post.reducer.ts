import * as PostActions from '../actions/post.actions';
import { Post } from '../models/post.model';

export type Action = PostActions.All;

const defaultState: Post = {
    text: ' default title',
    likes: 0
}

/*Each state object is immutable, so we cannot just add the properties on the object itself.
An efficient way to add new object is to use Object.assign() and past the first empty object,
state, and any new data. Object.assign() will build the new object from left to right, so any data 
further to right will override the data on the left.*/


//method 3:
const newState = (state, newData) => {
    return Object.assign({}, state, newData)
}

/*


//method 1
function newState(state, newData) {
    return Object.assign({}, state, newData)
}

//method 2:
const newState = function (state, newData) {
    return Object.assign({}, state, newData)
}

*/

/*
A  reducer is a pure function, accepting two arguments,
 the previous state and an action with a type and optional 
 data (payload) associated with the event. 
 
 Using the previous analogy,
  if store is to be thought of as your client side database,
   reducers can be considered the tables in said database.
    Reducers represent sections, or slices of state within your 
    application and should be structured and composed accordingly.*/

//Reducer function
export function postReducer(state: Post = defaultState, action: Action) {

    console.log(action.type, state);

    switch (action.type) {

        case PostActions.UPVOTE:
            return newState(state, { likes: state.likes + 1 });

        case PostActions.DOWNVOTE:
            return newState(state, { likes: state.likes - 1 });

        case PostActions.EDIT_TEXT:
            return newState(state, { text: action.payload }); // constructor(public payload: string) {}

        case PostActions.RESET:
            return defaultState;

        default: return defaultState;
    }
}