import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import FarmHeader from './FarmHeader'
import FarmList from '../Components/FarmList'
import FarmNearYou from '../Components/FarmNearYou'
import SearchBar from '../Components/SearchBar'
import TopFarms from './TopFarms'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppProducts from '../Components/AppProducts'
import { useNavigation } from '@react-navigation/native';

const Farm = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaProvider>
       <ScrollView style={styles.container} >
        <FarmHeader />
        <SearchBar />
        <TopFarms   navigation={navigation}/>
        <AppProducts />
        <FarmList />
        <FarmNearYou />
      </ScrollView>
    </SafeAreaProvider>
  )
}

export default Farm

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#f3f3f3',
  }
})
