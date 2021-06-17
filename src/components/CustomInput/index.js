import React, { useState } from 'react'
import { DefaultInputArea, IconArea, DefaultInput, PasswordInputArea, PasswordIconArea, PasswordInput } from './styles'
import { Feather } from '@expo/vector-icons'

export default function CustomInput({ icon, placeholder, valueChange, value, password, email }) {
    const [isVisible, setVisible] = useState(true);

    return (
        <>
            {
                !password ?
                    < DefaultInputArea >
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
                        />
                    </DefaultInputArea>
                    :
                    <PasswordInputArea>
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
                        />
                        <PasswordIconArea
                            onPress={() => setVisible(!isVisible)}
                            activeOpacity={0.9}
                        >
                            <Feather
                                name={isVisible ? 'eye' : 'eye-off'}
                                size={18}
                                color="#000000"
                            />
                        </PasswordIconArea>
                    </PasswordInputArea>
            }
        </>
    );
}


