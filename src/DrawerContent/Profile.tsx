import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Dimensions, Modal } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faCamera, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const { width } = Dimensions.get('window');

const Profile = ({ navigation }: any) => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [name, setName] = useState('Muhammad Ali Khan');
  const [email, setEmail] = useState('ali7847khan@gmail.com');
  const [phone, setPhone] = useState('+923081454784');
  const [city, setCity] = useState('Lahore, Punjab');
  const [country, setCountry] = useState('Pakistan');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editField, setEditField] = useState<string | null>(null);
  const [tempValue, setTempValue] = useState('');

  const handleSelectImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.assets && response.assets.length > 0) {
        setProfileImage(response.assets[0].uri || null);
      }
    });
  };

  const handleEdit = (field: string) => {
    setEditField(field);
    setTempValue(getFieldValue(field));
    setIsModalVisible(true);
  };

  const getFieldValue = (field: string) => {
    switch (field) {
      case 'name':
        return name;
      case 'email':
        return email;
      case 'phone':
        return phone;
      case 'city':
        return city;
      case 'country':
        return country;
      default:
        return '';
    }
  };

  const setFieldValue = (field: string, value: string) => {
    switch (field) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'city':
        setCity(value);
        break;
      case 'country':
        setCountry(value);
        break;
      default:
        break;
    }
  };

  const handleSave = () => {
    if (editField) {
      setFieldValue(editField, tempValue);
    }
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faChevronLeft} size={24} color="#007bff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <View style={styles.profileSection}>
        <TouchableOpacity style={styles.profileImageContainer} onPress={handleSelectImage}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.profileImage} />
          )}
          <View style={styles.cameraIcon}>
            <FontAwesomeIcon icon={faCamera} size={20} color="#fff" />
          </View>
        </TouchableOpacity>
        <Text style={styles.profileName}>{name}</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Name</Text>
          <TouchableOpacity onPress={() => handleEdit('name')}>
            <FontAwesomeIcon icon={faPencilAlt} size={20} color="#007bff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.value}>{name}</Text>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Email</Text>
          <TouchableOpacity onPress={() => handleEdit('email')}>
            <FontAwesomeIcon icon={faPencilAlt} size={20} color="#007bff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.value}>{email}</Text>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Phone</Text>
          <TouchableOpacity onPress={() => handleEdit('phone')}>
            <FontAwesomeIcon icon={faPencilAlt} size={20} color="#007bff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.value}>{phone}</Text>

        <View style={styles.infoRow}>
          <Text style={styles.label}>City, State</Text>
          <TouchableOpacity onPress={() => handleEdit('city')}>
            <FontAwesomeIcon icon={faPencilAlt} size={20} color="#007bff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.value}>{city}</Text>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Country</Text>
          <TouchableOpacity onPress={() => handleEdit('country')}>
            <FontAwesomeIcon icon={faPencilAlt} size={20} color="#007bff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.value}>{country}</Text>
      </View>

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit {editField}</Text>
            <TextInput
              style={styles.modalInput}
              value={tempValue}
              onChangeText={setTempValue}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalButton} onPress={() => setIsModalVisible(false)}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={handleSave}>
                <Text style={styles.modalButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  backButton: {
    marginRight: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#007bff',
    borderRadius: 15,
    padding: 5,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  infoContainer: {
    padding: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#888',
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: width * 0.8,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalInput: {
    width: '100%',
    backgroundColor: '#f0f2f5',
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  modalButtonText: {
    fontSize: 16,
    color: '#007bff',
  },
});
