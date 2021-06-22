import React, { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'
import { Container, OrdersList } from './styles'

import * as OrderAction from '../../services/actions/orderAction'
import Header from '../../components/Header'
import OrderItem from '../../components/OrderItem'
import EmptyList from '../../components/EmptyList'
import IntroductionText from '../../components/IntroductionText'

export default function Pedidos({ navigation }) {
    const isFocused = useIsFocused();
    const dispatch = useDispatch()
    const orders = useSelector(store => store.orders)
    const user = useSelector(store => store.login)
    const [loading, setLoading] = useState()

    const getOrders = () => {
        dispatch(OrderAction.getOrders(user.uid))
            .then(() => setLoading(false))
    }

    useEffect(() => {
        setLoading(true)
        getOrders()
    }, [isFocused])

    return (
        <>
            <Header navigation={navigation} screenName="Pedidos" />
            {
                loading && (
                    <Container
                        aliginItems="center"
                        justifyContent="center"
                    >
                        <ActivityIndicator size="large" color="#0068ff" />
                    </Container>
                )
            }

            {
                orders.length === 0 && !loading && (
                    <Container>
                        <EmptyList text="Sua lista de pedidos está vazia :/" />
                    </Container>
                )
            }

            {
                orders.length !== 0 && !loading && (
                    <Container>
                        <IntroductionText text="Seus pedidos finalizados:" />
                        <OrdersList
                            data={orders}
                            renderItem={({ item }) => <OrderItem data={item} />}
                            keyExtractor={item => String(item.orderId)}
                            showsVerticalScrollIndicator={false}
                        />
                    </Container>
                )
            }
        </>
    )
}