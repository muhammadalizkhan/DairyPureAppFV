import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const PrivacyPolicy = ({ navigation }: any) => {
  const [currentScreen, setCurrentScreen] = useState('main');

  const renderMainScreen = () => (
    <View style={styles.content}>
        <TouchableOpacity
        style={styles.listItem}
        onPress={() => setCurrentScreen('privacyPolicy')}>
        <Text style={styles.listItemText}>Privacy Policy</Text>
        <FontAwesomeIcon icon={faChevronRight} size={24} color="#007AFF" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => setCurrentScreen('dataPolicy')}>
        <Text style={styles.listItemText}>Data Policy</Text>
        <FontAwesomeIcon icon={faChevronRight} size={24} color="#007AFF" />
      </TouchableOpacity>
    </View>
  );

  const renderDataPolicyScreen = () => (
    <View style={styles.content}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setCurrentScreen('main')} style={styles.backButton}>
          <FontAwesomeIcon icon={faChevronLeft} size={24} color="#007AFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Data Policy</Text>
      </View>
      <Text style={styles.sectionText}>
        Detailed information about the data policy will go here.
      </Text>
    </View>
  );

  const renderPrivacyPolicyScreen = () => (
    <View style={styles.content}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setCurrentScreen('main')} style={styles.backButton}>
          <FontAwesomeIcon icon={faChevronLeft} size={24} color="#007AFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Privacy Policy</Text>
      </View>
      <ScrollView style={styles.policyContainer}>
        <Text style={styles.sectionTitle}>Introduction</Text>
        <Text style={styles.sectionText}>
          Welcome to our Dairy Farm Delivery Service app, where we prioritize your privacy and the security of your personal information. This Privacy Policy outlines the types of information we collect, how we use it, and the measures we take to protect it. By using our app, you agree to the terms of this Privacy Policy.
        </Text>

        <Text style={styles.sectionTitle}>Information We Collect</Text>
        <Text style={styles.subTitle}>Personal Information</Text>
        <Text style={styles.sectionText}>
          <Text style={styles.pointText}>• Registration Data:</Text> When you register on our app, we collect personal details such as your name, email address, phone number, and address.
        </Text>
        <Text style={styles.sectionText}>
          <Text style={styles.pointText}>• Profile Information:</Text> Additional details provided in your profile, including dairy farm owner profiles, milk seller/shop profiles, and user profiles.
        </Text>

        <Text style={styles.subTitle}>Transaction Information</Text>
        <Text style={styles.sectionText}>
          <Text style={styles.pointText}>• Order Details:</Text> Information about the products you purchase, including quantities, prices, and transaction history.
        </Text>
        <Text style={styles.sectionText}>
          <Text style={styles.pointText}>• Payment Information:</Text> Details necessary to process payments, including credit/debit card information and bank account details.
        </Text>

        <Text style={styles.subTitle}>Usage Information</Text>
        <Text style={styles.sectionText}>
          <Text style={styles.pointText}>• Log Data:</Text> Information automatically collected when you use our app, such as IP address, device type, operating system, and usage patterns.
        </Text>
        <Text style={styles.sectionText}>
          <Text style={styles.pointText}>• Location Data:</Text> Geographic location data to facilitate delivery services and show nearby dairy farms.
        </Text>

        <Text style={styles.sectionTitle}>How We Use Your Information</Text>
        <Text style={styles.subTitle}>Service Provision</Text>
        <Text style={styles.sectionText}>
          <Text style={styles.pointText}>• Order Processing:</Text> To process and fulfill your orders for dairy products.
        </Text>
        <Text style={styles.sectionText}>
          <Text style={styles.pointText}>• Payment Processing:</Text> To process payments and manage financial transactions.
        </Text>

        <Text style={styles.subTitle}>Improvement and Personalization</Text>
        <Text style={styles.sectionText}>
          <Text style={styles.pointText}>• User Experience:</Text> To enhance the functionality and user experience of our app.
        </Text>
        <Text style={styles.sectionText}>
          <Text style={styles.pointText}>• Personalization:</Text> To tailor the content and services to your preferences and location.
        </Text>

        <Text style={styles.subTitle}>Communication</Text>
        <Text style={styles.sectionText}>
          <Text style={styles.pointText}>• Customer Support:</Text> To respond to your inquiries and provide customer support.
        </Text>
        <Text style={styles.sectionText}>
          <Text style={styles.pointText}>• Notifications:</Text> To send you updates, promotional offers, and other relevant communications.
        </Text>

        <Text style={styles.sectionTitle}>Data Sharing and Disclosure</Text>
        <Text style={styles.subTitle}>With Third Parties</Text>
        <Text style={styles.sectionText}>
          <Text style={styles.pointText}>• Service Providers:</Text> We may share your information with third-party service providers who assist us in operating our app and conducting our business.
        </Text>
        <Text style={styles.sectionText}>
          <Text style={styles.pointText}>• Legal Requirements:</Text> We may disclose your information if required by law or to protect our rights and property.
        </Text>

        <Text style={styles.subTitle}>With Users</Text>
        <Text style={styles.sectionText}>
          <Text style={styles.pointText}>• User Interactions:</Text> Your profile information may be visible to other users to facilitate transactions and communication.
        </Text>

        <Text style={styles.sectionTitle}>Data Security</Text>
        <Text style={styles.subTitle}>Protection Measures</Text>
        <Text style={styles.sectionText}>
          <Text style={styles.pointText}>• Encryption:</Text> We use encryption technologies to protect your personal information during transmission and storage.
        </Text>
        <Text style={styles.sectionText}>
          <Text style={styles.pointText}>• Access Controls:</Text> We implement strict access controls to ensure that only authorized personnel can access your data.
        </Text>

        <Text style={styles.sectionTitle}>Your Rights and Choices</Text>
        <Text style={styles.subTitle}>Access and Update</Text>
        <Text style={styles.sectionText}>
          <Text style={styles.pointText}>• Profile Management:</Text> You can access and update your profile information through the app settings.
        </Text>
        <Text style={styles.sectionText}>
          <Text style={styles.pointText}>• Data Requests:</Text> You have the right to request access to the personal information we hold about you and to request corrections if necessary.
        </Text>

        <Text style={styles.subTitle}>Opt-Out</Text>
        <Text style={styles.sectionText}>
          <Text style={styles.pointText}>• Marketing Communications:</Text> You can opt-out of receiving promotional emails by following the unsubscribe instructions in the email.
        </Text>

        <Text style={styles.sectionTitle}>Cookies and Tracking Technologies</Text>
        <Text style={styles.subTitle}>Use of Cookies</Text>
        <Text style={styles.sectionText}>
          <Text style={styles.pointText}>• Functionality:</Text> We use cookies to enhance the functionality of our app and provide a better user experience.
        </Text>
        <Text style={styles.sectionText}>
          <Text style={styles.pointText}>• Analytics:</Text> We use cookies to collect usage data and analyze user behavior to improve our services.
        </Text>

        <Text style={styles.sectionTitle}>Changes to This Privacy Policy</Text>
        <Text style={styles.subTitle}>Updates</Text>
        <Text style={styles.sectionText}>
          <Text style={styles.pointText}>• Policy Modifications:</Text> We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
        </Text>
        <Text style={styles.sectionText}>
          <Text style={styles.pointText}>• Notification:</Text> We will notify you of any significant changes to this policy by posting the updated policy on our app and updating the effective date.
        </Text>

        <Text style={styles.sectionTitle}>Contact Us</Text>
        <Text style={styles.sectionText}>
          If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
        </Text>
        <Text style={styles.sectionText}>
          <Text style={styles.pointText}>• Email:</Text> support@dairypure.com
        </Text>
        <Text style={styles.sectionText}>
          <Text style={styles.pointText}>• Phone:</Text> [03081454784]
        </Text>
        <Text style={styles.sectionText}>
          <Text style={styles.pointText}>• Address:</Text> [113 Model Colony Gullberg Lahore 54000 Punjab Pakistan]
        </Text>
        <Text style={styles.sectionText}>
          By using our app, you acknowledge that you have read and understood this Privacy Policy. Thank you for trusting us with your personal information.
        </Text>
      </ScrollView>
    </View>
  );

  return (
    <View style={styles.container}>
      {currentScreen === 'main' ? (
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <FontAwesomeIcon icon={faChevronLeft} size={24} color="#007AFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Privacy and Data Policy</Text>
        </View>
      ) : null}
      {currentScreen === 'main'
        ? renderMainScreen()
        : currentScreen === 'dataPolicy'
        ? renderDataPolicyScreen()
        : renderPrivacyPolicyScreen()}
    </View>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    width: 50,
  },
  headerTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  content: {
    flex: 1,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  listItemText: {
    fontSize: 18,
    color: '#007AFF',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
    color: '#000',
  },
  pointText: {
    fontWeight: 'bold',
    color: '#000',
  },
  sectionText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
  policyContainer: {
    padding: 10,
  },
});
