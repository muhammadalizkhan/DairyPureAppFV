import { SafeAreaView, ScrollView, ScrollViewBase, StyleSheet } from 'react-native'
import React from 'react'
import FarmHeader from './FarmHeader'
import FarmList from '../Components/FarmList'
import FarmNearYou from '../Components/FarmNearYou'
import SearchBar from '../Components/SearchBar'
import AppProducts from '../Components/AppProducts'
import TopFarms from './TopFarms'
import { ThemeProvider, useNavigation } from '@react-navigation/native'
import GetRegister from '../Components/GetRegister'

const Farm = () => {
  const navigation = useNavigation();
  return (
<SafeAreaView style={styles.container}>
      <ScrollView>
        <FarmHeader />
        <SearchBar />
        <AppProducts />
        <TopFarms navigation={navigation} />
        <FarmList />
        <FarmNearYou />
        <GetRegister />
      </ScrollView>
    </SafeAreaView>
  )
}


export default Farm

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f3f3',
  },
})
