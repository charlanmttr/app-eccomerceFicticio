import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color: #bfd9ff;
`;

export const MainArea = styled.View`
    flex: 1;
    margin: 30px;
    background-color: #FFF;
    border-radius: 7px;
`;

export const Information = styled.Text`
    font-size: 17px;
`;

Information.Area = styled.View`
    flex-direction: column;
    padding: 10px 13px;
`

Information.Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px ;
    color: #0068ff;
`;
