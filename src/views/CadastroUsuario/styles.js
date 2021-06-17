import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #257fff; /* #257fff  #0999ab*/
`;

export const MainContainer = styled.View`
    width: 80%;
    height: 50%;
`;

export const TitleArea = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
`;

export const ButtonArea = styled.View`
    padding: 5px;
`;

export const BackButton = styled.TouchableOpacity`
    border-radius: 7px;
    background-color: white;
    padding: 0 5px;
`;

export const Title = styled.Text`
    text-align: left;
    font-weight: bold;
    font-size: 25px;     
    color: #FFF;  
    margin-left: 8px;
    padding: 10px 0;
`; 

export const InputArea = styled.View`
    margin: 10px 0;
`;

export const LoginArea = styled.View`
    margin: 20px;
`;