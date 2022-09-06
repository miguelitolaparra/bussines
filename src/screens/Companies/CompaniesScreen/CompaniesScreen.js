import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Icon } from 'react-native-elements'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'

import { screen } from '../../../utils'
import Styles from './Styles'


export function CompaniesScreen(props) {
  const { navigation } = props
  const [currentUser, setCurrentUser] = useState(null)
  const [restaurants, setRestaurants] = useState(null)

  useEffect(() => { // checking if the user is logged in
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  const gotAddCompany = () => {
    navigation.navigate(screen.company.addCompany)

    //  IMPORTANTE: 
    // si navegamos a otro Stack lo haremos del siguiente modo
    //navigation.navigate(screen.account.tab, {screen: screen.account.account})
  }
  return (
    <View style={Styles.content}>

      {currentUser && ( // we show the button if it is a logged user
        <Icon
          // directs us to the page to add a new company
          reverse
          type="material-community"
          name="plus"
          color="#4ca4c4"
          containerStyle={Styles.btnContainer}
          onPress={gotAddCompany}
        />
      )}
    </View>
  )
}
