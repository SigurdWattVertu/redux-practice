import { CART_ACTION_TYPES } from "./cart.types";

export const CART_INITIAL_STATE = {
    items: []
}

export const cartReducer = ( state = CART_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch ( type ) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state, // Don't really need this right now as items is the only thing but hey...
                items: payload
            }
        default:
            return state;
    }
}