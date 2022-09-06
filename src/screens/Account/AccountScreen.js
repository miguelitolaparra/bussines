/// <summary>
/// This is the configuration of the Account page
/// Here it is defined if the user is logged in or not
/// </summary>

import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import { UserLoggedScreen } from './UserLoggedScreen'
import { UserGuestScreen } from './UserGuestScreen'
import { LoadingModal } from '../../components/Shared'

export function AccountScreen() {
  const [hasLogged, setHasLogged] = useState(null)

  useEffect(() => {
    const auth = getAuth()
    //this is executed every time the user changes
    onAuthStateChanged(auth, (user) => {
      // selection of logged in user or non-logged in user
      setHasLogged(user ? true : false)
    })
  }, [])

  if (hasLogged === null) {
    return <LoadingModal show text="Cargando" />
  }
  return hasLogged ? <UserLoggedScreen /> : <UserGuestScreen />
}
