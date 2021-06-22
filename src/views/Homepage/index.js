import React, { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import * as ProductsAction from '../../services/actions/productsAction'

import { Container, ProductList, Modal } from './styles.js'

import ProductItem from '../../components/ProductItem'
import ProductModal from '../../components/ProductModal'
import Header from '../../components/Header'
import IntroductionText from '../../components/IntroductionText'
import NotificationArea from '../../components/NotificationArea'

export default function Homepage({ navigation }) {
    const dispatch = useDispatch()
    const products = useSelector(store => store.products)

    const [productInfo, setProductInfo] = useState({})
    const [modalVisible, setModalVisible] = useState(false)
    const [notificationVisible, setNotificationVisible] = useState(false)
    const [loading, setLoading] = useState(true)
    const [addedProduct, setAddedProduct] = useState('')

    const closeAfterBuy = (productName) => {
        setModalVisible(false)
        setAddedProduct(productName)
        setNotificationVisible(true)
        setTimeout(() => {
            setNotificationVisible(false)
            setAddedProduct('')
        }, 3000)
    }

    const handleModal = (product) => {
        setProductInfo(product)
        setModalVisible(true)
    }

    useEffect(() => {
        dispatch(ProductsAction.getProducts())
            .then(() => setLoading(false))
    }, [dispatch])

    return (
        <>
            <Header navigation={navigation} screenName="Homepage" />
            {
                loading
                    ?
                    <Container
                        aliginItems="center"
                        justifyContent="center"
                    >
                        <ActivityIndicator size="large" color="#0068ff" />
                    </Container>
                    :
                    <>
                        <Container>
                            <IntroductionText text="Alguns produtos que achamos que podem te interessar:" />
                            <ProductList
                                data={products}
                                renderItem={({ item }) => <ProductItem data={item} openAction={handleModal} />}
                                keyExtractor={item => String(item.id)}
                                showsVerticalScrollIndicator={false}
                            />
                        </Container>

                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            animationIn="slideInLeft"
                            animationOut="slideOutRight"
                        >
                            <ProductModal
                                closeAction={() => setModalVisible(false)}
                                closeAfterBuy={closeAfterBuy}
                                data={productInfo}
                            />
                        </Modal>

                        {notificationVisible &&
                            <NotificationArea
                                text={`O produto ${addedProduct} foi adicionado ao carrinho.`}
                                closeAction={() => setNotificationVisible(false)} />
                        }
                    </>
            }
        </>
    )
}