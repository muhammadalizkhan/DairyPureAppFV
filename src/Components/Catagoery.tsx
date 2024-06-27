import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';
import { category } from '../Data/data';

const Catagoery = () => {
  const renderProducts = () => {
    const rowProducts = category.slice(0, productsPerRow);
    const rowElements = rowProducts.map((product) => (
      <View style={styles.product} key={product.id}>
        <Image style={styles.productImage} source={product.image} />
        <Text style={styles.productName}>{product.name}</Text>
      </View>
    ));

    return (
      <View style={styles.productsContainer}>
        {rowElements}
      </View>
    );
  };

  const productsPerRow = 14;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Category</Text>
      <ScrollView 
        horizontal
        contentContainerStyle={styles.scrollContainer}
        showsHorizontalScrollIndicator={false}
      >
        {renderProducts()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#49243E',
    marginLeft: 10,
  },
  scrollContainer: {
    flexDirection: 'column',
  },
  productsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  product: {
    alignItems: 'center',
    margin: 10,
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
    color: '#49243E',    
  },
});

export default Catagoery;
