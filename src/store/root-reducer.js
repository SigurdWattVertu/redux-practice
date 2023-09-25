import { combineReducers } from "redux";
import { cartReducer } from 'store/cart/cart.reducer'
import { productsReducer } from "store/products/products.reducer";

export const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer
})