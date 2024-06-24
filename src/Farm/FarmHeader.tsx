import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const FarmHeader = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}><FontAwesomeIcon icon={faChevronLeft} size={25} style={styles.icon} /></Pressable>
        <Text style={styles.Title}>Cattel and Dariy Farms</Text>
        <View style={styles.rightIcons}>
          <FontAwesomeIcon icon={faMagnifyingGlass} size={25} style={styles.icon} />
          <FontAwesomeIcon icon={faHeart} size={25} style={styles.icon} />
        </View>
      </View>
    </View>
  )
}

export default FarmHeader

const styles = StyleSheet.create({
  container: {
    height: 50,
  },
  Title: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'system-ui',
    fontWeight: 'bold',
    position: 'absolute',
    left: 50,
    right: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  icon: {
    color: 'black',
    marginHorizontal: 5,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
