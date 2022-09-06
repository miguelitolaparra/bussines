/// <summary>
/// This is the Stack of our Account screens
/// Here we group the accesses from the bottom navigation bar
/// </summary>

import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { screen } from "../utils"
import {
  AccountScreen,
  LoginScreen,
  RegisterScreen
} from "../screens/Account"

const Stack = createNativeStackNavigator()

export function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.account.account}
        component={AccountScreen}
        options={{ title: "Mi Cuenta" }}
      />
      <Stack.Screen
        name={screen.account.login}
        component={LoginScreen}
        options={{ title: "Inicía Sesión" }}
      />
      <Stack.Screen
        name={screen.account.register}
        component={RegisterScreen}
        options={{ title: "Crea una Cuenta" }}
      />
    </Stack.Navigator>
  )
}