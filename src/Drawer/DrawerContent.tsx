import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faStore, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const DrawerContent: React.FC<DrawerContentComponentProps> = ({ navigation }) => {
  const navigateToScreen = (screenName: string) => () => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.drawerItem} onPress={navigateToScreen('Home')}>
        <FontAwesomeIcon icon={faHome} style={styles.icon} />
        <Text style={styles.drawerItemText}>Payment Method</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={navigateToScreen('Farm')}>
        <FontAwesomeIcon icon={faStore} style={styles.icon} />
        <Text style={styles.drawerItemText}>Address</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={navigateToScreen('Cart')}>
        <FontAwesomeIcon icon={faShoppingCart} style={styles.icon} />
        <Text style={styles.drawerItemText}>Become Pro</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={navigateToScreen('Cart')}>
        <FontAwesomeIcon icon={faShoppingCart} style={styles.icon} />
        <Text style={styles.drawerItemText}>Contact US</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={navigateToScreen('Cart')}>
        <FontAwesomeIcon icon={faShoppingCart} style={styles.icon} />
        <Text style={styles.drawerItemText}>Help Center</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={navigateToScreen('Cart')}>
        <FontAwesomeIcon icon={faShoppingCart} style={styles.icon} />
        <Text style={styles.drawerItemText}>Invite a Friend</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={navigateToScreen('Cart')}>
        <FontAwesomeIcon icon={faShoppingCart} style={styles.icon} />
        <Text style={styles.drawerItemText}>Premium Serives</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={navigateToScreen('Cart')}>
        <FontAwesomeIcon icon={faShoppingCart} style={styles.icon} />
        <Text style={styles.drawerItemText}>Privacy Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={navigateToScreen('Cart')}>
        <FontAwesomeIcon icon={faShoppingCart} style={styles.icon} />
        <Text style={styles.drawerItemText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={navigateToScreen('Cart')}>
        <FontAwesomeIcon icon={faShoppingCart} style={styles.icon} />
        <Text style={styles.drawerItemText}>Get Regiester</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={navigateToScreen('Cart')}>
        <FontAwesomeIcon icon={faShoppingCart} style={styles.icon} />
        <Text style={styles.drawerItemText}>User Guide</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={navigateToScreen('Cart')}>
        <FontAwesomeIcon icon={faShoppingCart} style={styles.icon} />
        <Text style={styles.drawerItemText}>Term and Conditions / Data Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={navigateToScreen('Cart')}>
        <FontAwesomeIcon icon={faShoppingCart} style={styles.icon} />
        <Text style={styles.drawerItemText}>Setting</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    color: '#000',
    fontSize: 24,
    marginRight: 15,
  },
  drawerItemText: {
    fontSize: 18,
  },
});

export default DrawerContent;
