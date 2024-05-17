import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';
import { cattleFarms, bakeries } from '../Data/data';

const BestChoice = () => {
  return (
    <View>
      <Text style={styles.title}>Best Choice</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {cattleFarms.slice(0, 2).map((farm) => (
          <View key={farm.id} style={styles.slide}>
            <Image style={styles.img} source={farm.image} />
          </View>
        ))}
        {bakeries.slice(0, 2).map((bakery) => (
          <View key={bakery.id} style={styles.slide}>
            <Image style={styles.img} source={bakery.image} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
    color: '#49243E',
  },
  slide: {
    marginHorizontal: 10,
    marginTop: 5,
    alignItems: 'center',
  },
  img: {
    width: 140,
    height: 180,
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default BestChoice;
