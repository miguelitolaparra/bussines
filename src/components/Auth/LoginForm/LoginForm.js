/// <summary>
/// This is the form for the user to Login
/// I will use Formik and firebase to save the user data
/// </summary>

import React, { useState } from 'react'
import { View } from 'react-native'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { Icon, Button, Input } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import Toast from "react-native-toast-message"
import { useFormik } from 'formik'

import { Styles } from '../Styles'
import { screen } from '../../../utils'
import { initialValues, validationSchema } from './LoginForm.data'

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const navigation = useNavigation()

  // show and hide the password
  const onShowHidePassword = () => setShowPassword((prevState) => !prevState)

  // we use formik to validate the data
  // and show the errors
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const auth = getAuth()
        await signInWithEmailAndPassword( // authenticating the user in Firebase
          auth,
          formValue.email,
          formValue.password
        )
        navigation.navigate(screen.account.account)
      } catch (error) {
        Toast.show({ // With Toast we show the errors 
          type: "error",
          position: "bottom",
          text1: "Usuario o contraseña incorrectos",
        })
      }
    },
  })
  
  return ( // showing the form on the screen
    <View style={Styles.content}>
      <Input
        // input email
        placeholder="Correo electronico"
        keyboardType="email-address"
        containerStyle={Styles.input}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={Styles.icon} />
        }
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />
      <Input
        // input password
        placeholder="Contraseña"
        containerStyle={Styles.input}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={Styles.icon}
            onPress={onShowHidePassword}
          />
        }
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />
      <Button
        title="INICIAR SESIÓN"
        containerStyle={Styles.btnContainer}
        buttonStyle={Styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  )
}
