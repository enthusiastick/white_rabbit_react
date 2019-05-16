import React from 'react'
import {Field} from 'formik'

import Checkbox from '../components/formFields/Checkbox'
import TextArea from '../components/formFields/TextArea'

const SendMessageForm = props => (
  <form className='callout' onSubmit={props.handleSubmit}>
    <div className='form-inputs'>
      <Field
        component={TextArea}
        name='message'
        id='message'
        label='Message'
       />
      <Field
        component={Checkbox}
        name='clear'
        id='clear'
        label='Clear?'
      />
    </div>
    <div className='form-actions'>
      <button className='button' type='submit'>Send</button>
    </div>
  </form>
)

export default SendMessageForm
