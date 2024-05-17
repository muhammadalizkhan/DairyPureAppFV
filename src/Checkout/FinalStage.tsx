import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StepIndicator from 'react-native-step-indicator';

const labels = ["Your order has been received", "The restaurant is preparing your food", "Your order has been picked up for delivery", "Order arriving soon!"];

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
  labelSize: 20,
  currentStepLabelColor: '#49243E',
};

const renderLabel = ({label}: {label: string;}) => {
  return (
    <View style={styles.labelContainer}>
      <Text style={styles.labelText}>{label}</Text>
    </View>
  );
};

const FinalStage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.DeliveryTime}>
        <Text style={styles.Time}>20 min</Text>
        <Text style={styles.Estimate}>Estimate Delivery Time</Text>
      </View>
      <StepIndicator 
        customStyles={customStyles}
        currentPosition={3} 
        labels={labels}
        direction="vertical"
        renderLabel={renderLabel}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f3f3f3',
    alignContent: 'center',
    alignItems: 'center',
  },
  labelContainer: {
    justifyContent: 'flex-start',
    marginLeft: 10,
    marginTop: 10,  
},
  labelText: {
    fontSize: 20,
    color: '#49243E',
  },
  Estimate: {
    fontSize: 15,
  },
  DeliveryTime:{
    alignItems: 'center',
  },
  Time:{
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default FinalStage;
