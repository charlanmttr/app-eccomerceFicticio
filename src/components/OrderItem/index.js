import React, { useEffect, useState } from 'react'
import { Container, ProductsInfo, DetailsButton } from './styles'

export default function CartProductItem({ data }) {
    const [title, setTitle] = useState('')

    const oneLineTitle = () => {
        let productNames = data.items.map(item => item.title.trim(' '))
        setTitle(productNames.join(', '))
    }

    useEffect(() => {
        oneLineTitle()
    }, [])

    return (
        <Container>
            <ProductsInfo>
                <ProductsInfo.Title
                    numberOfLines={3}
                >
                    {title}
                </ProductsInfo.Title>
                <ProductsInfo.Area>
                    <ProductsInfo.Text>Status: </ProductsInfo.Text>
                    <ProductsInfo.Value>{data.status}</ProductsInfo.Value>
                </ProductsInfo.Area>
                <ProductsInfo.Area>
                    <ProductsInfo.Text>Valor total: </ProductsInfo.Text>
                    <ProductsInfo.Value>{'$' + data.orderPrice}</ProductsInfo.Value>
                </ProductsInfo.Area>
                <DetailsButton>
                    <DetailsButton.Button onPress={() => alert('Ops, ainda não implementado')}>
                        <DetailsButton.Text>
                            DETALHES
                        </DetailsButton.Text>
                    </DetailsButton.Button>
                </DetailsButton>
            </ProductsInfo>
        </Container>
    )
}
