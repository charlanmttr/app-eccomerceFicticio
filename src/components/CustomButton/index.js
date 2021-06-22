import React from 'react'
import { Button } from './styles'
import { Feather } from '@expo/vector-icons'

export default function CustomButton({ text, icon, action }) {
    return (
        <Button.Area>
            <Button onPress={action}>
                {icon &&
                    <Feather
                        name={icon}
                        size={24}
                        color="#000"
                    />
                }
                <Button.Text>{text}</Button.Text>
            </Button>
        </Button.Area>
    )
}
