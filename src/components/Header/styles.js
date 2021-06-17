import styled from 'styled-components/native'

/*
    import { StatusBar } from 'react-native';
    const statusBarHeight = StatusBar.currentHeight;
    padding-top: ${statusBarHeight + 'px'};
*/

export const MenuIcon = styled.TouchableOpacity`
    padding: 15px;
`;

export const HeaderArea = styled.View`
    height: 70px;
    background-color: #0068ff; 
    flex-direction: row;
    align-items: center;
`;

export const HeaderText = styled.Text`
    font-size: 20px;
`;

HeaderText.Name = styled.Text`
   font-weight: bold;
   font-size: 20px;
`