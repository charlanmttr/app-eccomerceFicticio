import React, { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import * as ProductsAction from '../../services/actions/productsAction'

import { Container, ProductList, Modal, TextIntroArea } from './styles.js'

import ProductItem from '../../components/ProductItem'
import ProductModal from '../../components/ProductModal'
import Header from '../../components/Header'

export default function Homepage({ navigation }) {
    const dispatch = useDispatch()
    const user = useSelector(store => store.login)
    const products = useSelector(store => store.products)

    const [productInfo, setProductInfo] = useState({})
    const [modalVisible, setModalVisible] = useState(false)
    const [loading, setLoading] = useState(true)

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
            <Header navigation={navigation} firstName={user.firstName} />
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
                            <TextIntroArea>
                                <TextIntroArea.Text>Alguns produtos que achamos que podem te interessar:</TextIntroArea.Text>
                            </TextIntroArea>
                            <ProductList
                                data={products}
                                renderItem={({ item }) => <ProductItem data={item} openAction={handleModal} />}
                                keyExtractor={item => String(item.id)}
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
                                data={productInfo}
                            />
                        </Modal>
                    </>
            }
        </>
    )
}