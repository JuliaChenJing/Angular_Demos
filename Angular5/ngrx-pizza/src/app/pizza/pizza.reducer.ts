import * as actions from './pizza.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity'
import { InitialInputData } from '@angular/core/src/render3/l_node_static';
import { createSelector, createFeatureSelector } from '@ngrx/store';

//Main data interface
export interface Pizza {
    id: string;
    size: string;
}

//Entity adapter
export const pizzaAdaptor = createEntityAdapter<Pizza>();

export interface State extends EntityState<Pizza> { }

const defaultPizza = {
    ids: ['123'],
    entities: {
        '123': {
            id: '123',
            size: 'small'
        }
    }
}

export const initialState: State = pizzaAdaptor.getInitialState(defaultPizza);

export function pizzaReducer(state: State = initialState, action: actions.PizzaActions) {
    switch (action.type) {

        case actions.CREATE:
            //pass the previoius state as the second parameter
            return pizzaAdaptor.addOne(action.pizza, state);

        case actions.UPDATE:
            return pizzaAdaptor.updateOne({
                id: action.id,
                changes: action.changes
            }, state);

        case actions.DELETE:
            return pizzaAdaptor.removeOne(action.id, state);
        default:
            return state;
    }
}
//Create the default selectors
export const getPizzaState = createFeatureSelector<State>('pizza');//StoreModule.forFeature('pizza', pizzaReducer)

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = pizzaAdaptor.getSelectors(getPizzaState);

