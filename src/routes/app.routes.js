import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../pages/Home";
import { Arcade } from "../pages/Arcade";
import { Search } from "../pages/Search";
import { Detail } from "../pages/Detail";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  const defaultOptions = {
    headerTintColor: '#FFF',
    headerTitleStyle: {
      fontSize: 24
    },
    headerStyle: {
      backgroundColor: '#050B18'
    }
  };

  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen 
        name="Arcade"
        component={Arcade}
        options={defaultOptions}
      />
      <Stack.Screen 
        name="Search"
        component={Search}
        options={defaultOptions}
      />
      <Stack.Screen 
        name="Detail"
        component={Detail}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}
