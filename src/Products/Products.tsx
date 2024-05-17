import React from 'react';
import { StyleSheet, View, Image, Text, FlatList, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { products, Product } from '../Data/data';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faHeart, faMagnifyingGlass, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import FarmNearYou from '../Components/FarmNearYou';

const Products: React.FC = () => {
  const renderProduct = ({ item }: { item: Product }) => (
    <View style={styles.product}>
      <Image style={styles.productImage} source={item.image} />
      <Text style={styles.productName}>{item.name}</Text>
    </View>
  );
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.Maincontainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faChevronLeft} size={25} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.Title}>Our Dairy Products</Text>
          <View style={styles.rightIcons}>
            <FontAwesomeIcon icon={faMagnifyingGlass} size={25} style={styles.icon} />
            <FontAwesomeIcon icon={faHeart} size={25} style={styles.icon} />
          </View>
        </View>
        <Text style={styles.Catteltitle}>Cattel Farm Product</Text>
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
            <FontAwesomeIcon
              icon={faPlus}
              size={25}
              color='#49243E'
              style={styles.IconDiv}
            />
          </View>
        ))}
        <Text style={styles.title}>Product</Text>
        <FlatList
          data={products}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
          />
        </View>
       <FarmNearYou />
      </ScrollView>
      
    </SafeAreaView>
  )
}

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
  AddtoCartText:{
    textAlign: 'center',
    fontSize: 10,
    color: '#49243E',
    fontWeight: 'bold',
  },
  AddToCart:{
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
  IconDiv:{
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

export default Products;
