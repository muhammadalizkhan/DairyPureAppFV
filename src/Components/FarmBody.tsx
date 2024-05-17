import { StyleSheet, Image, TextInput, TouchableOpacity, View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const FarmBody = () => {
  return (
    <View>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <FontAwesomeIcon
            icon={faSearch}
            style={styles.searchIcon}
          />
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

export default FarmBody

const styles = StyleSheet.create({
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
  },
  container: {
    marginTop: 10,
    height: 280,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    flex: 1, // Take as much space as available
  },
  titleBody: {
    flexDirection: 'row',
    alignItems: 'center', // Center vertically
    paddingHorizontal: 10, // Add padding for spacing
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Center vertically
  },
  icon: {
    marginRight: 5,
  },
  delivery: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
})


