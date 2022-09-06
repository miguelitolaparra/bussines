/// <summary>
/// This is the Stack of our Restaurant screens
/// Here we group the accesses from the bottom navigation bar
/// </summary>

import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { screen } from "../utils"
import { CompaniesScreen } from "../screens/Companies/CompaniesScreen/CompaniesScreen"
import { AddCompanyScreen } from "../screens/Companies/AddCompany/AddCompanyScreen"

const Stack = createNativeStackNavigator()

export function CompanyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.company.companies}
        component={CompaniesScreen}
        options={{ title: "Empresas" }}
      />
      <Stack.Screen
        name={screen.company.addCompany}
        component={AddCompanyScreen}
        options={{ title: "Nueva Empresa" }}
      />
    </Stack.Navigator>

  )
}
