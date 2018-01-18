import * as actions from './pizza.actions';
import {EntityState, createEntityAdapter} from '@ngrx

//Main data interface
export interface Pizza{
    id:string;
    size:string;
}

//Entity adapter
export const pizzaAdaptor=createEntityAdapter <Pizza>();
export interface State extends EntityState <Pizza>{}

const defaultPizza ={
    ids:['123'],
    entities:{
        '123':{
            id:'123',
            size:'small'
        }
    }
}

export const initialState:State=pizzaAdaptor.getInitialState(defaultPizza);