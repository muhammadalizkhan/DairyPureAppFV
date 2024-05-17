import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BakeryHeader from './BakeryHeader'
import SearchBar from '../Components/SearchBar'
import BakereyHome from '../Components/BakereyHome'
import TopBarkiers from '../Components/TopBarkiers'
import GetRegister from '../Components/GetRegister'
import AppProducts from '../Components/AppProducts'
import Products from '../Products/Products'

const Bakery = () => {
  return (
    <ScrollView>
      <BakeryHeader />
      <SearchBar />
      <BakereyHome />
      <TopBarkiers />
      <GetRegister />
    </ScrollView>
  )
}

export default Bakery

const styles = StyleSheet.create({})