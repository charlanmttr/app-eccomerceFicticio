import * as Actions from '../actions'
const initialState = []

const products = function (state = initialState, action) {
    switch (action.type) {
        case Actions.SET_PRODUCTS_DATA: {
            return [
                ...initialState,
                ...action.payload
            ]
        }
        default: {
            return state
        }
    }
}

export default products;