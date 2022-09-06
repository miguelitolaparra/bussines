/// <summary>
/// Screen for when the user is not logged in
/// </summary>

import React from 'react'
import { ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Text, Button, Image } from 'react-native-elements'

import { screen } from '../../utils'
import Styles from './Styles'

export function UserGuestScreen() {
  const navigation = useNavigation()

  const goToLogin = () => {
    navigation.navigate(screen.account.login)
  }

  return (
    <ScrollView style={Styles.contentGuest}>
      <Image
        source={require("../../../assets/img/user-guest.png")}
        style={Styles.imageGuest}
      />
      <Text style={Styles.title}>Entra en tu perfil de Empresas</Text>
      <Text style={Styles.description}>
        ¿Como describirías la mejor empresa que contratastes? Busca y visualiza los mejores
        empresas de una forma sencilla, vota cual te ha gustado más y
        comenta como ha sito tu experiencia.
      </Text>

      <Button
        title="VER TU PERFIL"
        onPress={goToLogin}
        buttonStyle={Styles.btnStyle}
      />
    </ScrollView>
  )
}
