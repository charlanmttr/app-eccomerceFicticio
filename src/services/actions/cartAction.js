import AsyncStorage from '@react-native-async-storage/async-storage';

export const SET_CART_DATA = "SET_CART_DATA"
export const CLEAR_CART_DATA = "CLEAR_CART_DATA"

export const clearProductsFromCart = () => async (dispatch, getState) => {
    try {
        await AsyncStorage.removeItem("@eccommerce.cart")

        return dispatch({
            type: CLEAR_CART_DATA
        })
    } catch (error) {
        throw error.message
    }
}

export const removeProductFromCart = (productId) => async (dispatch, getState) => {
    try {
        let data = await AsyncStorage.getItem("@eccommerce.cart")
        let cartList = JSON.parse(data) || []

        let currentCart = cartList.filter(item => productId !== item.id)

        await AsyncStorage.setItem("@eccommerce.cart", JSON.stringify(currentCart))

        return dispatch({
            type: SET_CART_DATA,
            payload: currentCart
        })
    } catch (error) {
        throw error.message
    }
}

export const addProductToCart = (productData, quantity) => async (dispatch, getState) => {
    try {
        let currentCart = []
        let product = {};
        let localCart = await AsyncStorage.getItem("@eccommerce.cart")
        let cartList = JSON.parse(localCart) || []

        let productExists = cartList.find(item => productData.id === item.id)

        if (productExists) {
            /* se produto existir, incrementa a quantidade, remove o item da lista e adiciona novamente */
            let incrementedQuantity = productExists.quantity + quantity
            cartList = cartList.filter(item => productData.id !== item.id)

            product = {
                ...productData,
                quantity: incrementedQuantity
            }
        } else {
            product = {
                ...productData,
                quantity
            }
        }

        currentCart = [
            ...cartList || [],
            product
        ]

        await AsyncStorage.setItem("@eccommerce.cart", JSON.stringify(currentCart))

        return dispatch({
            type: SET_CART_DATA,
            payload: currentCart
        })
    } catch (error) {
        throw error.message
    }
}

export const getCartProductList = () => async (dispatch, getState) => {
    try {
        let data = await AsyncStorage.getItem("@eccommerce.cart")
        let currentCart = JSON.parse(data) || []

        return dispatch({
            type: SET_CART_DATA,
            payload: currentCart
        })
    } catch (error) {
        throw error.message
    }
}

export const updateProductFromCart = (productData, quantity) => async (dispatch, getState) => {
    try {
        let currentCart = []
        let product = {};

        let data = await AsyncStorage.getItem("@eccommerce.cart")
        let cartList = JSON.parse(data) || []

        cartList = cartList.filter(item => productData.id !== item.id)

        product = {
            ...productData,
            quantity
        }

        currentCart = [
            ...cartList || [],
            product
        ]

        await AsyncStorage.setItem("@eccommerce.cart", JSON.stringify(currentCart))

        return dispatch({
            type: SET_CART_DATA,
            payload: currentCart
        })
    } catch (error) {
        throw error.message
    }
}