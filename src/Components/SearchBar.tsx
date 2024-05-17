import React from 'react';
import { StyleSheet, TextInput, View, Image } from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.SearchContainer}>
      <TextInput
        placeholder="Search here for Farms & Products"
        placeholderTextColor="#888"
        style={styles.input}
      />
      <Image
        source={require('../assets/Icons/FilterIcon.png')}
        style={styles.Sicon}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  SearchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 1,
    marginTop: 10,
    marginHorizontal: 16,
    marginBottom: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  Sicon: {
    marginLeft: 8,
    width: 20,
    height: 20,
  },
});

export default SearchBar;
