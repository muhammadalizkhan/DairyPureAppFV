import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faCreditCard, faUserPlus, faMapMarkerAlt, faIdCard, faPhone, faStar, faUser, faShop, faBook, faCogs, faFileAlt, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

const HelpCenter = () => {
  const icons = [
    { icon: faCreditCard, text: 'Add Payment Method' },
    { icon: faUserPlus, text: 'Become Pro' },
    { icon: faMapMarkerAlt, text: 'Address & Locations' },
    { icon: faIdCard, text: 'User Card Info' },
    { icon: faPhone, text: 'Contact Us' },
    { icon: faStar, text: 'Our Premium Services' },
    { icon: faUser, text: 'Our Profile' },
    { icon: faShop, text: 'Farm & Shop Registration' },
    { icon: faBook, text: 'User Guide' },
    { icon: faCogs, text: 'Setting' },
    { icon: faFileAlt, text: 'Term Condition' },
    { icon: faShieldAlt, text: 'Data Policy' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <FontAwesomeIcon icon={faChevronLeft} size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Help Center</Text>
      </View>
      
      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
      />
      
      {/* Note Section */}
      <View style={styles.noteContainer}>
        <Text style={styles.noteText}>
          Dairy Pure Help Center here to provide support.
        </Text>
        <Text style={styles.noteSubText}>
          Have any question about a particular Feature or Related to your Order? Just log into the account you used to place the order with. Our customer care team is right here to support you!
        </Text>
      </View>
      
      {/* Icon List */}
      <ScrollView style={styles.iconList}>
        {icons.map((item, index) => (
          <TouchableOpacity key={index} style={styles.iconItem}>
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
    backgroundColor: '#6200ee',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  backButton: {
    marginRight: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
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
