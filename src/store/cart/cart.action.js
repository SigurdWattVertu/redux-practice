import { createAction } from "utils/reducer.utils"
import { CART_ACTION_TYPES } from "./cart.types"

export const addItemToCart = (cartTotal) => {
    return createAction(CART_ACTION_TYPES.ADD_ITEM_TO_CART, cartTotal + 5)
} 

export const removeItemFromCart = (cartTotal) => {
    return createAction(CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART, cartTotal - 5)
} 