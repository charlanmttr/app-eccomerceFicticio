import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { Container, MainContainer, TitleArea, ButtonArea, BackButton, Title, InputArea, LoginArea } from './styles'

import * as LoginAction from '../../services/actions/loginAction'
import { useDispatch } from 'react-redux'

import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import CustomPasswordInput from '../../components/CustomPasswordInput';

export default function CadastroUsuario({ navigation }) {
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const validateData = () => {
        if(name === "") throw "O campo nome deve ser preenchido"
        if(email === "") throw "O campo email deve ser preenchido"
        if(password === "") throw "O campo senha deve ser preenchido"
        if(password !== confirmPassword) throw "As senhas devem ser idênticas"
    }

    const userRegisterAndLogin = async () => {
        try {
            validateData()
            
            await dispatch(LoginAction.registerNewUser(email, password, name))
            navigation.replace("AppDrawer")
        } catch (error) {
            alert(error)
        }
    }

    return (
        <Container>
            <MainContainer>
                <TitleArea>
                    <ButtonArea>
                        <BackButton onPress={() => navigation.goBack()}>
                            <Feather
                                name="arrow-left"
                                size={25}
                                color="#000"
                            />
                        </BackButton>
                    </ButtonArea>
                    <Title>Cadastrar usuário</Title>
                </TitleArea>
                <InputArea>
                    <CustomInput
                        icon="user"
                        placeholder="Digite seu nome completo"
                        value={name}
                        valueChange={setName}
                    />
                </InputArea>
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
                <InputArea>
                    <CustomPasswordInput
                        icon="lock"
                        placeholder="Confirme sua senha"
                        value={confirmPassword}
                        valueChange={setConfirmPassword}
                    />
                </InputArea>
                <LoginArea>
                    <CustomButton
                        text="Registrar"
                        // icon="user-plus"
                        action={() => userRegisterAndLogin()}
                    />
                </LoginArea>
            </MainContainer>
        </Container>
    )
}
