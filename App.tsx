import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/Home/Home'
import Farm from './src/Farm/Farm'
import Bakery from './src/Bakery/Bakery'
import Products from './src/Products/Products'
import Cart from './src/Cart/Cart'
import FarmInfo from './src/Farm/FarmInfo'
import FarmDetails from './src/Farm/FarmDetails'
import Checkout from './src/Checkout/Checkout'
import OrderConfirmed from './src/Checkout/OrderConfirmed'
const Stack = createNativeStackNavigator();

const App = () => {
  return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home"
            screenOptions={{
              headerShown: false
          }}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Bakery" component={Bakery}/>
            <Stack.Screen name="Products" component={Products}/>
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Farm" component={Farm}/>
            <Stack.Screen name='Checkout' component={Checkout} />
            <Stack.Screen name='FarmInfo' component={FarmInfo} />
            <Stack.Screen name='FarmDetails' component={FarmDetails} />
            <Stack.Screen name="OrderConfirmed" component={OrderConfirmed}/>
          </Stack.Navigator>
        </NavigationContainer>
 )
}

export default App
