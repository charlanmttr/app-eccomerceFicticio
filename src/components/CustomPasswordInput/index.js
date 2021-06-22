import React, { useState } from 'react'
import { IconArea, PasswordInput } from './styles'
import { Feather } from '@expo/vector-icons'

export default function CustomPasswordInput({ icon, placeholder, valueChange, value }) {
    const [isVisible, setVisible] = useState(true);

    return (
        <PasswordInput.Area>
            <IconArea>
                <Feather
                    name={icon}
                    size={22}
                    color="#000000"
                />
            </IconArea>
            <PasswordInput
                placeholder={placeholder}
                placeholderTextColor="gray"
                value={value}
                onChangeText={valueChange}
                secureTextEntry={isVisible}
                autoCapitalize='none'
                autoCorrect={false}
                autoCompleteType='off'
            />
            <IconArea.Eye
                onPress={() => setVisible(!isVisible)}
                activeOpacity={0.9}
            >
                <Feather
                    name={isVisible ? 'eye' : 'eye-off'}
                    size={18}
                    color="#000000"
                />
            </IconArea.Eye>
        </PasswordInput.Area>
    );
}


