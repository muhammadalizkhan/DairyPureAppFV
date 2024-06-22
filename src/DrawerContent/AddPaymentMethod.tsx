import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Switch, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const AddPaymentMethod = ({ navigation }: any) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [saveCard, setSaveCard] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <FontAwesomeIcon icon={faChevronLeft} size={24} color="#007AFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add New Card</Text>
        <View style={styles.placeholder} />
      </View>
      <View style={styles.cardPreview}>
        <Image source={require('../assets/Images/Milk.jpg')} style={styles.cardImage} />
      </View>
      <Text style={styles.label}>Card Number</Text>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        value={cardNumber}
        onChangeText={setCardNumber}
        placeholder="**** **** **** ****"
        placeholderTextColor="#888"
      />
      <Text style={styles.label}>Cardholder Name</Text>
      <TextInput
        style={styles.input}
        value={cardholderName}
        onChangeText={setCardholderName}
      />
      <View style={styles.row}>
        <View style={styles.halfInputContainer}>
          <Text style={styles.label}>Expiry Date (MM/YY)</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            value={expiryDate}
            onChangeText={setExpiryDate}
            placeholder="00 / 00"
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.halfInputContainer}>
          <Text style={styles.label}>CVV</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            value={cvv}
            onChangeText={setCvv}
            secureTextEntry
          />
        </View>
      </View>
      <View style={styles.saveCardContainer}>
        <Switch value={saveCard} onValueChange={setSaveCard} trackColor={{ false: '#ddd', true: '#007AFF' }} thumbColor={saveCard ? '#007AFF' : '#888'} />
        <Text style={styles.saveCardText}>Save Card Information</Text>
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Card</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddPaymentMethod;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f7',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backButton: {
    width: 50, // Make sure this width is enough to center the title
  },
  placeholder: {
    width: 50, // Placeholder to center the title
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000',
  },
  cardPreview: {
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: '#fff',
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 10,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInputContainer: {
    width: '48%',
  },
  saveCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  saveCardText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  addButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
