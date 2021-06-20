import styled from 'styled-components/native'

export const Container = styled.View`
    background-color: #FFF;
    flex-direction: row;
    padding: 10px;
    height: 140px;
    border-radius: 5px;
    margin-bottom: 5px;
`;

export const ProductImage = styled.View`
    background-color: #FFF;
    border-radius: 5px;
    width: 80px;
    padding-right: 10px;
`;

ProductImage.Image = styled.Image`
    width: 100%;
    height: 100%; 
`;

export const ProductsInfo = styled.View`
    flex: 1;
    padding-left: 10px;
    border-left-width: 1px;
    border-left-color: #bfd9ff;
`;

ProductsInfo.Area = styled.View`
    flex-direction: row;
    align-items: center;
    height: 25px;
`;

ProductsInfo.Text = styled.Text`
    font-size: 15px;
    font-weight: bold;
`;

ProductsInfo.Name = styled.Text`
    font-size: 18px;
    font-weight: bold;
`

ProductsInfo.Quantity = styled.Text`
    font-size: 15px;
`

ProductsInfo.QuantityInput = styled.TextInput`
    font-size: 15px;
    border-bottom-width: 2px;
    border-bottom-color: #bfd9ff;
    width: 25px;
    height: 25px;
    text-align: center;
    font-weight: bold;
`;

ProductsInfo.Price = styled.Text`
    font-size: 15px;
`

ProductsInfo.TotalPrice = styled.Text`
    font-size: 15px;
`

export const ButtonsArea = styled.View`
    width: 40px;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
`;

ButtonsArea.Button = styled.TouchableOpacity`
    background-color: #bfd9ff;
    margin: 3px;
    padding: 2px;
    border-radius: 5px;
`;


