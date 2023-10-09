import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from './root-reducer'
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'

const middleWares = [logger, thunk];

const composedEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(rootReducer, undefined, composedEnhancers)