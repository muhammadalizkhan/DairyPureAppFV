import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import { faChevronLeft, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const UserGuidance = ({ navigation }: any) => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true); // Enable LayoutAnimation for Android
  }

  const toggleSection = (index: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    if (expandedSection === index) {
      setExpandedSection(null);
    } else {
      setExpandedSection(index);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <FontAwesomeIcon icon={faChevronLeft} size={24} color="#007AFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>User Guidance</Text>
        <View style={styles.placeholder} />
      </View>
      <ScrollView style={styles.scrollView}>
        {/* Welcome Section */}
        <TouchableOpacity style={styles.section} onPress={() => toggleSection(0)}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>Welcome to Dairy Pure</Text>
            <FontAwesomeIcon icon={faCaretDown} style={[styles.expandIcon, expandedSection === 0 && styles.rotateIcon]} />
          </View>
          {expandedSection === 0 && (
            <Text style={styles.description}>
              A comprehensive marketplace connecting cattle farmers, individual farms, bakeries, and Pakistani corporations. Offering organic and dairy products, it's the ultimate destination for quality-conscious consumers seeking farm-fresh goodness.
            </Text>
          )}
        </TouchableOpacity>

        {/* How to Use Section */}
        <TouchableOpacity style={styles.section} onPress={() => toggleSection(1)}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>How to Use the App</Text>
            <FontAwesomeIcon icon={faCaretDown} style={[styles.expandIcon, expandedSection === 1 && styles.rotateIcon]} />
          </View>
          {expandedSection === 1 && (
            <Text style={styles.description}>
              Easily navigate through the app using the bottom navigation bar. Explore products, manage your profile, and access premium services.
            </Text>
          )}
        </TouchableOpacity>

        {/* Premium Services Section */}
        <TouchableOpacity style={styles.section} onPress={() => toggleSection(2)}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>Premium Services</Text>
            <FontAwesomeIcon icon={faCaretDown} style={[styles.expandIcon, expandedSection === 2 && styles.rotateIcon]} />
          </View>
          {expandedSection === 2 && (
            <Text style={styles.description}>
              Unlock exclusive features with our premium services. Get access to advanced analytics, priority support, and more.
            </Text>
          )}
        </TouchableOpacity>

        {/* Manage Bank Details Section */}
        <TouchableOpacity style={styles.section} onPress={() => toggleSection(3)}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>Manage Your Bank Details</Text>
            <FontAwesomeIcon icon={faCaretDown} style={[styles.expandIcon, expandedSection === 3 && styles.rotateIcon]} />
          </View>
          {expandedSection === 3 && (
            <Text style={styles.description}>
              Add and manage your bank details securely. Navigate to the 'Bank Details' section in your profile to get started.
            </Text>
          )}
        </TouchableOpacity>

        {/* Update Address Section */}
        <TouchableOpacity style={styles.section} onPress={() => toggleSection(4)}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>Update Your Address</Text>
            <FontAwesomeIcon icon={faCaretDown} style={[styles.expandIcon, expandedSection === 4 && styles.rotateIcon]} />
          </View>
          {expandedSection === 4 && (
            <Text style={styles.description}>
              Keep your address up to date for smooth deliveries. Go to the 'Address Section' in your profile to update your details.
            </Text>
          )}
        </TouchableOpacity>

        {/* FAQs Section */}
        <TouchableOpacity style={styles.section} onPress={() => toggleSection(5)}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>FAQs</Text>
            <FontAwesomeIcon icon={faCaretDown} style={[styles.expandIcon, expandedSection === 5 && styles.rotateIcon]} />
          </View>
          {expandedSection === 5 && (
            <>
              <View style={styles.faqItem}>
                <Text style={styles.faqQuestion}>How do I register?</Text>
                <Text style={styles.faqAnswer}>Navigate to the registration page and fill out the required details.</Text>
              </View>
              <View style={styles.faqItem}>
                <Text style={styles.faqQuestion}>How do I add my bank details?</Text>
                <Text style={styles.faqAnswer}>Go to the 'Bank Details' section in your profile and add your bank information securely.</Text>
              </View>
              <View style={styles.faqItem}>
                <Text style={styles.faqQuestion}>How do I upgrade to Premium Services?</Text>
                <Text style={styles.faqAnswer}>Navigate to the 'Premium Services' section and choose your plan to upgrade.</Text>
              </View>
              <View style={styles.faqItem}>
                <Text style={styles.faqQuestion}>How do I update my address?</Text>
                <Text style={styles.faqAnswer}>Go to the 'Address Section' in your profile and update your current address.</Text>
              </View>
            </>
          )}
        </TouchableOpacity>

        {/* Products Section */}
        <TouchableOpacity style={styles.section} onPress={() => toggleSection(6)}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>Products</Text>
            <FontAwesomeIcon icon={faCaretDown} style={[styles.expandIcon, expandedSection === 6 && styles.rotateIcon]} />
          </View>
          {expandedSection === 6 && (
            <Text style={styles.description}>
              Explore our wide range of products including dairy, bakery items, and farm produce. Each category offers high-quality goods sourced directly from farmers and producers.
            </Text>
          )}
        </TouchableOpacity>

        {/* Dairy Products Section */}
        <TouchableOpacity style={styles.section} onPress={() => toggleSection(7)}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>Dairy Products</Text>
            <FontAwesomeIcon icon={faCaretDown} style={[styles.expandIcon, expandedSection === 7 && styles.rotateIcon]} />
          </View>
          {expandedSection === 7 && (
            <Text style={styles.description}>
              Our dairy products are sourced from organic farms ensuring the highest quality and freshness. Find milk, cheese, butter, and more.
            </Text>
          )}
        </TouchableOpacity>

        {/* Bakery Items Section */}
        <TouchableOpacity style={styles.section} onPress={() => toggleSection(8)}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>Bakery Items</Text>
            <FontAwesomeIcon icon={faCaretDown} style={[styles.expandIcon, expandedSection === 8 && styles.rotateIcon]} />
          </View>
          {expandedSection === 8 && (
            <Text style={styles.description}>
              Enjoy a variety of bakery items made with organic ingredients. From bread to pastries, we have everything to satisfy your cravings.
            </Text>
          )}
        </TouchableOpacity>

        {/* Farm Products Section */}
        <TouchableOpacity style={styles.section} onPress={() => toggleSection(9)}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>Farm Products</Text>
            <FontAwesomeIcon icon={faCaretDown} style={[styles.expandIcon, expandedSection === 9 && styles.rotateIcon]} />
          </View>
          {expandedSection === 9 && (
            <Text style={styles.description}>
              Our farm products include fresh fruits, vegetables, and other organic produce. Directly sourced from farms, ensuring quality and freshness.
            </Text>
          )}
        </TouchableOpacity>

        {/* Cattle Farm Registration Section */}
        <TouchableOpacity style={styles.section} onPress={() => toggleSection(10)}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>Cattle Farm Registration</Text>
            <FontAwesomeIcon icon={faCaretDown} style={[styles.expandIcon, expandedSection === 10 && styles.rotateIcon]} />
          </View>
          {expandedSection === 10 && (
            <Text style={styles.description}>
              Register your cattle farm to join our network. Enjoy benefits like better market access, support, and resources to help your farm thrive.
            </Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default UserGuidance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  placeholder: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000',
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
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  sectionHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#49243E',
  },
  expandIcon: {
    marginLeft: 5,
  },
  rotateIcon: {
    transform: [{ rotate: '180deg' }],
  },
  description: {
    fontSize: 16,
    color: '#666666',
    lineHeight: 22,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  faqItem: {
    backgroundColor: '#F3F3F3', // Lighter background for FAQs
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#49243E',
    marginBottom: 8,
  },
  faqAnswer: {
    fontSize: 16,
    color: '#666666',
    lineHeight: 20,
  },
});
