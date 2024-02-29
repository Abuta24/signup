import * as yup from "yup"

 export const schema = yup.object().shape({
    firstName: yup.string().required('First Name is necessary').matches(/^[a-zA-Z]+$/, 'Only letters are allowed'),
    lastName: yup.string().required('Last Name is necessary').matches(/^[a-zA-Z]+$/, 'Only letters are allowed'),
    email: yup.string().email('Enter valid email').required('Email is necessary'),
    password: yup.string().required('Password is necessary').min(3, "Enter minimum of 4 characters").max(20, "Enter less than 20 characters")
  })