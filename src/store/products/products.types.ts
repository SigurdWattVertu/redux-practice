export enum PRODUCT_ACTION_TYPES {
    SET_PRODUCTS = 'product/SET_PRODUCTS',
    FETCH_PRODUCTS_START = 'products/FETCH_PRODUCTS_START',
    FETCH_PRODUCTS_SUCCESS = 'products/FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_FAILED = 'products/FETCH_PRODUCTS_FAILED',
}

export type Product = {
    id: number
    name: string
    price: number
}
