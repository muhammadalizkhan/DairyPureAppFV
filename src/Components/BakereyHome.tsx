import { StyleSheet, FlatList, Image, Dimensions, Animated, Text, View } from 'react-native'
import React from 'react'
import { Bakeries, bakeries } from '../Data/data';


const BakereyHome = () => {
    const renderItem = ({ item }: { item: Bakeries }) => (
      <View>
        <View style={styles.slides}>
        <Image style={styles.img} source={item.image} />
        <Text style={styles.name}>{item.name}</Text>
      </View>
      </View>
    );
  
    return (
      <View style={styles.container}>
          <Text style={styles.title}>Top Barkeries</Text>
         <FlatList
          data={bakeries}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
         />
      </View>
    )
  }

export default BakereyHome

const styles = StyleSheet.create({
    container: {
      height: 200,
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#49243E',
      marginLeft: 10,
    },
    slides:{
        marginLeft: 15,
    },
    img: {
      width: 130,
      height: 100,
      borderRadius: 10,
      elevation: 5,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      marginHorizontal: 10,
      marginTop: 5,
      textAlign: 'center',
      color: 'black',
    },
    flatListContent: {
      alignItems: 'center',
    },
  });