import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BakeryHeader from './BakeryHeader'
import SearchBar from '../Components/SearchBar'
import BakereyHome from '../Components/BakereyHome'
import TopBarkiers from '../Components/TopBarkiers'
import GetRegister from '../Components/GetRegister'
import { SafeAreaView } from 'react-native-safe-area-context'
import {useNavigation } from '@react-navigation/native'

const Bakery = () => {
  const navigation = useNavigation();
 return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <BakeryHeader />
      <SearchBar />
      <BakereyHome />
      <TopBarkiers  navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Bakery

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f3f3f3',
  },
})