import React from 'react'
import { Text } from 'react-native'

import Header from '../../components/Header'

import { Container } from './styles'

export default function Pedidos({ navigation }) {
    return (
        <>
            <Header navigation={navigation} />
            <Container>
                <Text>Pedidos</Text>
            </Container>
        </>
    )
}