import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../pages/Home";
import { Arcade } from "../pages/Arcade";

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
        name="Arcade"
        component={Arcade}
        options={{
          headerTintColor: '#FFF',
          headerTitleStyle: {
            fontSize: 24
          },
          headerStyle: {
            backgroundColor: '#050B18'
          }
        }}
      />
    </Stack.Navigator>
  )
}
