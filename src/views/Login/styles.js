import styled from 'styled-components/native'

export const Background = styled.ImageBackground`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const MainContainer = styled.View`
    width: 80%;
    height: 50%;
`;

export const Title = styled.Text`
    text-align: left;
    font-weight: bold;
    font-size: 25px;     
    padding: 10px 0;
    color: #FFF;
`;

export const CheckBoxArea = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const CheckboxText = styled.Text`
    font-size: 15px;
`;

export const InputArea = styled.View`
    margin: 8px 0;
`;

export const RegisterArea = styled.View`
    flex-direction: row;
    margin-top: 35px;
    margin-bottom: 15px;
    justify-content: center;
    align-items: center;
`;

export const RegisterButtonArea = styled.TouchableOpacity`
    padding-left: 5px;
    font-weight: bold;
`;

export const RegisterText = styled.Text`
    color: #000000;
    font-size: 14px;
`;


