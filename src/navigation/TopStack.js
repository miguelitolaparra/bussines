/// <summary>
/// This is the Stack of our Top screens
/// Here we group the accesses from the bottom navigation bar
/// </summary>

import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { screen } from "../utils"
import { TopScreen } from "../screens/TopScreen"
const Stack = createNativeStackNavigator()

export function TopStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.top.top}
        component={TopScreen}
        options={{ title: "Empresas Top 20" }}
      />
    </Stack.Navigator>
  )
}
