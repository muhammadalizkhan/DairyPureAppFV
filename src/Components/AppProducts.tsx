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
                <Text style={styles.title}>Products</Text>
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
    product: {
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 5,
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
    productImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    productName: {
        marginTop: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
});