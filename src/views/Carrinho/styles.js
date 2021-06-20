import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color: #bfd9ff;
`;

export const EmptyCartArea = styled.View`
    background-color: #FFF;
    margin: 15px 25px;
    border-radius: 5px;
    padding: 10px;
    align-items: center;
`;

EmptyCartArea.Text = styled.Text`
    font-size: 17px;
`;

export const TextIntroArea = styled.View`
    margin: 15px 25px;
`;

TextIntroArea.Text = styled.Text`
    font-size: 17px;
    font-weight: bold;
`;

export const Cart = styled.FlatList`
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

