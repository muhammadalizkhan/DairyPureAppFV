import React from 'react';
import { StyleSheet, View, Image, Text, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { TopBakeries, topbakeries } from '../Data/data';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLocationCrosshairs, faMoneyBill, faMotorcycle, faStar } from '@fortawesome/free-solid-svg-icons';


const TopBarkiers = () => {
  const renderItem = ({ item }: { item: TopBakeries }) => (
    <View style={styles.slide}>
      <Image style={styles.img} source={item.image} />
      <View style={styles.titleBody}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.ratingContainer}>
          <FontAwesomeIcon
            color='#49243E'
            size={18}
            style={styles.icon}
            icon={faStar}
          />
          <Text style={[styles.rating, styles.detailText]}>{item.rating}</Text>
        </View>
      </View>
      <View style={styles.details}>
        <View style={styles.delivery}>
          <FontAwesomeIcon
            icon={faMoneyBill}
            color='#49243E'
            size={18}
          />
          <Text style={styles.detailText}>{item.deliveryPrice}</Text>
          <View style={styles.delivery}>
          <FontAwesomeIcon
            icon={faMotorcycle}
            color='#49243E'
            size={18}
          />
          <Text style={styles.detailText}>{item.deliveryTime} | </Text>
          <FontAwesomeIcon
            icon={faLocationCrosshairs}
            color='#49243E'
            size={18}
          />
          <Text style={styles.detailText}>{item.location}</Text>
        </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.Bakriescontainer}>
        <Text style={styles.title}>Barkrie</Text>
          <TouchableOpacity>
            <Text style={styles.sellall}>See all</Text>
          </TouchableOpacity>
      </View>
      <FlatList
        data={topbakeries}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  )
}

export default TopBarkiers;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
  },
  Bakriescontainer: { 
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sellall:{
    fontSize: 15,
    marginRight: 10,
    padding: 10,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#49243E',
    marginLeft: 10,
    marginBottom: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  titleBody: {
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 4.5,
  },
  icon: {
    // marginLeft: 8,
  },
  delivery: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginLeft: 11,
  },
  slide: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 5,
    padding: 10,
  },
  img: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
  details: {},
  detailText: {
    fontSize: 14,
    color: 'black',
    marginLeft: 5,
  },
  flatListContent: {},
  rating: {
    color: 'green',
  },
});
