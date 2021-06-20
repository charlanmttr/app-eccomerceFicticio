import * as Actions from '../actions'
const initialState = []

const cart = function (state = initialState, action) {
    switch (action.type) {
        case Actions.SET_CART_DATA: {
            return [
                ...initialState,
                ...action.payload
            ]
        }
        case Actions.CLEAR_CART_DATA: {
            return []
        }
        default: {
            return state
        }
    }
}

export default cart;