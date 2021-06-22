import React, { useState, useEffect } from 'react'
import { CheckBox } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient'
import { MainContainer, Title, InputArea, RegisterArea, RegisterText, RegisterButtonArea, CheckBoxArea, CheckboxText } from './styles'

import * as LoginAction from '../../services/actions/loginAction'
import { useSelector, useDispatch } from 'react-redux'

import CustomInput from '../../components/CustomInput'
import CustomPasswordInput from '../../components/CustomPasswordInput';
import CustomButton from '../../components/CustomButton'

export default function Login({ navigation }) {
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSelected, setSelection] = useState(false)

    const userLogin = async () => {
        try {
            await dispatch(LoginAction.login(email, password, isSelected))

            navigation.replace("AppDrawer")
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        const getLoginData = async () => {
            let savedEmail = await AsyncStorage.getItem("@eccommerce.email")
            let savedPassword = await AsyncStorage.getItem("@eccommerce.password")

            if (savedEmail) {
                setEmail(savedEmail)
                setSelection(true)
            }
            if (savedPassword) setPassword(savedPassword)
        }
        getLoginData()

    }, [])

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
                    <CustomPasswordInput
                        icon="lock"
                        placeholder="Digite sua senha"
                        value={password}
                        valueChange={setPassword}
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
                    action={() => userLogin()}
                // action={() => navigation.navigate('AppDrawer')}
                />
            </MainContainer>
        </LinearGradient>
    )
}
