import React from 'react';
import { SafeAreaView, StyleSheet, Image, Text, View, TouchableOpacity, ScrollView, ImageSourcePropType } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faClockRotateLeft, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import StepIndicator from 'react-native-step-indicator';

const Cart = ({ navigation, route }: any) => {
  const { cart } = route.params;
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
    currentStepLabelColor: '#49243E',
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total: number, item: { quantityPrice: { eachprice: string; }; }) => total + parseFloat(item.quantityPrice.eachprice.replace('RS-', '')), 0);
  };

  const totalDiscount = 100;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faChevronLeft} size={25} style={styles.icon} />
          </TouchableOpacity>
          <View>
            <Text style={styles.title}>Cart Page</Text>
            <Text style={[styles.farmName, styles.bold]}>Australlian Cattel Farm - Lahore</Text>
          </View>
        </View>
        <StepIndicator
          customStyles={customStyles}
          currentPosition={1}
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
          <TouchableOpacity onPress={() => console.log('Change delivery time clicked')}>
            <Text>Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {cart.map((item: { product: { image: ImageSourcePropType | undefined; name: string; }; quantityPrice: { quantity: string; eachprice: string; }; }, index: number) => (
            <View key={index} style={styles.cartProductSection}>
              <View>
                <Image
                  source={item.product.image}
                  style={styles.productImg}
                />
              </View>
              <View style={styles.productDetails}>
                <Text style={[styles.productName, styles.bold]}>{item.product.name}</Text>
                <Text style={styles.productInfo}>Quantity: {item.quantityPrice.quantity}</Text>
                <Text style={styles.productInfo}>Type: Organic Dairy Products</Text>
                <View style={styles.price}>
                  <Text style={styles.priceText}>Price: {item.quantityPrice.eachprice}</Text>
                  <View style={styles.addRemoveIcon}>
                    <TouchableOpacity style={styles.iconButton}>
                      <FontAwesomeIcon icon={faPlus} size={15} style={styles.addRemoveIconPlus} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                      <FontAwesomeIcon icon={faMinus} size={15} style={styles.addRemoveIconMinus} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
        <TouchableOpacity style={styles.addMoreButton} onPress={() => console.log('Add more item clicked')}>
          <Text style={styles.addMoreButtonText}>Add More Item</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <View>
          <Text style={styles.footerText}>Total Price (incl VAT): RS-{calculateTotalPrice()}</Text>
          <Text style={styles.footerText}>Total Discount: RS-{totalDiscount}</Text>
        </View>
        <TouchableOpacity
          style={styles.proceedButton}
          onPress={() => navigation.navigate('Checkout')}
        >
          <Text style={styles.proceedButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  productImg: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  productDetails: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 18,
    color: '#265073',
    marginBottom: 5,
  },
  productInfo: {
    fontSize: 15,
    color: '#666666',
  },
  organicText: {
    color: '#8BC34A',
    fontWeight: 'bold',
    marginTop: 5,
  },
  price: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  priceText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#49243E',
  },
  addRemoveIcon: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  iconButton: {
    backgroundColor: '#eee',
    borderRadius: 5,
    padding: 8,
    marginLeft: 5,
  },
  addRemoveIconPlus: {
    color: '#8BC34A',
  },
  addRemoveIconMinus: {
    color: '#F44336',
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
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  proceedButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  addMoreButton: {
    backgroundColor: '#265073',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  addMoreButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
