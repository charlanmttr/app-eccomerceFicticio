import React from 'react'
import { StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons'

import { MenuIcon, HeaderArea, HeaderText } from './styles.js'

export default function Header({ navigation }) {
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
                <HeaderText>Bem vindo, </HeaderText>
                <HeaderText.Name>Fulano</HeaderText.Name>
            </HeaderArea>
        </>
    )
}
