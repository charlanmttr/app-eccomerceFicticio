import firebase from 'firebase'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SET_LOGIN_DATA = "SET_LOGIN_DATA"
export const CLEAR_LOGIN_DATA = "CLEAR_LOGIN_DATA"

export const login = (email, password, rememberMe) => async (dispatch, getState) => {
    if (!rememberMe) {
        AsyncStorage.removeItem("@eccommerce.email")
        AsyncStorage.removeItem("@eccommerce.password")
    }

    await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
            console.log(`login feito com email ${email}`)

            if (rememberMe) {
                AsyncStorage.setItem("@eccommerce.email", email)
                AsyncStorage.setItem("@eccommerce.password", password)
            }

            let { displayName, uid } = res.user
            let splitFullName = displayName.split(" ");
            let firstName = splitFullName[0]
            let lastName = splitFullName[splitFullName.length-1]
            
            return dispatch({
                type: SET_LOGIN_DATA,
                payload: {
                    email,
                    fullName: displayName,
                    firstName,
                    lastName,
                    uid
                }
            })
        })
        .catch(err => {
            throw err.message
        })
}

export const logoff = () => async (dispatch, getState) => {
    return dispatch({
        type: CLEAR_LOGIN_DATA,
    })
}

export const registerNewUser = (email, password, nameUser) => async (dispatch, getState) => {
    await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            console.log(`usuario de email ${email} criado`)
            
            let user = firebase.auth().currentUser;

            user.updateProfile({
                displayName: nameUser,
            })

            return dispatch({
                type: SET_LOGIN_DATA,
                payload: {
                    email,
                    name: nameUser
                }
            })
        })
        .catch(err => {
            throw err.message
        })
}