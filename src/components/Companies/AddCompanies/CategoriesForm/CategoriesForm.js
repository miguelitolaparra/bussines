import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Picker } from '@react-native-picker/picker'

import Styles from './Styles'

export function CategoriesForm() {

  const [category, setCategory] = useState('Unknown')

  return (

    <View style={Styles.content}>

      <Picker
        selectedValue={category}
        onValueChange={(value, index) => setCategory(value)}
        mode="dropdown" // Android only

        itemStyle={{ height: 80 }}
      >
        <Picker.Item label="- Seleciona Una Categoría - " value="Unknown" />
        <Picker.Item label="Agricultura" value="agricultura" />
        <Picker.Item label="Alimentacion" value="alimentación" />
        <Picker.Item label="Automoción" value="automocion" />
        <Picker.Item label="Energia" value="energia" />
        <Picker.Item label="Deportes" value="deportes" />
        <Picker.Item label="Comercios" value="comercios" />
        <Picker.Item label="Construcción" value="construccion" />
        <Picker.Item label="Hosteleria" value="hosteleria" />
        <Picker.Item label="Internet" value="internet" />
        <Picker.Item label="Logistica - Transporte" value="transporte" />
        <Picker.Item label="Medios" value="medios" />
        <Picker.Item label="Servicios" value="servicios" />
        <Picker.Item label="Tecnología" value="tecnologia" />
        <Picker.Item label="Turismo" value="turismo" />
      </Picker>
      {/*  <Text style={Styles.text}>Categoria : {category}</Text> */}
    </View>

  )
}
