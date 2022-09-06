/// <summary>
/// This is the Stack of our Category screens
/// Here we group the accesses from the bottom navigation bar
/// </summary>

import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { screen } from "../utils"
import { CategoriesScreen } from "../screens/Categories/CategoriesScreen"

const Stack = createNativeStackNavigator()

export function CategoryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.category.category}
        component={CategoriesScreen}
        options={{ title: "Categorias" }}
      />
    </Stack.Navigator>
  )
}
