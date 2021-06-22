import styled from 'styled-components/native'

export const Container = styled.View`
    background-color: #FFF;
    flex-direction: row;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 8px;
`;

export const ProductsInfo = styled.View`
    flex: 1;
    padding-left: 10px;
`;

ProductsInfo.Area = styled.View`
    flex-direction: row;
    align-items: center;
    height: 25px;
`;

ProductsInfo.Text = styled.Text`
    font-size: 14px;
    font-weight: bold;
`;

ProductsInfo.Title = styled.Text`
    font-size: 16px;
    font-weight: bold;
`

ProductsInfo.Value = styled.Text`
    font-size: 14px;
`;

export const DetailsButton = styled.View`
    align-items: flex-end;
`;

DetailsButton.Button = styled.TouchableOpacity`
    width: 35%;
    height: 35px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    background-color: #0068ff;
`;

DetailsButton.Text = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #FFF;
`;


