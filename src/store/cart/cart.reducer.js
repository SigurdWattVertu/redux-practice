import { CART_ACTION_TYPES } from "./cart.types";

export const CART_INITIAL_STATE = {
    total: 0,
    items: []
}

export const cartReducer = ( state = CART_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch ( type ) {
        case CART_ACTION_TYPES.UPDATE_CART_TOTAL:
            return {
                ...state,
                cartTotal: payload
            }
        case CART_ACTION_TYPES.UPDATE_CART_ITEMS:
            return {
                ...state,
                cartItems: payload
            }
        default:
            return state;
    }
}