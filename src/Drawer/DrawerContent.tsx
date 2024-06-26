import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCreditCard, faMapMarkerAlt, faUserPlus, faEnvelope, faQuestionCircle, faUser, faCog, faStar, faShieldAlt, faInfoCircle, faFileAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const userData = {
  name: 'Muhammad Ali Khan',
  address: '113 Johar Town, Lahore',
  profileImage: require('../assets/Images/profile.jpg'),
};

const DrawerContent: React.FC<DrawerContentComponentProps> = ({ navigation }) => {
  const navigateToScreen = (screenName: string) => () => {
    navigation.navigate(screenName);
  };

  const handleLogout = () => {
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.userContainer} onPress={navigateToScreen('Profile')}>
        <Image source={userData.profileImage} style={styles.profileImage} />
        <View style={styles.userDetails}>
          <Text style={styles.userName}>{userData.name}</Text>
          <Text style={styles.userAddress}>{userData.address}</Text>
        </View>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.drawerContent}>
        <TouchableOpacity style={styles.drawerItem} onPress={navigateToScreen('AddPaymentMethod')}>
          <FontAwesomeIcon icon={faCreditCard} style={styles.icon} />
          <Text style={styles.drawerItemText}>Payment Method</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={navigateToScreen('Adress')}>
          <FontAwesomeIcon icon={faMapMarkerAlt} style={styles.icon} />
          <Text style={styles.drawerItemText}>Address</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={navigateToScreen('BecomePro')}>
          <FontAwesomeIcon icon={faUserPlus} style={styles.icon} />
          <Text style={styles.drawerItemText}>Become Pro</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={navigateToScreen('ContactUs')}>
          <FontAwesomeIcon icon={faEnvelope} style={styles.icon} />
          <Text style={styles.drawerItemText}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={navigateToScreen('HelpCenter')}>
          <FontAwesomeIcon icon={faQuestionCircle} style={styles.icon} />
          <Text style={styles.drawerItemText}>Help Center</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={navigateToScreen('InviteFriends')}>
          <FontAwesomeIcon icon={faUserPlus} style={styles.icon} />
          <Text style={styles.drawerItemText}>Invite a Friend</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={navigateToScreen('Premium')}>
          <FontAwesomeIcon icon={faStar} style={styles.icon} />
          <Text style={styles.drawerItemText}>Premium Services</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={navigateToScreen('PrivacyPolicy')}>
          <FontAwesomeIcon icon={faShieldAlt} style={styles.icon} />
          <Text style={styles.drawerItemText}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={navigateToScreen('Profile')}>
          <FontAwesomeIcon icon={faUser} style={styles.icon} />
          <Text style={styles.drawerItemText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={navigateToScreen('RegisterFarm')}>
          <FontAwesomeIcon icon={faInfoCircle} style={styles.icon} />
          <Text style={styles.drawerItemText}>Register Farm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={navigateToScreen('UserGuidance')}>
          <FontAwesomeIcon icon={faFileAlt} style={styles.icon} />
          <Text style={styles.drawerItemText}>User Guide</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={navigateToScreen('TermsAndConditions')}>
          <FontAwesomeIcon icon={faFileAlt} style={styles.icon} />
          <Text style={styles.drawerItemText}>Terms Conditions & Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={navigateToScreen('Setting')}>
          <FontAwesomeIcon icon={faCog} style={styles.icon} />
          <Text style={styles.drawerItemText}>Settings</Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <FontAwesomeIcon icon={faSignOutAlt} style={styles.logoutIcon} />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 3,
    color: '#333',
  },
  userAddress: {
    fontSize: 14,
    color: '#666',
  },
  drawerContent: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginVertical: 3,
  },
  icon: {
    color: '#333',
    fontSize: 20,
    marginRight: 15,
  },
  drawerItemText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    marginTop: 'auto',
    paddingHorizontal: 20,
  },
  logoutIcon: {
    color: '#FF6347',
    fontSize: 20,
    marginRight: 15,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FF6347',
  },
});

export default DrawerContent;
