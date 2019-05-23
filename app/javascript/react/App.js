import React from 'react'

import Hello from './containers/Hello'
import SignIn from './containers/SignIn'

import { BrowserRouter as Router, Route } from 'react-router-dom'

const AuthenticationContext = React.createContext({
  jwt: null,
  setJSONWebToken: () => {}
})

const App = () => {
  const [jwt, setJSONWebToken] = React.useState(null)

  return(
    <AuthenticationContext.Provider value={{jwt, setJSONWebToken}}>
      <Router>
        <div className='grid-container'>
          <Route path='/' exact component={Hello} />
          <Route path='/sign-in' exact component={SignIn} />
        </div>
      </Router>
    </AuthenticationContext.Provider>
  )
}

export default App
