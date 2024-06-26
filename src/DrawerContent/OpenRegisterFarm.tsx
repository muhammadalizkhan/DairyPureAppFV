import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

type FloatingLabelInputProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  keyboardType?: 'default' | 'email-address' | 'phone-pad';
};

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isFocused || value ? styles.labelFocused : null]}>{label}</Text>
      <TextInput
        style={[styles.input, isFocused ? styles.inputFocused : null]}
        value={value}
        onChangeText={onChangeText}
        placeholder={isFocused ? '' : placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const RegisterFarm: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [businessType, setBusinessType] = useState('Cattle Farm');
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleRegister = () => {
    const newErrors: { [key: string]: string } = {};
    if (!firstName) newErrors.firstName = 'Field cannot be blank.';
    if (!lastName) newErrors.lastName = 'Field cannot be blank.';
    if (!email) newErrors.email = 'Field cannot be blank.';
    if (!countryCode) newErrors.countryCode = 'Field cannot be blank.';
    if (!phoneNumber) newErrors.phoneNumber = 'Field cannot be blank.';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log({
        firstName,
        lastName,
        email,
        businessType,
        countryCode,
        phoneNumber,
      });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <FontAwesomeIcon icon={faChevronLeft} size={24} color="#007AFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Register Farm</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>
          Boost your revenue with Dairy Pure
        </Text>
        <Text style={styles.subtitle}>
          Sign up now and start earning more with the leading food delivery service DairyPure.
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Ready to grow your business?</Text>

          <FloatingLabelInput
            label="Business Owner First Name"
            value={firstName}
            onChangeText={setFirstName}
            placeholder="Business Owner First Name"
          />
          {errors.firstName && <Text style={styles.error}>{errors.firstName}</Text>}

          <FloatingLabelInput
            label="Business Owner Last Name"
            value={lastName}
            onChangeText={setLastName}
            placeholder="Business Owner Last Name"
          />
          {errors.lastName && <Text style={styles.error}>{errors.lastName}</Text>}

          <FloatingLabelInput
            label="Enter Your Business Email"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter Your Business Email"
            keyboardType="email-address"
          />
          {errors.email && <Text style={styles.error}>{errors.email}</Text>}

          <View style={styles.inputRow}>
            <View style={styles.countryCodeContainer}>
              <FloatingLabelInput
                label=""
                value={countryCode}
                onChangeText={setCountryCode}
                placeholder="Code"
                keyboardType="phone-pad"
              />
              {errors.countryCode && <Text style={styles.error}>{errors.countryCode}</Text>}
            </View>
            <View style={styles.phoneNumberContainer}>
              <FloatingLabelInput
                label=""
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                placeholder="Phone Number"
                keyboardType="phone-pad"
              />
              {errors.phoneNumber && <Text style={styles.error}>{errors.phoneNumber}</Text>}
            </View>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterFarm;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f2f2f7',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  backButton: {
    width: 50,
  },
  headerTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  content: {
    flex: 1,
    paddingTop: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#555',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  inputContainer: {
    marginBottom: 15,
    position: 'relative',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  inputFocused: {
    borderColor: '#007AFF',
  },
  label: {
    position: 'absolute',
    left: 15,
    top: 15,
    fontSize: 16,
    color: '#999',
  },
  labelFocused: {
    top: -10,
    left: 10,
    fontSize: 12,
    color: '#007AFF',
  },
  picker: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  countryCodeContainer: {
    flex: 1,
    marginRight: 10,
  },
  phoneNumberContainer: {
    flex: 2,
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginTop: 5,
  },
});
