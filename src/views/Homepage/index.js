import React, { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'

import api from '../../utils/api'
import ProductItem from '../../components/ProductItem'
import ProductModal from '../../components/ProductModal'
import Header from '../../components/Header'

import { Container, ProductList, Modal, TextIntroArea } from './styles.js'

export default function Homepage({ navigation }) {
    const [productList, setProductList] = useState([])
    const [productInfo, setProductInfo] = useState({})
    const [modalVisible, setModalVisible] = useState(false)
    const [loading, setLoading] = useState()

    const handleModal = (product) => {
        setProductInfo(product)
        setModalVisible(true)
    }

    const getProducts = async () => {
        setLoading(true)
        const response = await api.get('/products')
            .then(res => {
                return res.data
            }).catch(err => console.log(err))
        setProductList(response)
        setLoading(false)
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            <Header navigation={navigation} />
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
                                data={productList}
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