import React, { useState } from 'react'
import { CheckBox } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { MainContainer, Title, InputArea, RegisterArea, RegisterText, RegisterButtonArea, CheckBoxArea, CheckboxText } from './styles'

import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSelected, setSelection] = useState(false)

    return (
        <LinearGradient
            colors={['#0999ab', '#0068ff']}
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <MainContainer>
                <Title>Login</Title>
                <InputArea>
                    <CustomInput
                        icon="mail"
                        placeholder="Digite seu email"
                        value={email}
                        valueChange={setEmail}
                        email
                    />
                </InputArea>
                <InputArea>
                    <CustomInput
                        icon="lock"
                        placeholder="Digite sua senha"
                        value={password}
                        valueChange={setPassword}
                        password
                    />
                </InputArea>
                <CheckBoxArea>
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        tintColors={{ true: '#fffffc' }}
                    />
                    <CheckboxText>Mantenha-me conectado</CheckboxText>
                </CheckBoxArea>
                <RegisterArea>
                    <RegisterText>Não é cadastrado?</RegisterText>
                    <RegisterButtonArea onPress={() => navigation.navigate('CadastroUsuario')}>
                        <RegisterText
                            style={{ fontWeight: 'bold' }}
                        >
                            Registre-se agora.
                        </RegisterText>
                    </RegisterButtonArea>
                </RegisterArea>
                <CustomButton
                    text="Login"
                    // icon="log-in"
                    action={() => navigation.navigate('AppDrawer')}
                />
            </MainContainer>
        </LinearGradient>
    )
}
