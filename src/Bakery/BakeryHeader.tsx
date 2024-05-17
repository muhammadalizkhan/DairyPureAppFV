import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faHeart, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

const BakeryHeader = () => {
  return (
    <View style={styles.container} >
    <View style={styles.header}>
      <FontAwesomeIcon icon={faChevronLeft} size={25} style={styles.icon} />
      <View style={styles.rightIcons}>
        <FontAwesomeIcon icon={faMagnifyingGlass} size={25} style={styles.icon} />
        <FontAwesomeIcon icon={faHeart} size={25} style={styles.icon} />
      </View>
    </View>
    <View>
      <Text style={styles.Title}>Bakery Items</Text>
    </View>
  </View>
  )
}

export default BakeryHeader

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#49243E',
        height: 100,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
      },
      Title:{
        fontSize: 20,
        color: 'white',
        fontFamily: 'system-ui',
        fontWeight: 'bold',
        marginLeft: 25,
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
      },
      icon: {
        color: 'white',
        marginHorizontal: 10,
      },
      rightIcons: {
        flexDirection: 'row',
        alignItems: 'center',
      },
})