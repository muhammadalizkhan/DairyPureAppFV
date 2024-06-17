import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

const OTP = ({ route, navigation }) => {
  const { phoneNumber } = route.params;
  const [code, setCode] = useState('');
  const [confirm, setConfirm] = useState(null);

  const handleVerifyCode = async () => {
    if (!confirm) return;
    try {
      await confirm.confirm(code);
      Alert.alert('Success', 'Phone number verified');
      navigation.navigate('Home'); // or any other screen after verification
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const sendVerification = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  // Send verification code when component mounts
  useRef(() => {
    sendVerification();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Verification Code"
        keyboardType="number-pad"
        placeholderTextColor="#888"
        value={code}
        onChangeText={setCode}
      />
      <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyCode}>
        <Text style={styles.verifyButtonText}>Verify Code</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 32,
    marginBottom: 40,
    color: '#333',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  verifyButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 20,
    width: '100%',
    alignItems: 'center',
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OTP;
