import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color: #bfd9ff;
`;

export const OrdersList = styled.FlatList`
    margin: 0 25px;
`;

export const TextIntroArea = styled.View`
    margin: 15px 25px;
`;

TextIntroArea.Text = styled.Text`
    font-size: 17px;
    font-weight: bold;
`;