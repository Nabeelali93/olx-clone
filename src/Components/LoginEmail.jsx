import React from 'react'
import { Field, Form, Formik } from 'formik';
import {auth } from '../Config/Firebase'
import {createUserWithEmailAndPassword } from "firebase/auth";



function LoginEmail() {
  return (
    <div>

<Formik
  initialValues={{
    email:"",
    password:""
  }}

  onSubmit={async value=>{
console.log(value)
createUserWithEmailAndPassword(auth,value.email,value.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
   alert(error.message)
  }); }}
  >



<Form>
      <label >email</label>
      <Field type="text" name="email" placeholder='email' required/>
      <br />
      <label placeholder='password'>password</label>
      <Field type="password" name="password" placeholder='email'/>

      <button type='submit'>submit</button>


</Form>




  </Formik>



</div>
      
  )
}

export default LoginEmail
