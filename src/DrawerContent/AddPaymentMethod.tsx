import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Switch, Image, Alert } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

type Errors = {
  cardNumber?: string;
  cardholderName?: string;
  expiryDate?: string;
  cvv?: string;
};

const AddPaymentMethod = ({ navigation }: any) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [saveCard, setSaveCard] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const validateCardNumber = (number: string) => {
    const regex = /^\d{16}$/;
    return regex.test(number);
  };

  const validateCardholderName = (name: string) => {
    const regex = /^[A-Za-z\s]+$/;
    return regex.test(name);
  };

  const validateCvv = (cvv: string) => {
    const regex = /^\d{3}$/;
    return regex.test(cvv);
  };

  const handleAddCard = () => {
    const newErrors: Errors = {};
    if (!validateCardNumber(cardNumber)) {
      newErrors.cardNumber = 'Card number must be 16 digits';
    }
    if (!validateCardholderName(cardholderName)) {
      newErrors.cardholderName = 'Cardholder name must contain only alphabets';
    }
    if (!validateCvv(cvv)) {
      newErrors.cvv = 'CVV must be 3 digits';
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Proceed with adding card logic
      Alert.alert(
        "Card Added",
        "Your card details are updated. When you order, we will use these details.",
        [{ text: "OK", onPress: () => navigation.goBack() }]
      );
      console.log('Card added successfully');
    }
  };

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
        <Image source={require('../assets/Images/Card.png')} style={styles.cardImage} />
      </View>
      <Text style={styles.label}>Card Number</Text>
      <TextInput
        style={[styles.input, errors.cardNumber && styles.inputError]}
        keyboardType="number-pad"
        value={cardNumber}
        onChangeText={setCardNumber}
        placeholder="0000 0000 0000 0000"
        placeholderTextColor="#888"
        maxLength={16} // Limit input to 16 digits
      />
      {errors.cardNumber && <Text style={styles.errorText}>{errors.cardNumber}</Text>}
      <Text style={styles.label}>Cardholder Name</Text>
      <TextInput
        style={[styles.input, errors.cardholderName && styles.inputError]}
        value={cardholderName}
        onChangeText={setCardholderName}
        placeholder="Mr Muhammad Ali Khan"
        placeholderTextColor="#888"
      />
      {errors.cardholderName && <Text style={styles.errorText}>{errors.cardholderName}</Text>}
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
          <Text style={styles.label}>CVC</Text>
          <TextInput
            style={[styles.input, errors.cvv && styles.inputError]}
            keyboardType="number-pad"
            value={cvv}
            onChangeText={setCvv}
            placeholder="000"
            secureTextEntry
            placeholderTextColor="#888"
            maxLength={3} // Limit input to 3 digits
          />
          {errors.cvv && <Text style={styles.errorText}>{errors.cvv}</Text>}
        </View>
      </View>
      <View style={styles.saveCardContainer}>
        <Switch value={saveCard} onValueChange={setSaveCard} trackColor={{ false: '#ddd', true: '#007AFF' }} thumbColor={saveCard ? '#007AFF' : '#888'} />
        <Text style={styles.saveCardText}>Save Card Information</Text>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={handleAddCard}>
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
  },
  cardImage: {
    width: '100%',
    height: 220,
    resizeMode: 'cover',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    overflow: 'hidden',
    shadowRadius: 4,
    elevation: 5,
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
  inputError: {
    borderColor: '#ff4d4d',
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
  errorText: {
    color: '#ff4d4d',
    fontSize: 12,
    marginTop: -5,
    marginBottom: 10,
  },
});
