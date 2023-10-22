import { createSelector } from 'reselect'

export const productsSelector = (state) => state.products

export const selectProductsIsLoading = createSelector([productsSelector], (productsSelector) => productsSelector.isLoading)
