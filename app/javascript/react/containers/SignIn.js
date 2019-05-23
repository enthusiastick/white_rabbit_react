import React, {Component} from 'react'
import {Formik} from 'formik'
import {Redirect} from 'react-router-dom'

import Rails from '../constants/Rails'
import SignInForm from '../forms/SignInForm'

class SignIn extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      signedIn: false
    }
  }

  handleSubmit(values, {resetForm}) {
      Rails
        .url('/api/v1/sessions.json')
        .post(values)
        .json(json => {
          this.setState({signedIn: true})
        })
        .catch(error => {
          resetForm()
        })
  }

  render() {
    if (this.state.signedIn) {
      return <Redirect to ='/' />
    }

    return(
      <div className='grid-y align-center medium-grid-frame'>
        <div className='cell'>
          <h1 className='text-center'>Sign In</h1>
          <Formik
            initialValues={{ login: '', password: '' }}
            onSubmit={this.handleSubmit}
            render={formikProps => <SignInForm {...formikProps} />}
          />
        </div>
      </div>
    )
  }
}

export default SignIn
