import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { Container, MainContainer, TitleArea, ButtonArea, BackButton, Title, InputArea, LoginArea } from './styles'

import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

export default function Login({ navigation }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

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
                    <CustomInput
                        icon="lock"
                        placeholder="Digite sua senha"
                        value={password}
                        valueChange={setPassword}
                        password
                    />
                </InputArea>
                <InputArea>
                    <CustomInput
                        icon="lock"
                        placeholder="Confirme sua senha"
                        value={confirmPassword}
                        valueChange={setConfirmPassword}
                        password
                    />
                </InputArea>
                <LoginArea>
                    <CustomButton
                        text="Registrar"
                        // icon="user-plus"
                        action={() => alert('Cadastrar usuario')}
                    />
                </LoginArea>
            </MainContainer>
        </Container>
    )
}
