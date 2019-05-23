import React from 'react'
import ReactDOM from 'react-dom'

import App from '../react/App'

document.addEventListener('DOMContentLoaded', () => {
  const reactElement = document.getElementById('react')

  if (reactElement) {
    ReactDOM.render(<App />,
    reactElement)
  }
})
