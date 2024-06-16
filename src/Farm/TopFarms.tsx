import { StyleSheet, View, Image, Text, Dimensions, VirtualizedList, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faLocationCrosshairs, faMoneyBill, faMotorcycle, faStar } from '@fortawesome/free-solid-svg-icons'
import { TopCattelFarms, topCattelFarms } from '../Data/data'

const { width } = Dimensions.get('window');

const TopFarms = ({navigation}: any) => {

  const renderItem = ({ item }: { item: TopCattelFarms }) => (
    <Pressable onPress={() => navigation.navigate('FarmInfo')}>
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
            <Text style={styles.rating}>{item.rating}</Text>
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
          </View>
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
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Top Cattel Farms</Text>
      <VirtualizedList
        data={topCattelFarms}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        getItemCount={() => topCattelFarms.length}
        getItem={(data, index) => data[index]}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        pagingEnabled
        snapToInterval={width * 0.75 + 20}
        decelerationRate="fast"
      />
    </SafeAreaView>
  );
};

export default TopFarms;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#49243E',
    marginLeft: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    flex: 1,
  },
  titleBody: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 5,
  },
  delivery: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  slide: {
    width: width * 0.75,
    backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  img: {
    width: '100%',
    height: 180,
    borderRadius: 8,
  },
  details: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  detailText: {
    fontSize: 14,
    color: 'black',
    marginLeft: 10,
  },
  flatListContent: {
    alignItems: 'center',
  },
  rating: {
    color: 'green',
  },
});
