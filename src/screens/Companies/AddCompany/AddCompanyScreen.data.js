/// <summary>
/// This file has the necessary validation for the form...
/// ... to add new restaurant
/// we will use "yup" one more time
/// </summary>
import * as Yup from 'yup'

export function initialVales() {
  return { // data displayed by the form
    name: "",
    category: "",
    address: "",
    phone: "",
    email: "",
    description: "",
    location: null,
    images: [],
  }
}

export function validationSchema() { // this is the data validation with Yup
  return Yup.object({
    name: Yup.string().required("Campo obligatorio"),
    category: Yup.string().required("Campo obligatorio"),
    address: Yup.string().required("Campo obligatorio"),
    phone: Yup.string().required("Campo obligatorio"),
    email: Yup.string()
      .email("No es un email valido")
      .required("Campo obligatorio"),
    description: Yup.string().required("Campo obligatorio"),
    location: Yup.object().required("La localización es requerida"),
    images: Yup.array()
      .min(1, "Se requiere una imagen como mínimo")
      .required("La imagen es requerida"), 
  })
}
