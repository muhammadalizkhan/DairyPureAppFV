import { ScrollView, SafeAreaView, Text} from 'react-native'
import React from 'react'
import FarmInfo from './FarmInfo'
import AppProducts from '../Components/AppProducts'
import SearchBar from '../Components/SearchBar'
import Discount from '../Components/Discount'
import DairyProducts from '../Components/DairyProducts'

const FarmDetails = () => {
    return (
        <ScrollView>
            <SafeAreaView>
                <FarmInfo />
                <SearchBar/>
                <DairyProducts />
            </SafeAreaView>
        </ScrollView>
    )
}

export default FarmDetails