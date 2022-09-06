import React from 'react'
import { View, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Text, Image } from 'react-native-elements'

import { screen } from '../../utils'
import Styles from './Styles'
import { LoginForm } from '../../components/Auth'

export function LoginScreen() {
  const navigation = useNavigation()

  const goToRegister = () => {
    navigation.navigate(screen.account.register)
  }

  return (
    <ScrollView>
      <Image
        source={require("../../../assets/img/myLogo.png")}
        style={Styles.image}
      />
      <View style={Styles.content}>
        <LoginForm />

        <Text style={Styles.textRegister}>
          ¿No tienes cuenta...?{" "}
          <Text style={Styles.btnRegister} onPress={goToRegister}>
            Regístrate
          </Text>
        </Text>
      </View>
    </ScrollView>
  )
}
