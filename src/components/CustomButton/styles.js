import styled from 'styled-components/native'

export const Button = styled.TouchableOpacity`
    background-color: #FFF;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    height: 38px;
    width: 60%;
`;

Button.Area = styled.View`
    justify-content: center;
    align-items: center;
`;

Button.Text = styled.Text`
    padding-left: 10px;
    color: #000;
    font-weight: bold;
    font-size: 22px;
`;
