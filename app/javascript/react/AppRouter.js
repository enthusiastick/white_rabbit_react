import React from 'react'
import Hello from './containers/Hello'

import { BrowserRouter as Router, Route } from 'react-router-dom'

const AppRouter = props => (
  <Router>
    <div>
      <Route path="/" exact component={Hello} />
    </div>
  </Router>
)

export default AppRouter
