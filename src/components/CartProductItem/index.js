import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { Container, ProductImage, ProductsInfo, ButtonsArea } from './styles'
import { MaterialIcons } from '@expo/vector-icons'

export default function CartProductItem({ data, deleteAction, updateAction }) {
    const [quantity, setQuantity] = useState()
    const [modified, setModified] = useState(false)

    useEffect(() => {
        setQuantity(String(data.quantity))
    }, [data])

    const confirmRemove = () => {
        Alert.alert(
            "Confirmar remoção",
            "Clique em 'continuar' para confirmar a remoção do item no carrinho.",
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                { text: "Continuar", onPress: () => deleteAction(data.id) }
            ]
        );
    }

    const confirmUpdate = () => {
        if (quantity !== "") {
            Alert.alert(
                "Confirmar alteração",
                "Clique em 'continuar' para confirmar a alteração na quantidade do item.",
                [
                    {
                        text: "Cancelar",
                        style: "cancel"
                    },
                    { text: "Continuar", onPress: () => updateAction(data, quantity) }
                ]
            );
        } else {
            alert("Digite a quantidade desejada")
        }
    }

    return (
        <Container>
            <ProductImage>
                <ProductImage.Image
                    resizeMode="contain"
                    source={{ uri: data.image }}
                />
            </ProductImage>
            <ProductsInfo>
                <ProductsInfo.Name
                    numberOfLines={2}
                >{data.title}</ProductsInfo.Name>
                <ProductsInfo.Area>
                    <ProductsInfo.Text>Quantidade: </ProductsInfo.Text>
                    <ProductsInfo.QuantityInput
                        value={quantity}
                        onChangeText={value => {
                            setModified(true)
                            setQuantity(String(value))
                        }}
                        keyboardType="numeric"
                    />
                </ProductsInfo.Area>
                <ProductsInfo.Area>
                    <ProductsInfo.Text>Preço: </ProductsInfo.Text>
                    <ProductsInfo.Price>{'$' + data.price.toFixed(2)}</ProductsInfo.Price>
                </ProductsInfo.Area>
                <ProductsInfo.Area>
                    <ProductsInfo.Text>Preço total: </ProductsInfo.Text>
                    <ProductsInfo.TotalPrice>{'$' + (data.quantity * data.price).toFixed(2)}</ProductsInfo.TotalPrice>
                </ProductsInfo.Area>
            </ProductsInfo>
            <ButtonsArea>
                {
                    modified &&
                    <ButtonsArea.Button
                        onPress={() => confirmUpdate()}
                    >
                        <MaterialIcons
                            name="done"
                            size={24}
                            color="#000"
                        />
                    </ButtonsArea.Button>
                }
                <ButtonsArea.Button
                    onPress={() => confirmRemove()}
                >
                    <MaterialIcons
                        name="delete-outline"
                        size={24}
                        color="#000"
                    />
                </ButtonsArea.Button>
            </ButtonsArea>
        </Container>
    )
}
