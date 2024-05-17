import { createDrawerNavigator } from '@react-navigation/drawer';
import Farm from '../Farm/Farm';
import Barkery from '../Bakery/Bakery';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Farm" component={Farm} />
      <Drawer.Screen name="Article" component={Barkery} />
    </Drawer.Navigator>
  );
}