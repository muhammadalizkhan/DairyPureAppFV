import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faHeart, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

const BakeryHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}><FontAwesomeIcon icon={faChevronLeft} size={30} style={styles.icon} /></TouchableOpacity>
      <Text style={styles.Title}>Bakries</Text>
      <View style={styles.rightIcons}>
        <FontAwesomeIcon icon={faMagnifyingGlass} size={25} style={styles.icon} />
        <FontAwesomeIcon icon={faHeart} size={25} style={styles.icon} />
      </View>
    </View>
  </View>
  )
}

export default BakeryHeader

const styles = StyleSheet.create({
    container: {
      },
      Title:{
        fontSize: 30,
        color: '#49243E',
        fontFamily: 'system-ui',
        fontWeight: 'bold',
        marginRight: 200,
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
      },
      icon: {
        color: '#49243E',
        marginHorizontal: 5,
      },
      rightIcons: {
        flexDirection: 'row',
        alignItems: 'center',
      },
})