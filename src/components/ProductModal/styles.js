import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
`;

export const ModalArea = styled.View`
    flex: 1;
    background-color: #257fff; /*#bfd9ff*/;  
    border-top-right-radius: 20px;
`;

export const ModalHeader = styled.View`
    padding: 20px;
    height: 60px;
    justify-content: center;
    align-items: flex-end;
`;

export const CloseButton = styled.TouchableOpacity`
`;

export const ProductArea = styled.View`
    flex: 2;
    padding: 20px;
`;

ProductArea.Name = styled.Text`
    font-size: 23px;
    font-weight: bold;
    margin-bottom: 10px;
`;
ProductArea.Price = styled.Text`
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
`;

ProductArea.Description = styled.Text`
    font-size: 17px;
    margin-bottom: 10px;
`;

export const ProductImage = styled.View`
    width: 100%;
    height: 50%;
    align-items: center;
    justify-content: center;
`;

ProductImage.Area = styled.View`
    width: 70%;
    height: 100%;
    background-color: #FFF;
    border-radius: 20px;
    padding: 10px;
`;

ProductImage.Image = styled.Image`
    width: 100%;
    height: 100%; 
`;

export const ButtonArea = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-evenly;
    align-content: center;
`;

export const BuyButton = styled.TouchableOpacity`
    background-color: #FFF;
    height: 40px;
    justify-content: center;
    align-items: center;
    padding: 5px 20px;
    border-radius: 5px;
`;

BuyButton.Text = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;

export const CancelButton = styled.TouchableOpacity`
    background-color: transparent;
    height: 40px;
    justify-content: center;
    align-items: center;
    padding: 5px 20px;
    border-radius: 5px;
    border-width: 1px;
    border-color: #FFF;
`;

CancelButton.Text = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #FFF;
`;

export const QuantityButton = styled.View`
    flex-direction: row;
`

QuantityButton.Remove = styled.TouchableOpacity`
    background-color: #FFF;
    justify-content: center;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-right-width: 1px;
    border-right-color: gray;
    padding: 5px;
    height: 40px;
`;

QuantityButton.Add = styled.TouchableOpacity`
    background-color: #FFF;
    justify-content: center;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-left-width: 1px;
    border-left-color: gray;
    padding: 5px;
    height: 40px;
`;

QuantityButton.QuantityView = styled.View`
    background-color: #FFF;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 40px;
`;

QuantityButton.Text = styled.Text`
    font-size: 20px;
`;

