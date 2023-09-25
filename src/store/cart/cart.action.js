import { createAction } from "utils/reducer.utils"
import { CART_ACTION_TYPES } from "./cart.types"

const addCartItem = (cart, item) => {

    const productToAdd = cart.items.find(
        (cartItem) => cartItem.id === item.id
    )

    if (productToAdd){
        
    }

    return [ ...cart.items, { item, quantity: 1} ]
    // Add Cart Item into the cart Array

    // To update Cart Total create a selector which is triggered when the cartItems array changes & recalculate based on that


  

}

const removeCartItem = (cartTotal) => {
    return cartTotal - 5;
}

export const addItemToCart = (cart, item) => {
    const newCartTotal = addCartItem(cart, item)
    return createAction(CART_ACTION_TYPES.UPDATE_CART_TOTAL, newCartTotal)
} 

export const removeItemFromCart = (cartTotal) => {
    const newCartTotal = removeCartItem(cartTotal)
    return createAction(CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART, newCartTotal)
} 