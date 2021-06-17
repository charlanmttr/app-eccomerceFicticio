import React from 'react'
import { Text } from 'react-native'

import Header from '../../components/Header'

import { Container } from './styles'

export default function Carrinho({ navigation }) {
    return (
        <>
            <Header navigation={navigation} />
            <Container>
                <Text>Carrinho</Text>
            </Container>
        </>
    )
}