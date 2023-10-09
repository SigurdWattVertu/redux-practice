import { combineReducers } from "redux";
import { cartReducer } from 'store/cart/cart.reducer'
import { productsReducer } from "store/products/products.reducer";

// Whenever any reducer is updated the entire store object
// is going to be a NEW store object 
export const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer
})