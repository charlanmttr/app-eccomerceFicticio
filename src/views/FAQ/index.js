import React from 'react'
import { Container, Information, MainArea } from './styles'

import Header from '../../components/Header'

export default function Faq({ navigation }) {
    return (
        <>
            <Header navigation={navigation} screenName="FAQ" />
            <Container>
                <MainArea>
                    <Information.Area>
                        <Information.Title>
                            Homepage
                        </Information.Title>
                        <Information>
                            {'\t\t\t'}Mostra os produtos cadastrados na API. Ao clicar no produto, abrirá um modal com informaçoes do
                            pedido e um seletor de quantidade. Lá, o produto poderá ser adicionado ao carrinho.
                        </Information>
                    </Information.Area>
                    <Information.Area>
                        <Information.Title>
                            Carrinho
                        </Information.Title>
                        <Information>
                            {'\t\t\t'}Mostra uma lista de produtos adicionados no Carrinho de Compras. Esta lista fica salva na memória do celular e pode ser acessada ao reentrar no app.
                        </Information>
                        <Information>
                            {'\t\t\t'}Nesta tela você poderá alterar a quantidade dos produtos, remover um produto do carrinho, limpar o carrinho e finalizar o pedido.
                        </Information>
                    </Information.Area>
                    <Information.Area>
                        <Information.Title>
                            Pedidos
                        </Information.Title>
                        <Information>
                            {'\t\t\t'}Mostra uma lista de pedidos que foram finalizados pelo usuário ativo. Até o momento só estão sendo listadas.
                        </Information>
                    </Information.Area>
                </MainArea>
            </Container>
        </>
    )
}
