import React, { useState } from 'react'
import { View } from 'react-native'
import { Icon, Input, Button } from 'react-native-elements'
import { useFormik } from 'formik'
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword
} from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-toast-message'

import { Styles } from '../Styles'
import { screen } from '../../../utils'
import { initialValues, validationSchema } from './RegisterForm.data'

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showRepeatPassword, setShowRepeatPassword] = useState(false)

  const navigation = useNavigation()

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(), // validate the form data
    validateOnChange: false,
    onSubmit: async ({ email, password }) => {
      try { // send the data to Firebase
        const auth = getAuth()

        /*  await createUserWithEmailAndPassword(
           auth,
           formValue.email,
           formValue.password
         ) */
        //await sendEmailVerification(auth.currentUser)
        /*  const credential = await createUserWithEmailAndPassword(
           auth,
           formValue.email,
           formValue.password
         )
         console.log(credential) */

         createUserWithEmailAndPassword(auth, email, password).then(
          async ({ user }) => {
  
            if (user.emailVerified === false) {
              sendEmailVerification(auth.currentUser).then(async () => {
                await signOut(auth)
              });
            }
            
          }
        )
       
      } catch (error) {
        // We use Toast to display errors to the user
        // you are free to use whatever message you want
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Error al registrarse, intentelo mas tarde",
        })
      }

    },
  })

  // function to hide or show the password
  const showHidenPassword = () => setShowPassword((prevState) => !prevState)
  const showHidenRepeatPassword = () => setShowRepeatPassword((prevState) => !prevState)

  return (
    <View style={Styles.content}>
      <Input
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
        placeholder="Contraseña"
        containerStyle={Styles.input}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={Styles.icon}
            onPress={showHidenPassword}
          />
        }
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />
      <Input
        placeholder="Repetir contraseña"
        containerStyle={Styles.input}
        secureTextEntry={showRepeatPassword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showRepeatPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={Styles.icon}
            onPress={showHidenRepeatPassword}
          />
        }
        onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
        errorMessage={formik.errors.repeatPassword}
      />
      <Button
        title="REGISTRATE"
        containerStyle={Styles.btnContainer}
        buttonStyle={Styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}// show loading while doing user registration
      />
    </View>
  )
}
