import React from 'react'
import { LoginButtonArea, LoginButton, LoginText } from './styles'
import { Feather } from '@expo/vector-icons'

export default function CustomButton({ text, icon, action }) {
    return (
        <LoginButtonArea>
            <LoginButton onPress={action}>
                {icon &&
                    <Feather
                        name={icon}
                        size={24}
                        color="#000"
                    />
                }
                <LoginText>{text}</LoginText>
            </LoginButton>
        </LoginButtonArea>
    )
}
