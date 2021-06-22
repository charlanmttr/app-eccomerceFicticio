import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color: #bfd9ff;
`;

export const CartList = styled.FlatList`
    margin: 0 25px;
`;

export const ButtonArea = styled.View`
    background-color: #bfd9ff;
    height: 10%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 25px;
`;

ButtonArea.Button = styled.TouchableOpacity`
    background-color: #FFF;
    height: 40px;
    justify-content: center;
    align-items: center;
    width: 47%;
    border-radius: 5px;
`;

ButtonArea.Text = styled.Text`
    font-size: 18px;
    font-weight: bold;
    text-align: center;
`;

