import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import StepIndicator from 'react-native-step-indicator'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft, faLocationCrosshairs, faMoneyCheck, faPen, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from '@react-navigation/native'


const Checkout = ({navigation}: any) => {

  const handleGoBack = () => {
    navigation.goBack();
  };
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
          <TouchableOpacity
            onPress={handleGoBack}
          >
            <FontAwesomeIcon icon={faChevronLeft} size={30} style={styles.icon} />
          </TouchableOpacity>
          <View>
            <Text style={styles.title}>CheckOut</Text>
            <Text style={[styles.farmName, styles.bold]}>113 Johar Town J2-Lahore</Text>
          </View>
        </View>
        <StepIndicator
          customStyles={customStyles}
          currentPosition={4}
          labels={labels}
        />
        <ScrollView>
          <View style={styles.DeliveryDetails}>
            <View style={styles.DeliveryLocation}>
              <View style={styles.DeliveryTitle}>
                <FontAwesomeIcon
                  size={20}
                  color='#49243E'
                  icon={faLocationCrosshairs} />
                <Text style={styles.addressText}>Delivery Address</Text>
              </View>
              <FontAwesomeIcon size={18} color='#49243E' icon={faPen} />
            </View>
            <Image
              source={require('../assets/Images/MapBG.jpg')}
              style={styles.Image}
            />
            <Text style={[styles.farmName, styles.bold, styles.addressText]}>113 Johar Town J2-Lahore</Text>
            <Text style={styles.addressText}>Lahore</Text>
            <View style={styles.line} />
            <View style={styles.deliveryInstruction}>
              <FontAwesomeIcon icon={faPlus} style={styles.plusIcon} />
              <Text>Add Delivery instruction for your rider</Text>
            </View>
          </View>

          <View style={styles.paymentDetails}>
            <View style={styles.paymentRow}>
              <Text style={styles.paymentTitle}>Payment Method</Text>
              <FontAwesomeIcon size={18} color='#49243E' icon={faPen} />
            </View>
            <View style={styles.line} />
            <View style={styles.paymentRow}>
              <View style={styles.CashRow}>
                <FontAwesomeIcon size={25} color='#49243E' icon={faMoneyCheck} />
                <Text style={styles.Cash}>Cash</Text>
              </View>
              <Text style={styles.paymentText}>Rs.3000.20</Text>
            </View>
          </View>

          <View style={styles.SummaryDetails}>
            <Text style={styles.summaryTitle}>Order Summary</Text>
            <View style={styles.summaryItem}>
              <View style={styles.productInfo}>
                <Text style={styles.producttext}>2kg Butter</Text>
                <Text style={styles.producttext}>Rs. 2300.0</Text>
              </View>
            </View>
            <View style={styles.line} />
            <View style={styles.summaryItem}>
              <View style={styles.productInfo}>
                <Text style={styles.producttext}>SubTotal</Text>
                <Text style={styles.producttext}>Rs.2300.54</Text>
              </View>
              <View style={styles.productInfo}>
                <Text style={styles.producttext}>Delivery Chagres</Text>
                <Text style={styles.producttext}>Rs. 250</Text>
              </View>
              <View style={styles.productInfo}>
                <Text style={styles.producttext}>Platform Fee</Text>
                <Text style={styles.producttext}>Rs. 500</Text>
              </View>
              <View style={styles.productInfo}>
                <Text style={styles.producttext}>Overall 3 Products</Text>
                <Text style={styles.producttext}>Total Amount 3000</Text>
              </View>
            </View>
          </View>

        </ScrollView>
          <View style={styles.footer}>
            <View>
              <Text style={styles.proceedButtonText}>Total Price (incl): RS-3000</Text>
              <Text style={styles.proceedButtonText}>Total Discount: RS-500</Text>
            </View>
            <TouchableOpacity  
              style={styles.proceedButton}
              onPress={() => navigation.navigate('OrderConfirmed')}
            >
              <Text style={styles.proceedButtonText}>Proceed to Checkout</Text>
            </TouchableOpacity>
          </View>
      </View>
    </SafeAreaView>
  )
}

export default Checkout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  producttext:{
    color: '#49243E',
  },
  Cash: {
    marginLeft: 8,
    fontSize: 16,
    color: '#49243E',
  },
  CashRow: {
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    paddingHorizontal: 5,
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
  bold: {
    fontWeight: 'bold',
  },
  icon: {
    color: '#49243E',
    marginRight: 10,
  },
  farmName: {
    color: '#49243E',
  },
  DeliveryDetails: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    elevation: 1,
    backgroundColor: 'white',
    marginTop: 10,
  },
  DeliveryLocation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  Image: {
    width: '90%',
    height: 100,
    borderRadius: 8,
    elevation: 2,
    alignSelf: 'center',
    marginTop: 10,
  },
  DeliveryTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressText: {
    marginLeft: 10,
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  deliveryInstruction: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    marginTop: 2,
  },
  plusIcon: {
    marginRight: 5,
  },
  line: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 5,
  },
  paymentDetails: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    elevation: 1,
    backgroundColor: 'white',
    marginTop: 10,
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    padding: 10,
  },
  paymentTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#49243E',
  },
  paymentText: {
    fontSize: 16,
    color: '#49243E',
  },
  SummaryDetails: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    elevation: 1,
    backgroundColor: 'white',
    marginTop: 10,
    padding: 10,
  },
  summaryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#49243E',
    marginBottom: 10,
  },
  summaryItem: {
    marginBottom: 5,
  },
  productInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
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
})
