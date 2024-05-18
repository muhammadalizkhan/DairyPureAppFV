import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCartPlus, faChevronLeft, faClockRotateLeft, faHeart, faMagnifyingGlass, faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

const FarmInfo = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faChevronLeft} size={25} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.rightIcons}>
          <FontAwesomeIcon icon={faMagnifyingGlass} size={25} style={styles.icon} />
          <FontAwesomeIcon icon={faHeart} size={25} style={styles.icon} />
        </View>
      </View>
      <View style={styles.headerBanner}>
        <Text style={styles.headerTitle}>Verzon Diary Farm - Lahore</Text>
      </View>
      <View style={styles.headerContent}>
        <Text style={styles.headerText}>2.7km Away | PKR 129.00 Delivery</Text>
        <Text style={styles.info}>More info</Text>
      </View>
      <View style={styles.leftTexts}>
        <Text>Rs. 500.00 Minimum | Service fee applies</Text>
      </View>
      <View style={styles.rating}>
        <View style={styles.review}>
          <Text>500+ Rating 4.5 </Text>
          <FontAwesomeIcon icon={faStar} />
        </View>
        <Text style={styles.info}>See All Reviews</Text>
      </View>
      <View style={styles.deliverytime}>
        <FontAwesomeIcon style={styles.deliveryicon} icon={faClockRotateLeft} />
        <Text style={styles.deliverytext}>Delivery: 45-65 min</Text>
      </View>
      <FarmProducts navigation={navigation} />
    </View>
  )
}

const FarmProducts = ({ navigation }: any) => {
  return (
    <View>
        <View style={styles.productContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/Images/Milk.jpg')}
              style={styles.image}
            />
          </View>
          <View style={styles.productDetails}>
            <Text style={styles.productName}>Product Name</Text>
            <Text style={styles.productPrice}>$10.99</Text>
            <Text>Dairy Farm Organic Product</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <FontAwesomeIcon icon={faPlus} style={styles.cartIcon} />
          </TouchableOpacity>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  productContainer: {
    borderRadius: 10,
    marginTop: 20,
    marginHorizontal: 20,
    width: 150,
    height: 250,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  productDetails: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 5,
    color: 'black',
  },
  productPrice: {
    color: '#666',
  },
  cartIcon: {
    alignSelf: 'flex-end',
    margin: 10,
    color: '#007bff',
  },
  container: {
    width: '100%',
    paddingHorizontal: 7,
    marginTop: 5,
    backgroundColor: '#f3f3f3',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  headerBanner: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: '#49243E',
  },
  leftTexts: {
    marginLeft: 20,
  },
  headerText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  info: {
    color: '#49243E',
    fontWeight: 'bold',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#49243E',
    marginHorizontal: 10,
  },
  headerTitle: {
    fontSize: 20,
    color: '#49243E',
    marginLeft: 10,
  },
  review: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: '#49243E',
    marginTop: 10,
  },
  deliverytime: {
    width: '90%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  deliveryicon: {
    color: '#49243E',
  },
  deliverytext: {
    marginLeft: 10,
  }
});

export default FarmInfo;
