import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import login from './reducers/loginReducer'
import products from './reducers/productsReducer'
import cart from './reducers/cartReducer'
import orders from './reducers/ordersReducer'

const rootReducer = combineReducers({
    login,
    products,
    cart,
    orders
})

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store