import { createAction } from "utils/reducer.utils"
import { CART_ACTION_TYPES } from "./cart.types"

const addCartItem = (cart, item) => {

    // Look to see if product is already in basket
    const productToAdd = cart.items.find(
        (cartItem) => cartItem.id === item.id
    )

    // If so, increment product quantity by 1
    if (productToAdd){
        return cart.items.map((cartItem) => 
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
    }

    // If product is not in basket then: spread in the current cart items then add in the new one at the end.
    return [ ...cart.items, { ...item, quantity: 1} ]
    // Add Cart Item into the cart Array


}

const removeCartItem = (cartTotal) => {
    return cartTotal - 5;
}

export const addItemToCart = (cart, item) => {
    const updatedCart = addCartItem(cart, item) // Will return updated Cart
    console.log(updatedCart)
    // return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, updatedCart)
     return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: updatedCart };

} 

export const removeItemFromCart = (cartTotal) => {
    const newCartTotal = removeCartItem(cartTotal)
    return createAction(CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART, newCartTotal)
} 