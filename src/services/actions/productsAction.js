import api from '../../utils/api'

export const SET_PRODUCTS_DATA = "SET_PRODUCTS_DATA"

export const getProducts = () => async (dispatch, getState) => {
    await api.get('/products')
        .then(res => {
            let productsList = res.data;

            return dispatch({
                type: SET_PRODUCTS_DATA,
                payload: productsList
            })
        })
        .catch(err => {
            throw err.message
        })
}