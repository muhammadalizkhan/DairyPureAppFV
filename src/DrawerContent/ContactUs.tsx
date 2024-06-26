import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPhone, faEnvelope, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import UserGuidance from './UserGuidance';
import UserSupport from '../Components/UserSupport';

const ContactUs = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faChevronLeft} size={24} color="#007bff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Contact Us</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.title}>Get in Touch</Text>
        <Text style={styles.subtitle}>
          If you have any inquiries get in touch with us. We'll be happy to help you.
        </Text>

        <View style={styles.contactItem}>
          <FontAwesomeIcon icon={faPhone} size={24} color="#007bff" />
          <Text style={styles.contactText}>+(92) 308 1454 784</Text>
        </View>

        <View style={styles.contactItem}>
          <FontAwesomeIcon icon={faEnvelope} size={24} color="#007bff" />
          <Text style={styles.contactText}>Support@DairyPure.com</Text>
        </View>

        <Text style={styles.socialTitle}>Social Media</Text>

        <View style={styles.socialItem}>
          <FontAwesomeIcon icon={faFacebook} size={24} color="#007bff" />
          <Text style={styles.socialText}>Stay updated, connect, and engage with us on Facebook.</Text>
        </View>

        <View style={styles.socialItem}>
          <FontAwesomeIcon icon={faInstagram} size={24} color="#007bff" />
          <Text style={styles.socialText}>Explore our visual world and discover beauty of our brand.</Text>
        </View>

        <View style={styles.socialItem}>
          <FontAwesomeIcon icon={faTwitter} size={24} color="#007bff" />
          <Text style={styles.socialText}>Follow us for real-time updates and lively discussions.</Text>
        </View>
      </View>
    </View>
  );
}

export default ContactUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  headerTitle: {
    fontSize: 25,
    color: '#007bff',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  contactText: {
    fontSize: 18,
    marginLeft: 10,
    color: '#007bff',
  },
  socialTitle: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginVertical: 20,
  },
  socialItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  socialText: {
    fontSize: 14,
    marginLeft: 10,
    color: '#007bff',
  },
});
