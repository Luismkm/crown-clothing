import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import FormInput from '../../components/form-input/form-input.component'
import Button from '../button/button.component'

import { SignUpContainer } from './sign-up-form.styles'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}


const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if(password !== confirmPassword){
      alert("passwords do not match")
      return
    }

    try {
      const {user} = await createAuthUserWithEmailAndPassword(email, password)
      await createUserDocumentFromAuth(user, { displayName })
      resetFormFields()
    } catch (error) {
      if(error.code === 'auth/email-already-in-use'){
        alert('Cannot create user, email already in use')
      }else {
        console.log("user creation encountered an error", error)
      }
    }

  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({...formFields, [name]: value})
  }

  return (
    <SignUpContainer>
      <h2>Dont have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <label></label>

        <FormInput
          label="Display Name"
          required 
          onChange={handleChange} 
          name="displayName" 
          value={displayName} 
        />

        <FormInput 
          label="Enail"
          type="email" 
          required 
          onChange={handleChange} 
          name="email" 
          value={email} 
        />

        <FormInput
          label="Password"
          type="password" 
          required 
          onChange={handleChange} 
          name="password" 
          value={password} 
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required 
          onChange={handleChange} 
          name="confirmPassword" 
          value={confirmPassword}
        />

        <Button type="submit">Sign up</Button>
    
      </form>
    </SignUpContainer>
  )
}

export default SignUpForm