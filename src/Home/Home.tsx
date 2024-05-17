import { ScrollView, SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import TopBarkiers from '../Components/TopBarkiers'
import BestChoice from '../Components/BestChoice'
import GetRegister from '../Components/GetRegister'
import TopFarms from '../Farm/TopFarms'
import AppBody from '../Components/AppBody'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Catagoery from '../Components/Catagoery'
import AppProducts from '../Components/AppProducts'
import Discount from '../Components/Discount'

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaProvider>
      <ScrollView>
        <View style={styles.Maincontainer}>
          <Header />
          <AppBody navigation={navigation} />
          <AppProducts />
          <TopFarms />
          <GetRegister />
          <Catagoery />
          <BestChoice />
          <Discount />
          <TopBarkiers />
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

export default Home;

const styles = StyleSheet.create({
  Maincontainer: {
    backgroundColor: '#f3f3f3',
  },
});
