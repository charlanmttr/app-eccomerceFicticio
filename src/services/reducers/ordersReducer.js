import * as Actions from '../actions'
const initialState = []

const orders = function(state = initialState, action){
    switch (action.type){
        case Actions.SET_ORDER_DATA: {
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

export default orders