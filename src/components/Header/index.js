import React from 'react'
import { StatusBar, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import * as LoginAction from '../../services/actions/loginAction'

import { MenuIcon, LogoutIcon, LogoutText, HeaderArea } from './styles.js'

export default function Header({ navigation }) {
    const dispatch = useDispatch()
    const user = useSelector(store => store.login)

    const logout = () => {
        Alert.alert(
            "Confirmar logout",
            "Clique em 'continuar' para deslogar do aplicativo.",
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                {
                    text: "Continuar", onPress: () => {
                        console.log(`usuario ${user.firstName} deslogado`)
                        dispatch(LoginAction.logoff())
                        
                        navigation.reset({ routes: [{ name: 'Login' }] })
                    }
                }
            ])
    }

    return (
        <>
            <StatusBar
                barStyle="light-content"
                backgroundColor="#0068ff"
            />
            <HeaderArea>
                <MenuIcon
                    onPress={() => navigation.openDrawer()}
                >
                    <Feather
                        name="menu"
                        size={40}
                        color="#FFF"
                    />
                </MenuIcon>
                <LogoutIcon
                    onPress={() => logout()}
                >
                    <Feather
                        name="log-out"
                        size={25}
                        color="#0068ff"
                    />
                    <LogoutText> Sair</LogoutText>
                </LogoutIcon>
            </HeaderArea>
        </>
    )
}
