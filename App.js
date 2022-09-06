import { NavigationContainer } from '@react-navigation/native'
import Toast from 'react-native-toast-message'
import { initFirebase } from './src/utils'
import { AppNavigation } from './src/navigation/AppNavigation'

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
      <Toast />
    </>
  )
}
