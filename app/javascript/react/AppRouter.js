import React from 'react'

import Hello from './containers/Hello'
import SignIn from './containers/SignIn'

import { BrowserRouter as Router, Route } from 'react-router-dom'

const AppRouter = props => (
  <Router>
    <div className='grid-container'>
      <Route path='/' exact component={Hello} />
      <Route path='/sign-in' exact component={SignIn} />
    </div>
  </Router>
)

export default AppRouter
