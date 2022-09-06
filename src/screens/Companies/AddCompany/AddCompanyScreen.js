import React from 'react'
import { View, ScrollView } from 'react-native'
import { Button } from 'react-native-elements'
import { useFormik } from 'formik'
import { useNavigation } from '@react-navigation/native'

import Styles from './Styles'
import { CategoriesForm } from '../../../components/Companies/AddCompanies/CategoriesForm'
import { InfoForm } from '../../../components/Companies/AddCompanies'
import { initialVales, validationSchema } from './AddCompanyScreen.data'
export function AddCompanyScreen() {

  const formik = useFormik({
    initialValues: initialVales(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const newData = formValue
        newData.id = uuid()
        newData.createdAt = new Date()

        /*  you can use this way to save the data in the database
          personally, I choose the one line option
          const myDb = doc( db, 'restaurants', newData.id)
          await setDoc(myDb, newData) */

        // store the restaurant data in the database
        await setDoc(doc(db, "companies", newData.id), newData)

        navigation.goBack()
      } catch (error) {
        console.log(error)
      }
    },
  })

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <CategoriesForm />
      <InfoForm />
      <Button
        title="AÑADE NUEVA EMPRESA"
        buttonStyle={Styles.addCompany}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </ScrollView>

  )
}
