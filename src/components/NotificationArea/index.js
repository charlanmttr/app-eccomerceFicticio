import React from 'react'
import { Container, NotificationArea, ButtonArea } from './styles'
import { Feather } from '@expo/vector-icons'

export default function Notification({ text, closeAction }) {
    return (
        <Container>
            <NotificationArea>
                <NotificationArea.Text>{text}</NotificationArea.Text>
            </NotificationArea>
            <ButtonArea
                onPress={closeAction}
            >
                <Feather
                    name="x"
                    size={25}
                    color="#0068ff"
                />
            </ButtonArea>
        </Container>
    )
}
