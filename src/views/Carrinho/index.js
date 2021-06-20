import React, { useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'
import { Alert } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import * as CartAction from '../../services/actions/cartAction'

import CartProductItem from '../../components/CartProductItem'
import Header from '../../components/Header'

import { Container, Cart, TextIntroArea, ButtonArea, EmptyCartArea } from './styles'

export default function Carrinho({ navigation }) {
    const isFocused = useIsFocused();
    const dispatch = useDispatch()
    const cart = useSelector(store => store.cart)

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

    const buyProducts = () => {

    }

    useEffect(() => {
        getCartList()
    }, [isFocused])

    return (
        <>
            <Header navigation={navigation} />
            <Container>
                {
                    (cart.length === 0)
                        ?
                        <>
                            <EmptyCartArea>
                                <EmptyCartArea.Text>
                                    Seu carrinho está vazio :c
                                </EmptyCartArea.Text>
                            </EmptyCartArea>
                        </>
                        :
                        <>
                            <TextIntroArea>
                                <TextIntroArea.Text>Os seguintes itens foram adicionados ao seu carrinho:</TextIntroArea.Text>
                            </TextIntroArea>
                            <Cart
                                data={cart}
                                renderItem={({ item }) => <CartProductItem data={item}
                                    deleteAction={deleteItem}
                                    updateAction={updateItem}
                                />}
                                keyExtractor={item => String(item.id)}
                            />
                            <ButtonArea>
                                <ButtonArea.Button
                                    onPress={() => clearCart()}
                                >
                                    <ButtonArea.Text>
                                        Limpar carrinho
                                    </ButtonArea.Text>
                                </ButtonArea.Button>

                                <ButtonArea.Button>
                                    <ButtonArea.Text>
                                        Finalizar pedido
                                    </ButtonArea.Text>
                                </ButtonArea.Button>
                            </ButtonArea>
                        </>
                }
            </Container>
        </>
    )
}