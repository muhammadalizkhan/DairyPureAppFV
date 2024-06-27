import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

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
      <Text style={[styles.label, (isFocused || value) ? styles.labelFocused : undefined]}>{label}</Text>
      <TextInput
        style={[styles.input, isFocused ? styles.inputFocused : undefined]}
        value={value}
        onChangeText={onChangeText}
        placeholder={isFocused ? '' : placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        keyboardType={keyboardType}
        placeholderTextColor="#999" // Placeholder color
      />
    </View>
  );
};

export default FloatingLabelInput;

const styles = StyleSheet.create({
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
    color: '#000', // Text color
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
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    zIndex: 1,
  },
  labelFocused: {
    top: -10,
    left: 10,
    fontSize: 12,
    color: '#007AFF',
  },
});
