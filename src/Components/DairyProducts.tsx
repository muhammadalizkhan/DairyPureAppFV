import React from 'react'
import { StyleSheet, View, Image, Text, FlatList, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { products, Product } from '../Data/data'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
const DairyProducts: React.FC = () => {
    const renderProduct = ({ item }: { item: Product }) => (
        <View style={styles.product}>
            <Image style={styles.productImage} source={item.image} />
            <Text style={styles.productName}>{item.name}</Text>
        </View>
    );
    return (
                <ScrollView>
                   {products.map((product) => (
                    <View key={product.id} style={styles.CattelProducts}>
                        <View style={styles.ProductsDetails}>
                            <Text style={styles.ProductName}>{product.name}</Text>
                            <Text>{product.location}</Text>
                            <Text>{product.catagoery}</Text>
                            <Text>from {product.price}</Text>
                        </View>
                        <View>
                            <Image
                                source={product.image}
                                style={styles.ProductImage}
                            />
                        </View>
                        <View style={styles.IconDiv}>
                        <FontAwesomeIcon
                            icon={faPlus}
                            size={15}
                            color='#49243E'
                        />
                        </View>
                    </View>
                ))}
            </ScrollView>    )
}

export default DairyProducts

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
        bottom: 8,
        right: 8,
        padding: 8,
        borderRadius: 50,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      ProductImage: {
        width: 90,
        height: 90,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
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