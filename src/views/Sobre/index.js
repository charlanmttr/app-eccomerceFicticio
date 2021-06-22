import React from 'react'
import { Container, Information, MainArea, Image } from './styles'

import Header from '../../components/Header'

export default function Sobre({ navigation }) {
    return (
        <>
            <Header navigation={navigation} screenName="Sobre" />
            <Container>
                <MainArea>
                    <Information.Area>
                        <Information.Title>
                            Criadores
                        </Information.Title>
                        <Image.Area>
                            <Image
                                resizeMode="contain"
                                source={require('../../assets/img/charlan-img-resize.jpg')}
                            />
                        </Image.Area>
                        <Information>
                            {'\t\t\t'}Criado por Charlan Matter para a disciplina de Tópicos Especiais pelo curso de Ciências da Computação na faculdade IMED.
                        </Information>
                    </Information.Area>
                </MainArea>
            </Container>
        </>
    )
}
