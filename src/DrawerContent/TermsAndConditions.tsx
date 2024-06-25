import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Platform} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import CheckBox from '@react-native-community/checkbox'

const TermsAndConditions = ({ navigation }: any) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleAccept = () => {
    if (isChecked) {
      navigation.goBack();
    } else {
      alert('Please accept the terms and conditions to proceed.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <FontAwesomeIcon icon={faChevronLeft} size={24} color="#007AFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Terms and Conditions</Text>
        <View style={styles.placeholder} />
      </View>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Privacy Policy</Text>

        <Text style={styles.paragraph}>
          Dear Customer,
        </Text>
        <Text style={styles.paragraph}>
          We are pleased that you are interested in data protection. We would like to give you an easily understandable overview of the data processing practices and our privacy compliance measures in relation to our delivery websites, applications, and related services (collectively referred to as "platform" below). Our goal is to provide you with an amazing customer experience while keeping your personal data secure. Trust, transparency, and honesty are our leading principles. Your trust in our product is the reason why we can provide you with an amazing customer experience.
        </Text>

        <Text style={styles.subtitle}>1. Who we are</Text>
        <Text style={styles.paragraph}>
          We are R-Sc Internet Services Pakistan (Private) Limited (“we”, “us” or “our”), but usually, we just use the name DariyPure.Co Pakistan.
        </Text>
        <Text style={styles.paragraph}>
          As regards the processing activities conducted on our platform, we will be the data controller responsible for what happens with your personal data. "Data controller" is a legal term and simply means that we are the party determining how your personal data is processed, for what purposes this is done and by what means. While we are required by law to provide you with all of the following information, we do so also out of the belief that transparency and clarity are fundamental to our relationship with you.
        </Text>

        <Text style={styles.subtitle}>2. Data Processing</Text>
        <Text style={styles.paragraph}>
          Facebook provides page administrators with aggregated statistics and insights that help them understand the types of actions people take on their pages ("Page Insights"). Please be informed that we only receive aggregated user reports from Facebook. At no point can we attribute any page visit or other interaction to individual social media profiles.
        </Text>
        <Text style={styles.paragraph}>
          When you visit or interact with one of our social media sites or its content, information such as the following may be collected and used to create Page Insights:
        </Text>
        <Text style={styles.bulletPoint}>- Viewing a page, or a post or video from a page</Text>
        <Text style={styles.bulletPoint}>- Following or unfollowing a page</Text>
        <Text style={styles.bulletPoint}>- Liking or unliking a page or post</Text>
        <Text style={styles.bulletPoint}>- Recommending a page in a post or comment</Text>
        <Text style={styles.bulletPoint}>- Commenting on, sharing or reacting to a page post (including the type of reaction)</Text>
        <Text style={styles.bulletPoint}>- Hiding a page's post or reporting it as spam</Text>
        <Text style={styles.bulletPoint}>- Clicking a link to a page from another page on Facebook or from a website off Facebook</Text>
        <Text style={styles.bulletPoint}>- Hovering over a page's name or profile picture to see a preview of the page's content</Text>
        <Text style={styles.bulletPoint}>- Clicking on the website, phone number, Get Directions button or other button on a page</Text>
        <Text style={styles.bulletPoint}>- Whether you're on a computer or mobile device while visiting or interacting with a page or its content</Text>

        <Text style={styles.subtitle}>3. Customer Relationship Management</Text>
        <Text style={styles.subsubtitle}>a) Your requests</Text>
        <Text style={styles.paragraph}>
          Your satisfaction is our biggest goal. Therefore we are very keen to be available for all your questions and to answer them. In order to be able to answer these questions and understand the overall problem, we store the conversation content in our Customer Relationship Management System when you contact us.
        </Text>
        <Text style={styles.paragraph}>
          The content of the information we store depends on the information you provide to us as part of our communications.
        </Text>
        <Text style={styles.bulletPoint}>- Categories of personal data: Contact information, Order history and information</Text>
        <Text style={styles.subsubtitle}>b) Call Center</Text>
        <Text style={styles.paragraph}>
          If you contact us by phone, we store the conversation for quality assurance purposes. In individual cases, we also use the recordings for quality improvement in customer service, i.e. for training purposes (coaching) with our employees. The content of the information we store depends on the information you provide to us as part of our communications.
        </Text>
        <Text style={styles.bulletPoint}>- Categories of personal data: Contact information, Order history and information</Text>

        <Text style={styles.subtitle}>4. Mergers & Acquisitions, Change of Ownership</Text>
        <Text style={styles.paragraph}>
          In the event of a merger with or acquisition by another company, we will disclose certain limited information to that company. Prior to disclosure, we will ensure that the recipient company undertakes to protect your personal data to a comparable standard to that under the law and this privacy policy, and also that the company complies with applicable data protection laws and regulations. We will endeavour to keep the extent of the data shared with the other company to the absolute minimum required in order to conclude the transaction.
        </Text>
        <Text style={styles.bulletPoint}>- Categories of personal data: Delivery data, Location data, Profile data (master data), Device information and access data, Order data, Customer care data, Marketing contact and communications data, Payment data, Voucher information</Text>

        <Text style={styles.subtitle}>5. Who we share your personal data with</Text>
        <Text style={styles.paragraph}>
          We never give your data to unauthorized third parties. However, in order to run our business efficiently, we obtain the services of selected service providers and give them limited and strictly monitored access to some of our data, in order to fulfil the Purposes. Before we forward personal data to these partner companies for processing on our behalf, each individual company undergoes an audit. All data recipients must meet the legal data protection requirements and undertake to protect your personal data to a comparable standard as required under the relevant data protection laws.
        </Text>

        <Text style={styles.subtitle}>6. Your Consent</Text>
        <Text style={styles.paragraph}>
          By using our platform, you consent to our collection and use of your personal data as described in this Privacy Policy. If we change our privacy policies and procedures, we will post those changes on our platform to keep you aware of what information we collect, how we use it, and under what circumstances we may disclose it.
        </Text>

        <Text style={styles.subtitle}>7. Governing Law</Text>
        <Text style={styles.paragraph}>
          These terms and conditions are governed by and construed in accordance with the laws of Pakistan. You agree, as do we, to submit to the exclusive jurisdiction of the courts in Pakistan.
        </Text>

        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isChecked}
            onValueChange={setIsChecked}
            style={styles.checkbox}
          />
          <Text style={styles.label}>I accept the Terms and Conditions</Text>
        </View>
        <TouchableOpacity onPress={handleAccept} style={styles.button}>
          <Text style={styles.buttonText}>Accept</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default TermsAndConditions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 40 : 16, // Adjust paddingTop for iOS to accommodate status bar
    paddingHorizontal: 16,
  },
  backButton: {
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000',
    flex: 1,
  },
  placeholder: {
    width: 24, // Placeholder to center the title
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#49243E',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#49243E',
  },
  subsubtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#49243E',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 22,
    color: '#666666',
    marginBottom: 10,
  },
  bulletPoint: {
    fontSize: 16,
    lineHeight: 22,
    color: '#666666',
    marginBottom: 5,
    marginLeft: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
    fontSize: 16,
    color: '#000',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
function alert(arg0: string) {
  throw new Error('Function not implemented.');
}

