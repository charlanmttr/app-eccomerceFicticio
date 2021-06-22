import styled from 'styled-components'

export const ProductArea = styled.TouchableOpacity`
    background-color: #FFF; /* rgba(0,104,255, 0.1); #bfd9ff */
    height: 110px;
    flex-direction: row;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 8px;
`;

export const ImageArea = styled.View`
    height: 100%;
    width: 100px;
    background-color: #FFF;
    border-radius: 5px;
    padding: 5px;
`;

ImageArea.Image = styled.Image`
    width: 100%;
    height: 100%; 
`;

export const ProductInfoArea = styled.View`
    flex: 1;
    justify-content: space-between;
    height: 100%;
    padding-left: 10px;
`;

ProductInfoArea.Name = styled.Text`
    font-weight: bold;
    color: #000;
    font-size: 18px;
`;

ProductInfoArea.PriceArea = styled.View`
    flex-direction: row;
    padding: 5px 0;
    align-items: center;
`;

ProductInfoArea.PriceText = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;

ProductInfoArea.Price = styled.Text`
    font-size: 16px;
`;

ProductInfoArea.Category = styled.Text``;

ProductInfoArea.Description = styled.Text``;


