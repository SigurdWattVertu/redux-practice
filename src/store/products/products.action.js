import { createAction } from "utils/reducer.utils";
import { PRODUCT_ACTION_TYPES } from "./products.types";

export const setProducts = (products) => {
    return createAction(PRODUCT_ACTION_TYPES.SET_PRODUCTS, products)
}