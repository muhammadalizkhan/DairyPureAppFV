import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faClockRotateLeft, faHeart, faMagnifyingGlass, faPlus, faStar, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Product, QuantityPrice, products } from '../Data/data';

const BarkeryInfo = ({ navigation }: any) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedQuantity, setSelectedQuantity] = useState<QuantityPrice | null>(null);
  const [cart, setCart] = useState<{ product: Product, quantityPrice: QuantityPrice }[]>([]);

  const handleAddToCart = (product: Product) => {
    setSelectedProduct(product);
    setSelectedQuantity(product.quantities[0]);
  };
  const addToCart = () => {
    if (selectedProduct && selectedQuantity) {
      setCart([...cart, { product: selectedProduct, quantityPrice: selectedQuantity }]);
      setSelectedProduct(null);
      setSelectedQuantity(null);
    }
  };
  const navigateToCart = () => {
    navigation.navigate('Cart', { cart });
  };
  
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
            <FontAwesomeIcon icon={faChevronLeft} size={25} style={styles.icon} />
          </TouchableOpacity>
          <View style={styles.rightIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <FontAwesomeIcon icon={faMagnifyingGlass} size={25} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <FontAwesomeIcon icon={faHeart} size={25} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToCart} style={styles.iconButton}>
              <FontAwesomeIcon icon={faShoppingCart} size={25} style={styles.icon} />
              {cart.length > 0 && <View style={styles.cartBadge}><Text style={styles.cartBadgeText}>{cart.length}</Text></View>}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.headerBanner}>
          <Text style={styles.headerTitle}>Cakes and Bakes - Lahore</Text>
        </View>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>2.7km Away | PKR 129.00 Delivery</Text>
          <Text style={styles.info}>More info</Text>
        </View>
        <View style={styles.leftTexts}>
          <Text style={styles.service}>Rs. 500.00 Minimum | Service fee applies</Text>
        </View>
        <View style={styles.rating}>
          <View style={styles.review}>
            <Text style={styles.service}>500+ Rating 4.5 </Text>
            <FontAwesomeIcon icon={faStar} style={styles.starIcon} />
          </View>
          <Text style={styles.info}>See All Reviews</Text>
        </View>
        <View style={styles.deliveryTime}>
          <FontAwesomeIcon style={styles.deliveryIcon} icon={faClockRotateLeft} />
          <Text style={styles.deliveryText}>Delivery: 45-65 min</Text>
        </View>
        <BarkeryProducts navigation={navigation} handleAddToCart={handleAddToCart} />
        <OtherProducts handleAddToCart={handleAddToCart} />
      </ScrollView>
      {selectedProduct && (
        <View style={styles.cartSection}>
          <Text style={styles.cartTitle}>Add {selectedProduct.name} to Cart</Text>
          <View style={styles.quantitySelector}>
            {selectedProduct.quantities.map((item) => (
              <TouchableOpacity
                key={item.quantity}
                style={[
                  styles.quantityButton,
                  selectedQuantity?.quantity === item.quantity && styles.selectedQuantityButton,
                ]}
                onPress={() => setSelectedQuantity(item)}
              >
                <Text style={styles.quantityText}>{item.quantity}</Text>
                <Text style={styles.quantityText}>{item.eachprice}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity
            style={styles.addButton}
            onPress={addToCart}
          >
            <Text style={styles.addButtonText}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => {
              setSelectedProduct(null);
              setSelectedQuantity(null);
            }}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const BarkeryProducts = ({ handleAddToCart }: any) => {
  return (
    <View style={styles.productsContainer}>
      {products.slice(0, 4).map((product) => (
        <View key={product.id} style={styles.productContainer}>
          <View style={styles.imageContainer}>
            <Image source={product.image} style={styles.image} />
          </View>
          <View style={styles.productDetails}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>Starting From {product.price}</Text>
            <Text style={styles.productCategory}>{product.catagoery}</Text>
          </View>
          <TouchableOpacity
            style={styles.cartIconContainer}
            onPress={() => handleAddToCart(product)}
          >
            <FontAwesomeIcon icon={faPlus} style={styles.cartIcon} />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  )
}

const OtherProducts = ({ handleAddToCart }: any) => {
  return (
    <View style={styles.otherProductsContainer}>
      {products.slice(5, 11).map((product) => (
        <View key={product.id} style={styles.otherProductContainer}>
          <Image source={product.image} style={styles.otherProductImage} />
          <View style={styles.otherProductOverlay}>
            <Text style={styles.otherProductName}>{product.name}</Text>
            <Text style={styles.otherProductPrice}>1 KG {product.price}</Text>
          </View>
          <TouchableOpacity
            style={styles.otherCartIconContainer}
            onPress={() => handleAddToCart(product)}
          >
            <FontAwesomeIcon icon={faPlus} style={styles.cartIcon} />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  scrollContent: {
    paddingBottom: 80,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    elevation: 2,
  },
  iconButton: {
    padding: 10,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#333',
  },
  cartBadge: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: '#ff6347',
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  cartBadgeText: {
    color: '#fff',
    fontSize: 12,
  },
  headerBanner: {
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 16,
    color: '#555',
  },
  info: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a73e8',
  },
  leftTexts: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  service: {
    fontSize: 14,
    color: '#555',
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  review: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    color: '#ffb400',
    marginLeft: 5,
  },
  deliveryTime: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  deliveryIcon: {
    color: '#ff6347',
  },
  deliveryText: {
    fontSize: 16,
    color: '#555',
    marginLeft: 10,
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 15,
  },
  productContainer: {
    width: '47%',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  imageContainer: {
    width: '100%',
    height: 150,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  productDetails: {
    padding: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  productCategory: {
    fontSize: 14,
    color: '#888',
  },
  cartIconContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#ff6347',
    borderRadius: 50,
    padding: 8,
  },
  cartIcon: {
    color: '#fff',
  },
  otherProductsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 15,
  },
  otherProductContainer: {
    width: '47%',
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  otherProductImage: {
    width: '100%',
    height: 150,
  },
  otherProductOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  otherProductName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  otherProductPrice: {
    fontSize: 14,
    color: '#fff',
  },
  otherCartIconContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#ff6347',
    borderRadius: 50,
    padding: 8,
  },
  cartSection: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  cartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  quantitySelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  quantityButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  selectedQuantityButton: {
    backgroundColor: '#ff6347',
  },
  quantityText: {
    color: '#333',
  },
  addButton: {
    backgroundColor: '#ff6347',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cancelButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#ff6347',
  },
});

export default BarkeryInfo
