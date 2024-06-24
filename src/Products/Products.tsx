import React from 'react';
import { StyleSheet, View, Image, Text, FlatList, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { products, Product } from '../Data/data';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faHeart, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
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
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faChevronLeft} size={25} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Our Dairy Products</Text>
          <View style={styles.rightIcons}>
            <FontAwesomeIcon icon={faMagnifyingGlass} size={25} style={styles.icon} />
            <FontAwesomeIcon icon={faHeart} size={25} style={styles.icon} />
          </View>
        </View>
        <Text style={styles.sectionTitle}>Cattle Farm Products</Text>
        {products.map((product) => (
          <View key={product.id} style={styles.productCard}>
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productInfo}>{product.location}</Text>
              <Text style={styles.productInfo}>{product.catagoery}</Text>
              <Text style={styles.productPrice}>from {product.price}</Text>
            </View>
            <Image source={product.image} style={styles.productImageCard} />
            <TouchableOpacity style={styles.addButton}>
              <FontAwesomeIcon icon={faPlus} size={20} color='#fff' />
            </TouchableOpacity>
          </View>
        ))}
        <Text style={styles.sectionTitle}>Products</Text>
        <FlatList
          data={products}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScroll}
        />
        <FarmNearYou />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  icon: {
    color: '#333',
    marginHorizontal: 10,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#49243E',
    marginLeft: 10,
    marginTop: 10,
  },
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
    elevation: 1,
  },
  productDetails: {
    flex: 1,
    paddingRight: 10,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  productInfo: {
    fontSize: 14,
    color: '#666',
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#49243E',
    marginTop: 5,
  },
  productImageCard: {
    width: 90,
    height: 90,
    borderRadius: 8,
  },
  addButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#49243E',
    borderRadius: 50,
    padding: 8,
    elevation: 2,
  },
  horizontalScroll: {
    paddingHorizontal: 10,
    paddingBottom: 10,
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
});

export default Products;
