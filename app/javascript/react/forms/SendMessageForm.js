import React from 'react'
import {Field} from 'formik'

const SendMessageForm = props => (
  <form onSubmit={props.handleSubmit}>
    <div className='form-inputs'>
      <Field name="message" />
    </div>
    <div className='form-actions'>
      <button type="submit">Send</button>
    </div>
  </form>
)

export default SendMessageForm
