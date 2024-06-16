import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './src/Home/Home'
import Farm from './src/Farm/Farm'
import Bakery from './src/Bakery/Bakery'
import Products from './src/Products/Products'
import Cart from './src/Cart/Cart'
import FarmInfo from './src/Farm/FarmInfo'
import FarmDetails from './src/Farm/FarmDetails'
import Checkout from './src/Checkout/Checkout'
import OrderConfirmed from './src/Checkout/OrderConfirmed'
import FamousProducts from './src/Components/FamousProducts'
import TopFarms from './src/Farm/TopFarms'
import Onbordingscreens from './src/WelcomeScreens/Onbordingscreens'
import SignUp from './src/Authentication/SignUp'
import ForgotPass from './src/Authentication/ForgotPass'
import Login from './src/Authentication/Login'
import BakeryHeader from './src/Bakery/BakeryHeader'
import BarkeryProducts from './src/Bakery/BarkeryProducts'
import Maps from './src/Maps/Maps'
import DrawerContent from './src/Drawer/DrawerContent'
import AddPaymentMethod from './src/DrawerContent/AddPaymentMethod'
import Adress from './src/DrawerContent/Adress'
import BecomePro from './src/DrawerContent/BecomePro'
import ContactUs from './src/DrawerContent/ContactUs'
import HelpCenter from './src/DrawerContent/HelpCenter'
import InviteFriends from './src/DrawerContent/InviteFriends'
import Premium from './src/DrawerContent/Premium'
import PrivacyPolicy from './src/DrawerContent/PrivacyPolicy'
import Profile from './src/DrawerContent/Profile'
import RegisterFarm from './src/DrawerContent/RegisterFarm'
import Setting from './src/DrawerContent/Setting'
import TermsAndConditions from './src/DrawerContent/TermsAndConditions'
import UserGuidance from './src/DrawerContent/UserGuidance'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home"               component={StackNavigator}     />
        <Drawer.Screen name="AddPaymentMethod"   component={AddPaymentMethod}   />
        <Drawer.Screen name="Adress"             component={Adress}             />
        <Drawer.Screen name="BecomePro"          component={BecomePro}          />
        <Drawer.Screen name="ContactUs"          component={ContactUs}          />
        <Drawer.Screen name="HelpCenter"         component={HelpCenter}         />
        <Drawer.Screen name="InviteFriends"      component={InviteFriends}      />
        <Drawer.Screen name="Premium"            component={Premium}            />
        <Drawer.Screen name="PrivacyPolicy"      component={PrivacyPolicy}      />
        <Drawer.Screen name="Profile"            component={Profile}            />
        <Drawer.Screen name="RegisterFarm"       component={RegisterFarm}       />
        <Drawer.Screen name="Setting"            component={Setting}            />
        <Drawer.Screen name="TermsAndConditions" component={TermsAndConditions} />
        <Drawer.Screen name="UserGuidance"       component={UserGuidance}       />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onbordingscreens"      component={Onbordingscreens} />
      <Stack.Screen name="ForgotPass"            component={ForgotPass}       />
      <Stack.Screen name="Login"                 component={Login}            />
      <Stack.Screen name="SignUp"                component={SignUp}           />
      <Stack.Screen name="Maps"                  component={Maps}             />
      <Stack.Screen name="Home"                  component={Home}             />
      <Stack.Screen name="Farm"                  component={Farm}             />
      <Stack.Screen name="TopFarms"              component={TopFarms}         />
      <Stack.Screen name="FarmInfo"              component={FarmInfo}         />
      <Stack.Screen name="FarmDetails"           component={FarmDetails}      />
      <Stack.Screen name="FamousProducts"        component={FamousProducts}   />
      <Stack.Screen name="Bakery"                component={Bakery}           />
      <Stack.Screen name="BakeryHeader"          component={BakeryHeader}     />
      <Stack.Screen name="BakeryProducts"        component={BarkeryProducts}  />
      <Stack.Screen name="Products"              component={Products}         />
      <Stack.Screen name="Cart"                  component={Cart}             />
      <Stack.Screen name="Checkout"              component={Checkout}         />
      <Stack.Screen name="OrderConfirmed"        component={OrderConfirmed}   />
    </Stack.Navigator>
  );
};

export default App;
