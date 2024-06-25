import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const PrivacyPolicy = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <FontAwesomeIcon icon={faChevronLeft} size={24} color="#007AFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Privacy Policy</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Data Policy */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Data Policy</Text>
          <Text style={styles.sectionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero et
            posuere tincidunt. Nullam tempus maximus felis, at luctus lorem lobortis nec.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Privacy Policy</Text>
          <Text style={styles.sectionText}>
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien
            massa, convallis a pellentesque nec, egestas non nisi.
          </Text>
        </View>
      </View>
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
    textAlign: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007AFF',
  },
  sectionText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
});
