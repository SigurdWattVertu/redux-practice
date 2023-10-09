import { PRODUCT_ACTION_TYPES } from "store/products/products.types"

const INITIAL_PRODUCTS_STATE = {
    products: [],
    isLoading: false,
    error: null
}

export const productsReducer = ( state = INITIAL_PRODUCTS_STATE, action ) => {

    console.log(action)
    const { type, payload } = action

    switch ( type ) {
        case PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: payload,
                isLoading: false
            }
        case PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_START:
            return {
                ...state,
                isLoading: true
            }
        case PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: true
        }
        default:
            return state;
    }
}