import React from 'react'
import { IconArea, DefaultInput } from './styles'
import { Feather } from '@expo/vector-icons'

export default function CustomInput({ icon, placeholder, valueChange, value, email, capitalize }) {
    return (
        <DefaultInput.Area>
            <IconArea>
                <Feather
                    name={icon}
                    size={22}
                    color="#000000"
                />
            </IconArea>
            <DefaultInput
                placeholder={placeholder}
                placeholderTextColor="gray"
                value={value}
                onChangeText={valueChange}
                keyboardType={email ? 'email-address' : 'default'}
                autoCapitalize={capitalize || 'none' }
            />
        </DefaultInput.Area>
    )
}


