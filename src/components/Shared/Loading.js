/// <summary>
/// We create a Loading to show while loading the images of each restaurant
/// </summary>

import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { Text } from 'react-native-elements'

import Styles from './Styles'

export function Loading(props) {

  const { show, text } = props

  if (!show) return null

  return (
    <View style={Styles.contentLoading}>
      <ActivityIndicator size="large" color="#91c43e" />
      {text && <Text style={Styles.textLoading}>{text}</Text>}
    </View>
  )
}