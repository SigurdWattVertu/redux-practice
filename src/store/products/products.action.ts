import { createAction, Action, ActionWithPayload } from '../../utils/reducer.utils'
import { PRODUCT_ACTION_TYPES, Product } from './products.types'

// export const setProducts = (products) => {
//     return createAction(PRODUCT_ACTION_TYPES.SET_PRODUCTS, products)
// }

export type FetchProductsStart = Action<PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_START>

export type FetchProductsSuccess = ActionWithPayload<PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS, Product[]>

export const fetchProductsStart = () => createAction(PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_START)

export const fetchProductsSuccess = (products: any) => createAction(PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS, products)

export const fetchProductsFailure = (error: any) => createAction(PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_FAILED, error)

// Redux Thunk recommends that we declare our THUNK ACTIONS with 'async'
// So we know this action creator function and know it is async / a thunk

// It is a function, which returns a function, which returns a dispatch
export const fetchProductsAsync = () => async (dispatch: any) => {
    dispatch(fetchProductsStart())
    try {
        fetch(`http://localhost:8080/products`, { mode: 'cors' })
            .then((res) => res.json())
            .then((products) => dispatch(fetchProductsSuccess(products)))
    } catch (error) {
        dispatch(fetchProductsFailure(error))
    }
}
