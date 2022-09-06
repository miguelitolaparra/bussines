import React, { useState } from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import { getAuth, signOut } from 'firebase/auth'

import Styles from './Styles'
import { InfoUser, AccountOptions } from '../../components/Account'
import { LoadingModal } from '../../components/Shared'


export function UserLoggedScreen() {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("")
  const [_, setReload] = useState(false)

  const onReload = () => setReload((prevState) => !prevState)

  const logout = async () => { // we bring the functions of Firebase
    const auth = getAuth()
    await signOut(auth)
  }
  return (
    <View >
      <InfoUser setLoading={setLoading} setLoadingText={setLoadingText} />

      <AccountOptions onReload={onReload} />

      <Button
        title="CERRAR SESION"
        buttonStyle={Styles.btnStyles}
        titleStyle={Styles.btnTextStyle}
        onPress={logout}
      />

      <LoadingModal show={loading} text={loadingText} />
    </View>
  )
}
