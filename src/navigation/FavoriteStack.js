/// <summary>
/// This is the Stack of our Favorites screens
/// Here we group the accesses from the bottom navigation bar
/// </summary>

import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { screen } from "../utils"
import { FavoriteScreen } from "../screens/FavoriteScreen"

const Stack = createNativeStackNavigator()

export function FavoriteStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.favorites.favorites}
        component={FavoriteScreen}
        options={{ title: "Mis Favoritos" }}
      />
    </Stack.Navigator>
  )
}
