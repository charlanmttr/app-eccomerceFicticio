import styled from 'styled-components/native'

export const PasswordInput = styled.TextInput`
    flex: 1;
    height: 40px;
    color: #000000;
    background-color: #FFF;
    padding-left: 5px;
    font-size: 18px;
`;

PasswordInput.Area = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const IconArea = styled.View`
    padding: 0 10px;
    justify-content: center;
    align-items: center;
    height: 40px;
    background-color: #FFF;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
`;

IconArea.Eye = styled.TouchableOpacity`
    padding: 0 10px;
    justify-content: center;
    align-items: center;
    height: 40px;
    background-color: #FFF;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
`;

