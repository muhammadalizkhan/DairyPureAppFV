import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import StepIndicator from 'react-native-step-indicator'
import FinalStage from './FinalStage'

const OrderConfirmed = ({navigation}: any) => {
  const handleGoBack = () => {
    navigation.goBack();
  };
 const labels = ["Menu", "Cart", "Checkout"];
  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize:30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#49243E',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#49243E',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#49243E',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#49243E',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#49243E',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#49243E',
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
          currentPosition={3}
          labels={labels}
        />
        <View>
            <Image 
              source={require("../assets/Images/MapOne.jpg")}
              style={[styles.Image]} 
            />
        </View>
        <FinalStage />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.exploreButton}
      >
          <Text style={styles.exploreText}>Explore more</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OrderConfirmed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3'
  },
  Image:{
    width: '100%',
    height: 250,
    marginTop: 8,
    alignSelf: 'center',
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
  exploreButton: {
    backgroundColor: '#49243E',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    width: '50%',
    alignSelf: 'center',
  },
  exploreText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
