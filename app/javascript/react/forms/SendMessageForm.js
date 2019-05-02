import React from 'react'
import {Field} from 'formik'

import Checkbox from '../components/formFields/Checkbox'

const SendMessageForm = props => (
  <form onSubmit={props.handleSubmit}>
    <div className='form-inputs'>
      <Field name='message' />
      <Field
        component={Checkbox}
        name='clear'
        id='clear'
        label='Clear?'
      />
    </div>
    <div className='form-actions'>
      <button type='submit'>Send</button>
    </div>
  </form>
)

export default SendMessageForm
