import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons';

const EditCardDetails = () => {
  return (
    <View style={styles.cardContainer}>
      {/* Card Header */}
      <View style={styles.cardHeader}>
        <Text style={styles.cardHeaderText}>Edit Card Details</Text>
        <TouchableOpacity style={styles.closeButton}>
          <FontAwesomeIcon icon={faTimes} style={styles.closeIcon} />
        </TouchableOpacity>
      </View>

      {/* Card Body (Form) */}
      <View style={styles.cardBody}>
        <TextInput style={styles.inputField} placeholder="Card Number" />
        <TextInput style={styles.inputField} placeholder="Expiry Date" />
        <TextInput style={styles.inputField} placeholder="CVV" />
      </View>

      {/* Card Footer (Action Buttons) */}
      <View style={styles.cardFooter}>
        <TouchableOpacity style={[styles.actionButton, styles.saveButton]}>
          <FontAwesomeIcon icon={faSave} style={styles.actionButtonIcon} />
          <Text style={styles.actionButtonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.cancelButton]}>
          <Text style={styles.actionButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    marginBottom: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  closeButton: {
    padding: 5,
  },
  closeIcon: {
    fontSize: 20,
    color: '#888',
  },
  cardBody: {},
  inputField: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginLeft: 10,
  },
  saveButton: {
    backgroundColor: '#007bff',
  },
  cancelButton: {
    backgroundColor: '#ccc',
  },
  actionButtonText: {
    color: '#fff',
    marginLeft: 5,
  },
  actionButtonIcon: {
    color: '#fff',
  },
});

export default EditCardDetails;
