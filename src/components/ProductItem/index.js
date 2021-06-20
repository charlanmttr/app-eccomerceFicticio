import React from 'react'
import { ProductArea, ImageArea, ProductInfoArea } from './styles'

export default function ProductItem({ data, openAction }) {
    return (
        <ProductArea
            onPress={() => openAction(data)}
        >
            <ImageArea>
                <ImageArea.Image
                    resizeMode="contain"
                    source={{ uri: data.image }}
                />
            </ImageArea>
            <ProductInfoArea>
                <ProductInfoArea.Name numberOfLines={2}>{data.title}</ProductInfoArea.Name>
                <ProductInfoArea.PriceArea>
                    <ProductInfoArea.PriceText>Price: </ProductInfoArea.PriceText>
                    <ProductInfoArea.Price>{'$' + data.price}</ProductInfoArea.Price>
                </ProductInfoArea.PriceArea>
            </ProductInfoArea>
        </ProductArea>
    )
}
