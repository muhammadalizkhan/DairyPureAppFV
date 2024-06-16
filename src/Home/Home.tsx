import { ScrollView, SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import TopBarkiers from '../Components/TopBarkiers'
import BestChoice from '../Components/BestChoice'
import GetRegister from '../Components/GetRegister'
import TopFarms from '../Farm/TopFarms'
import AppBody from '../Components/AppBody'
import { useNavigation } from '@react-navigation/native'
import Catagoery from '../Components/Catagoery'
import AppProducts from '../Components/AppProducts'
import Discount from '../Components/Discount'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const Home = () => {
  const navigation = useNavigation();
  return (
    <GestureHandlerRootView style={styles.Maincontainer}> 
           <ScrollView>
            <Header />
            <AppBody navigation={navigation}/>
            <AppProducts />
            <TopFarms  navigation={navigation}/>
            <Catagoery />
            <BestChoice />
            <Discount />
            <TopBarkiers />
            <GetRegister />
           </ScrollView>
    </GestureHandlerRootView>
    
  )
}

export default Home

const styles = StyleSheet.create({
  Maincontainer: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
});
