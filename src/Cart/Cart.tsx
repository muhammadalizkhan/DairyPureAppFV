import { SafeAreaView, StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft, faClockRotateLeft, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import StepIndicator from 'react-native-step-indicator'
import AppProducts from '../Components/AppProducts'

const Cart = ({navigation}: any) => {
  const labels = ["Menu", "Cart", "Checkout"];
  const customStyles = {
    stepIndicatorSize: 20,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 2,
    stepStrokeCurrentColor: '#49243E',
    stepStrokeWidth: 2,
    stepStrokeFinishedColor: '#49243E',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#49243E',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#49243E',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 12,
    currentStepIndicatorLabelFontSize: 12,
    stepIndicatorLabelCurrentColor: '#49243E',
    stepIndicatorLabelFinishedColor: '#49243E',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 15,
    currentStepLabelColor: '#49243E'
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <View>
            <FontAwesomeIcon icon={faChevronLeft} size={25} style={styles.icon} />
          </View>
          <View>
            <Text style={styles.title}>Cart Page</Text>
            <Text style={[styles.farmName, styles.bold]}>Australlian Cattel Farm - Lahore</Text>
          </View>
        </View>
        <StepIndicator
          customStyles={customStyles}
          currentPosition={3}
          labels={labels}
        />
        <View style={styles.deliveryTime}>
          <View>
            <FontAwesomeIcon style={styles.deliveryIcon} icon={faClockRotateLeft} />
          </View>
          <View style={styles.time}>
            <Text>Estimate Delivery Time</Text>
            <Text>Now (30-40min)</Text>
          </View>
          <View><Text>Change</Text></View>
        </View>
        <View style={styles.cartProductSection}>
          <View>
            <Image 
              source={require('../assets/Images/Milk.jpg')}
              style={styles.productImg}
            />
          </View>
          <View style={styles.productDetails}>
            <Text style={[styles.farmName, styles.bold]}>Australlian Cattel Farm - Lahore</Text>
            <Text style={styles.productInfo}>2KG | Butter</Text>
            <Text style={[styles.productInfo, styles.organicText]}>Organic Dairy Products</Text>
            <View style={styles.price}>
              <Text style={styles.priceText}>RS-1200</Text>
              <View style={styles.addRemoveIcon}>
                <FontAwesomeIcon icon={faPlus} size={15} />
                <FontAwesomeIcon icon={faMinus} size={15} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cartProductSection}>
          <View>
            <Image 
              source={require('../assets/Images/Milk.jpg')}
              style={styles.productImg}
            />
          </View>
          <View style={styles.productDetails}>
            <Text style={[styles.farmName, styles.bold]}>Australlian Cattel Farm - Lahore</Text>
            <Text style={styles.productInfo}>2KG | Butter</Text>
            <Text style={[styles.productInfo, styles.organicText]}>Organic Dairy Products</Text>
            <View style={styles.price}>
              <Text style={styles.priceText}>RS-1200</Text>
              <View style={styles.addRemoveIcon}>
                <FontAwesomeIcon icon={faPlus} size={15} />
                <FontAwesomeIcon icon={faMinus} size={15} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cartProductSection}>
          <View>
            <Image 
              source={require('../assets/Images/Milk.jpg')}
              style={styles.productImg}
            />
          </View>
          <View style={styles.productDetails}>
            <Text style={[styles.farmName, styles.bold]}>Australlian Cattel Farm - Lahore</Text>
            <Text style={styles.productInfo}>2KG | Butter</Text>
            <Text style={[styles.productInfo, styles.organicText]}>Organic Dairy Products</Text>
            <View style={styles.price}>
              <Text style={styles.priceText}>RS-1200</Text>
              <View style={styles.addRemoveIcon}>
                <FontAwesomeIcon icon={faPlus} size={15} />
                <FontAwesomeIcon icon={faMinus} size={15} />
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.AddMoreItem}>Add More Item</Text>
        <AppProducts />
      </View>
      <View style={styles.footer}>
            <View>
              <Text style={styles.proceedButtonText}>Total Price (incl VAT): RS-3000</Text>
              <Text style={styles.proceedButtonText}>Total Discount: RS-500</Text>
            </View>
            <TouchableOpacity  
              style={styles.proceedButton}
              onPress={() => navigation.navigate('Checkout')}
            >
              <Text style={styles.proceedButtonText}>Proceed to Checkout</Text>
            </TouchableOpacity>
          </View>
    </SafeAreaView>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
  },
  AddMoreItem:{
    marginTop: 10,
    color: 'black',
    fontWeight: 'bold',
    margin: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#49243E',
  },
  farmName: {
    color: '#49243E',
  },
  bold: {
    fontWeight: 'bold',
  },
  icon: {
    color: '#49243E',
    marginRight: 10,
  },
  deliveryIcon: {
    color: '#49243E',
  },
  deliveryTime: {
    flexDirection: 'row',
    width: '95%',
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'aqua',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  time: {
    flex: 1,
    marginLeft: 10,
  },
  cartProductSection: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '90%',
  },
  productImg: {
    width: 100,
    height: 100,
    borderRadius: 10,
    elevation: 5,
  },
  productDetails: {
    flexDirection: 'column',
    marginTop: 10,
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  productInfo: {
    fontSize: 15,
  },
  organicText: {
    color: 'black',
    fontWeight: 'bold',
  },
  price: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceText: {
    fontWeight: 'bold',
  },
  addRemoveIcon: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 5,
    width: 50,
    justifyContent: "space-evenly",
    marginLeft: 120,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#31363F',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  footerText: {
    color: 'white',
  },
  proceedButton: {
    backgroundColor: '#265073',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  proceedButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});