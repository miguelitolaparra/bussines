import React, { useState } from 'react'
import { View } from 'react-native'
import { Input, Text } from 'react-native-elements'
import { Picker } from '@react-native-picker/picker'

//import { MapForm } from './MapForm'
import Styles from './Styles'

export function InfoForm(props) {
  const { formik } = props
  const [showMap, setShowMap] = useState(false)

  const onOpenCloseMap = () => setShowMap((prevState) => !prevState)

  return (
    <>
      <View style={Styles.content}>
        <Input
          placeholder="Nombre de la Empresa"
        /* onChangeText={(text) => formik.setFieldValue("name", text)}
        errorMessage={formik.errors.name} */
        />

       
        {/* <Input
          placeholder="Categoria"
          onChangeText={(text) => formik.setFieldValue("category", text)}
         errorMessage={formik.errors.category}
        /> */}
        <Input
          containerStyle={Styles.inputSuperior}
          placeholder="Dirección"
          rightIcon={{
            type: "material-community",
            name: "map-marker-radius",
            //color: getColorIconMap(formik),
            //onPress: onOpenCloseMap,
          }}
          onChangeText={(text) => formik.setFieldValue("address", text)}
        // errorMessage={formik.errors.address}
        />
        <Input
          placeholder="Telefono"
          onChangeText={(text) => formik.setFieldValue("phone", text)}
          // errorMessage={formik.errors.phone}
          keyboardType="numeric"
        />
        <Input
          placeholder="Email"
          keyboardType="email-address"
        // onChangeText={(text) => formik.setFieldValue("email", text)}
        // errorMessage={formik.errors.email}
        />
        <Input
          placeholder="Descripción de la Empresa"
          multiline={true}

          inputContainerStyle={Styles.textArea}
        // onChangeText={(text) => formik.setFieldValue("description", text)}
        //errorMessage={formik.errors.description}
        />
      </View>
      {/*  // Show the Map modal */}
      {/* <MapForm show={ showMap } close={onOpenCloseMap} formik={formik} />  */}
    </>
  )
}

/* const getColorIconMap = (formik) => {
  if (formik.errors.location) return "#ff0000"

  if (formik.values.location) return "#00a680"

  return "#c2c2c2"
} */
