import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCommentsDollar, faTruck, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

const UserSupport = () => {
  const navigation = useNavigation();

  const rows = [
    { icon: faCommentsDollar, label: 'Help Center', route: 'HelpCenter' },
    { icon: faTruck, label: 'User Guidance', route: 'UserGuidance' },
    { icon: faUnlock, label: 'Terms and Conditions', route: 'TermsAndConditions' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        {rows.map((row, index) => (
          <TouchableOpacity
            key={index}
            style={styles.rowItem}
            onPress={() => navigation.navigate(row.route)}
          >
            <FontAwesomeIcon icon={row.icon} style={styles.rowIcon} />
            <Text style={styles.rowLabel}>{row.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
  },
  rowContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginVertical: 20,
  },
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  rowIcon: {
    fontSize: 24,
    color: '#007bff',
    marginRight: 15,
  },
  rowLabel: {
    fontSize: 16,
    color: '#333',
  },
});

export default UserSupport;
