import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import RegisterFarm from './RegisterFarm';

const GetRegister = ({ navigation }: any) => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Are you a Cattle Farmer?</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterFarm')}>
          <Text style={styles.buttonText}>Get Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GetRegister;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  container: {
    width: '90%',
    backgroundColor: '#E9B0DF',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#49243E',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#49243E',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
