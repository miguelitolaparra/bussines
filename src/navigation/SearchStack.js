/// <summary>
/// This is the Stack of our Search screens
/// Here we group the accesses from the bottom navigation bar
/// </summary>

import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { screen } from "../utils"
import { SearchScreen } from "../screens/SearchScreen"
const Stack = createNativeStackNavigator()

export function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.search.search}
        component={SearchScreen}
        options={{ title: "Buscador" }}
      />
    </Stack.Navigator>
  )
}
