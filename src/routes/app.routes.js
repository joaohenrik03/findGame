import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../pages/Home";
import { Search } from "../pages/Search";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
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
        name="Search"
        component={Search}
      />
    </Stack.Navigator>
  )
}
