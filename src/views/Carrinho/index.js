import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import * as CartAction from '../../services/actions/cartAction'
import * as OrderAction from '../../services/actions/orderAction'

import CartProductItem from '../../components/CartProductItem'
import Header from '../../components/Header'
import EmptyList from '../../components/EmptyList'
import NotificationArea from '../../components/NotificationArea'
import IntroductionText from '../../components/IntroductionText'

import { Container, CartList, ButtonArea } from './styles'

export default function Carrinho({ navigation }) {
    const dispatch = useDispatch()
    const cart = useSelector(store => store.cart)
    const user = useSelector(store => store.login)
    const [notificationVisible, setNotificationVisible] = useState(false)

    const getCartList = () => {
        dispatch(CartAction.getCartProductList())
    }

    const deleteItem = (productId) => {
        dispatch(CartAction.removeProductFromCart(productId))
    }

    const updateItem = (productData, quantity) => {
        dispatch(CartAction.updateProductFromCart(productData, quantity))
    }

    const clearCart = () => {
        Alert.alert(
            "Confirmar limpeza",
            "Clique em 'continuar' para remover todos os produtos do carrinho.",
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                { text: "Continuar", onPress: () => dispatch(CartAction.clearProductsFromCart()) }
            ])
    }

    const finalizeOrder = () => {
        dispatch(OrderAction.registerOrder(cart, user.uid))
            .then(() => {
                setNotificationVisible(true)
                setTimeout(() => setNotificationVisible(false), 3000)
            })
    }

    useEffect(() => {
        getCartList()
    }, [dispatch])

    return (
        <>
            <Header navigation={navigation} screenName="Carrinho" />
            <Container>
                {
                    (cart.length === 0)
                        ?
                        <>
                            <EmptyList text="Seu carrinho está vazio :/" />
                        </>
                        :
                        <>
                            <IntroductionText text="Os seguintes itens foram adicionados ao seu carrinho:" />
                            <CartList
                                data={cart}
                                renderItem={({ item }) => <CartProductItem data={item}
                                    deleteAction={deleteItem}
                                    updateAction={updateItem}
                                />}
                                keyExtractor={item => String(item.id)}
                                showsVerticalScrollIndicator={false}
                            />
                            <ButtonArea>
                                <ButtonArea.Button
                                    onPress={() => clearCart()}
                                >
                                    <ButtonArea.Text>
                                        Limpar carrinho
                                    </ButtonArea.Text>
                                </ButtonArea.Button>

                                <ButtonArea.Button
                                    onPress={() => finalizeOrder()}
                                >
                                    <ButtonArea.Text>
                                        Finalizar pedido
                                    </ButtonArea.Text>
                                </ButtonArea.Button>
                            </ButtonArea>
                        </>
                }
            </Container>

            {notificationVisible && <NotificationArea text={`Seu pedido foi registrado`} closeAction={() => setNotificationVisible(false)} />}
        </>
    )
}