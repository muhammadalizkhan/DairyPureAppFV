import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, FlatList } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faPlus, faEdit } from '@fortawesome/free-solid-svg-icons';

type AddressType = {
  id: string;
  name: string;
  address: string;
};

const Address = ({ navigation }: any) => {
  const [view, setView] = useState<'list' | 'map' | 'form'>('list');
  const [selectedAddress, setSelectedAddress] = useState<AddressType | null>(null);
  const [addresses, setAddresses] = useState<AddressType[]>([
    { id: '1', name: 'Home', address: '113 Model Colony, Gullberg, Lahore' },
    { id: '2', name: 'Office', address: '456 Ayehsa Heigths Rd, Lahore, Pakistan' },
  ]);
  const [formState, setFormState] = useState<AddressType>({ id: '', name: '', address: '' });

  const handleSave = () => {
    if (selectedAddress) {
      setAddresses(addresses.map(addr => addr.id === selectedAddress.id ? formState : addr));
    } else {
      setAddresses([...addresses, { ...formState, id: (addresses.length + 1).toString() }]);
    }
    setView('list');
    setSelectedAddress(null);
    setFormState({ id: '', name: '', address: '' });
  };

  const renderList = () => (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <FontAwesomeIcon icon={faChevronLeft} size={24} color="#007AFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Your Address</Text>
        <TouchableOpacity 
          style={styles.addButton} 
          onPress={() => {
            setFormState({ id: '', name: '', address: '' });
            setSelectedAddress(null);
            setView('form');
          }}
        >
          <FontAwesomeIcon icon={faPlus} size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={addresses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.addressItemContainer}>
            <TouchableOpacity 
              style={styles.addressItem} 
              onPress={() => {
                setFormState(item);
                setSelectedAddress(item);
                setView('form');
              }}
            >
              <Text style={styles.addressName}>{item.name}</Text>
              <Text style={styles.addressText}>{item.address}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.editButton} 
              onPress={() => {
                setFormState(item);
                setSelectedAddress(item);
                setView('form');
              }}
            >
              <FontAwesomeIcon icon={faEdit} size={20} color="#007AFF" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );

  const renderMap = () => (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setView('list')} style={styles.backButton}>
          <FontAwesomeIcon icon={faChevronLeft} size={24} color="#007AFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Set Location</Text>
        <View style={styles.placeholder} />
      </View>

      <View style={styles.mapContainer}>
        <Text style={styles.mapPlaceholder}>Map View Placeholder</Text>
      </View>

      <TouchableOpacity 
        style={styles.confirmButton} 
        onPress={() => setView('form')}
      >
        <Text style={styles.confirmButtonText}>Confirm and Add Details</Text>
      </TouchableOpacity>
    </View>
  );

  const renderForm = () => (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setView('list')} style={styles.backButton}>
          <FontAwesomeIcon icon={faChevronLeft} size={24} color="#007AFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Address Details</Text>
        <View style={styles.placeholder} />
      </View>

      <View style={styles.formContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="Name" 
          value={formState.name}
          onChangeText={(text) => setFormState({ ...formState, name: text })}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Address" 
          value={formState.address}
          onChangeText={(text) => setFormState({ ...formState, address: text })}
        />
        <TextInput style={styles.input} placeholder="Street 1" />
        <TextInput style={styles.input} placeholder="Street 2" />
        <TextInput style={styles.input} placeholder="Near Points" />
        <TextInput style={styles.input} placeholder="Phone Number" />

        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>{selectedAddress ? 'Update Address' : 'Save Address'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return view === 'list' ? renderList() : view === 'map' ? renderMap() : renderForm();
};

export default Address;

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
    width: 50,
  },
  placeholder: {
    width: 50,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000',
  },
  formContainer: {
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  addButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addressItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  addressItem: {
    flex: 1,
  },
  editButton: {
    marginLeft: 10,
  },
  addressName: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  addressText: {
    fontSize: 14,
    color: '#666',
  },
  mapContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e2e2e2',
    borderRadius: 10,
  },
  mapPlaceholder: {
    fontSize: 18,
    color: '#888',
  },
  confirmButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
