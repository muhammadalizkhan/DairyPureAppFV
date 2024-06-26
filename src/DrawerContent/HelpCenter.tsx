import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faCreditCard, faUserPlus, faMapMarkerAlt, faIdCard, faPhone, faStar, faUser, faShop, faBook, faCogs, faFileAlt, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

const HelpCenter = ({navigation}: any) => {
  const icons = [
    { icon: faCreditCard, text: 'Add Payment Method', screen: 'AddPaymentMethod' },
    { icon: faUserPlus, text: 'Become Pro', screen: 'AddPaymentMethod' },
    { icon: faMapMarkerAlt, text: 'Address & Locations', screen: 'Adress' },
    { icon: faPhone, text: 'Contact Us', screen: 'ContactUs' },
    { icon: faStar, text: 'Our Premium Services', screen: 'BecomePro' },
    { icon: faUser, text: 'Our Profile', screen: 'Profile' },
    { icon: faShop, text: 'Farm & Shop Registration', screen: 'OpenRegisterFarm' },
    { icon: faBook, text: 'User Guide', screen: 'UserGuidance' },
    { icon: faCogs, text: 'Setting', screen: 'Setting' },
    { icon: faIdCard, text: 'User Card Info', screen: 'AddPaymentMethod' },
    { icon: faFileAlt, text: 'Term Condition', screen: 'TermsAndConditions' },
    { icon: faShieldAlt, text: 'Data Policy', screen: 'PrivacyPolicy' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faChevronLeft} size={25} color="#007bff"/>
        </TouchableOpacity>
        <Text style={styles.headerText}>Help Center</Text>
      </View>
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
      />
      <ScrollView style={styles.iconList}>
        {icons.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.iconItem}
            onPress={() => navigation.navigate(item.screen)}
            >
            <FontAwesomeIcon icon={item.icon} size={24} color="#333" />
            <Text style={styles.iconText}>{item.text}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default HelpCenter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  backButton: {
    marginRight: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007bff',
  },
  searchBar: {
    margin: 16,
    padding: 8,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
  },
  noteContainer: {
    padding: 16,
    backgroundColor: '#f9f9f9',
    marginBottom: 16,
  },
  noteText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  noteSubText: {
    fontSize: 14,
    color: '#555',
  },
  iconList: {
    flex: 1,
  },
  iconItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  iconText: {
    marginLeft: 16,
    fontSize: 16,
    color: '#333',
  },
});
