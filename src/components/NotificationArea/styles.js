import styled from "styled-components/native"

export const Container = styled.View`
    background-color: #0068ff;
    flex-direction: row;
    align-items: center;
    padding: 15px 20px;
    border-radius: 5px;
    position: absolute;
    bottom: 25px;
    left: 20px;  
    right: 20px;
`;

export const NotificationArea = styled.View`
    flex: 1;
`;

NotificationArea.Text = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: #FFF;
`;

export const ButtonArea = styled.TouchableOpacity`
    background-color: #FFF;
    border-radius: 5px;
    padding: 3px;
    margin-left: 5px;
`;