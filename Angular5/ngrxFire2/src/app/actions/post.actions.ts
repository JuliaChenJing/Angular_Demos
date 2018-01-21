import { Action } from '@ngrx/store';


export const UPVOTE = '[POST] Upvote ';
export const DOWNVOTE = '[POST]  Downvote ';
export const EDIT_TEXT = '[POST]  Edit ';
export const RESET = '[POST]  Reset ';


export class Upvote implements Action {
    readonly type = UPVOTE;

}

export class Downvote implements Action {
    readonly type = DOWNVOTE;
}

export class EditText implements Action {
    readonly type = EDIT_TEXT;
    constructor(public payload: string) {}
}

export class Reset implements Action {
    readonly type = RESET;
}

export type All = Upvote | Downvote | EditText | Reset;