import { StyleSheet, Text, Image, TextInput, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faCartShopping, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <View>
      <View style={styles.container}>
      <View style={styles.textContainer}>
      <TouchableOpacity>
        <FontAwesomeIcon icon={faBars} style={styles.icon}/>
      </TouchableOpacity>
        <View>
          <TouchableOpacity>
            <Text style={styles.mainText}>113 Johar Town</Text>
            <Text style={styles.subText}>Lahore, Punjab</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.iconContainer}
      >
        <FontAwesomeIcon icon={faHeart} style={styles.icon}/>
        <FontAwesomeIcon icon={faCartShopping} style={styles.icon}/>
      </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faSearch} style={styles.searchIcon}/>
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Search your Products & Farms Here"
          placeholderTextColor="#808080"
        />
        <TouchableOpacity>
          <Image
            source={require('../assets/Icons/FilterIcon.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default Header
const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#49243E',
    width: '90%',
    borderBottomRightRadius: 20,
    borderTopRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    color: 'white',
    fontSize: 50,
    marginRight: 10,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  subText: {
    fontSize: 12,
    color: 'white',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  searchContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    marginLeft: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    height: 50,
    width: '80%',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchIcon: {
    color: '#808080',
    fontSize: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#000000',
  }
})