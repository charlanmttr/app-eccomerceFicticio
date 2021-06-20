import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { ModalArea, Container, CloseButton, ModalHeader, ProductArea, ProductImage, ButtonArea, QuantityButton, BuyButton, CancelButton } from './styles'

import AsyncStorage from '@react-native-async-storage/async-storage';

import * as CartAction from '../../services/actions/cartAction'

export default function ProductModal({ data, closeAction }) {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()

    const deleteCart = async () => {
        await AsyncStorage.removeItem("@eccommerce.cart")
        console.log('clear cart')
    }

    const addProductToCart = () => {
        dispatch(CartAction.addProductToCart(data, quantity))
    }

    return (
        <Container>
            <ModalArea>
                <ModalHeader>
                    <CloseButton title="Fechar" onPress={closeAction}>
                        <Feather
                            name="x"
                            size={35}
                            color="#FFF"
                        />
                    </CloseButton>
                </ModalHeader>
                <ProductImage>
                    <ProductImage.Area>
                        <ProductImage.Image
                            resizeMode="contain"
                            source={{ uri: data.image }}
                        />
                    </ProductImage.Area>
                </ProductImage>
                <ProductArea>
                    <ProductArea.Name
                        numberOfLines={2}
                    >
                        {data.title}
                    </ProductArea.Name>
                    <ProductArea.Description
                        numberOfLines={3}
                    >
                        {data.description}
                    </ProductArea.Description>
                    <ProductArea.Price>Price: ${data.price}</ProductArea.Price>
                </ProductArea>
                <ButtonArea>
                    <CancelButton onPress={() => deleteCart()}>
                        {/* <CancelButton onPress={closeAction}> */}
                        <CancelButton.Text>
                            Cancelar
                        </CancelButton.Text>
                    </CancelButton>
                    <QuantityButton>
                        <QuantityButton.Remove
                            onPress={() => (quantity > 1) ? setQuantity(quantity - 1) : null}
                        >
                            <Feather
                                name="minus"
                                color="#000"
                                size={25}
                            />
                        </QuantityButton.Remove>
                        <QuantityButton.QuantityView>
                            <QuantityButton.Text>
                                {quantity}
                            </QuantityButton.Text>
                        </QuantityButton.QuantityView>
                        <QuantityButton.Add
                            onPress={() => (quantity < 10) ? setQuantity(quantity + 1) : null}
                        >
                            <Feather
                                name="plus"
                                color="#000"
                                size={25}
                            />
                        </QuantityButton.Add>
                    </QuantityButton>
                    <BuyButton onPress={() => addProductToCart()}>
                        <BuyButton.Text>
                            Comprar
                        </BuyButton.Text>
                    </BuyButton>
                </ButtonArea>
            </ModalArea>
        </Container>
    )
}
