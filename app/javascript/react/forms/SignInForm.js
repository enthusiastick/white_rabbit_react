import React from 'react'
import {Field} from 'formik'

import Password from '../components/formFields/Password'
import Text from '../components/formFields/Text'

const SignInForm = props => (
  <form className='callout' onSubmit={props.handleSubmit}>
    <div className='form-inputs'>
      <Field
        component={Text}
        name='login'
        id='login'
        label='Email or username'
      />
      <Field
        component={Password}
        name='password'
        id='password'
        label='Password'
      />
    </div>
    <div className='form-actions'>
      <button className='button' type='submit'>Sign In</button>
    </div>
  </form>
)

export default SignInForm
