import { StyleSheet, View, Image, Text, FlatList } from 'react-native'
import React from 'react'
import { products, Product } from '../Data/data'


const AppProducts: React.FC = () => {
    const renderProduct = ({ item }: { item: Product }) => (
        <View style={styles.product}>
            <Image style={styles.productImage} source={item.image} />
            <Text style={styles.productName}>{item.name}</Text>
        </View>
    );
    return (
            <View>
                <Text style={styles.title}>Product</Text>
            <FlatList
            data={products}
            renderItem={renderProduct}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer} />
            </View>
    )
}

export default AppProducts

const styles = StyleSheet.create({
    CattelProducts: {
        height: 100,
        padding: 5,
        width: '95%',
        borderRadius: 3,
        backgroundColor: '#f3f3f3',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    AddtoCartText: {
        textAlign: 'center',
        fontSize: 10,
        color: '#49243E',
        fontWeight: 'bold',
    },
    AddToCart: {
        marginTop: 5,
    },
    ProductsDetails: {
        marginLeft: 10,
    },
    ProductName: {
        color: '#49243E',
        fontWeight: 'bold',
        fontSize: 20,
    },
    Catteltitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#49243E',
        marginLeft: 10,
        marginTop: 5,
    },
    IconDiv: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        padding: 10,
        borderRadius: 50,
        backgroundColor: 'white',
        alignItems: 'center',

    },
    ProductImage: {
        width: 90,
        height: 90,
        borderRadius: 8,
    },
    Maincontainer: {
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#49243E',
        marginLeft: 10,
    },
    scrollContainer: {
        alignItems: 'center',
    },
    product: {
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 10,
    },
    productImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    productName: {
        marginTop: 5,
        fontSize: 16,
        fontWeight: 'bold',
    },
    Title: {
        fontSize: 20,
        color: 'black',
        fontFamily: 'system-ui',
        fontWeight: 'bold',
        position: 'absolute',
        left: 50,
        right: 50,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    icon: {
        color: 'black',
        marginHorizontal: 5,
    },
    rightIcons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});