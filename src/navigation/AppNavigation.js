import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Icon } from "react-native-elements"

import { CompanyStack } from "./CompanyStack"
import { CategoryStack } from "./CategoryStack"
import { FavoriteStack } from "./FavoriteStack"
import { TopStack } from "./TopStack"
import { SearchStack } from "./SearchStack"
import { AccountStack } from "./AccountStack"

import { screen } from "../utils"

const Tab = createBottomTabNavigator()

export function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#3e3e52",
        tabBarInactiveTintColor: "#2ca4c5",
        tabBarIcon: ({ color, size }) => screenIconsOptions(route, color, size)
      })}
    >
      <Tab.Screen
        name={screen.company.tab}
        component={CompanyStack}
        options={{ title: "Empresas" }}
      />
      <Tab.Screen
        name={screen.category.tab}
        component={CategoryStack}
        options={{ title: "Categorias" }}
      />
      <Tab.Screen
        name={screen.favorites.tab}
        component={FavoriteStack}
        options={{ title: "Favoritos" }}
      />
      <Tab.Screen
        name={screen.top.tab}
        component={TopStack}
        options={{ title: "Top 20" }}
      />
      <Tab.Screen
        name={screen.search.tab}
        component={SearchStack}
        options={{ title: "Buscar" }}
      />
      <Tab.Screen
        name={screen.account.tab}
        component={AccountStack}
        options={{ title: "Mi Cuenta" }}
      />
    </Tab.Navigator>
  )
}

// Function to add the icons to the bottom navigation bar
function screenIconsOptions(route, color, size) {
  let iconName

  if (route.name === screen.company.tab) {
    iconName = "factory"
  }
  if (route.name === screen.category.tab) {
    iconName = "dresser-outline"
  }
  if (route.name === screen.favorites.tab) {
    iconName = "heart-outline"
  }

  if (route.name === screen.top.tab) {
    iconName = "star-outline"
  }

  if (route.name === screen.search.tab) {
    iconName = "magnify"
  }

  if (route.name === screen.account.tab) {
    iconName = "home-outline"
  }

  return (
    <Icon type="material-community" name={iconName} color={color} size={size} />
  )
}

