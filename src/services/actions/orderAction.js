import db from '../../utils/firebase'
import * as CartAction from './cartAction'

const collection = "orders"

export const SET_ORDER_DATA = "SET_ORDER_DATA"
export const CLEAR_ORDER_DATA = "CLEAR_ORDER_DATA"

export const getOrders = (userId) => async (dispatch, getState) => {
    try {
        let orders = []
        const data = await db.collection(collection).get()

        data.forEach(doc => {
            let order = {
                ...doc.data(),
                orderId: doc.id
            }

            orders.push(order)
        });

        let filteredOrders = orders.filter(item => item.userId === userId)

        return dispatch({
            type: SET_ORDER_DATA,
            payload: filteredOrders
        })
    } catch (err) {
        console.log(err)
    }
}

export const registerOrder = (order, userId,) => async (dispatch, getState) => {
    let totalPrice = order.map(item => item.price * item.quantity)
        .reduce((sum, item) => sum + item)

    let orderInfo = {
        userId: userId,
        address: '',
        status: 'Na transportadora',
        delivered: false,
        orderPrice: totalPrice.toFixed(2),
        items: order
    }

    await db
        .collection(collection)
        .add(orderInfo)
        .then(res => {
            console.log(`pedido cadastrado para usuario ${userId}`)

            return dispatch(CartAction.clearProductsFromCart())
        })
        .catch(err => console.log(err))
}
