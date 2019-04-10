import React from 'react'
import ReactDOM from 'react-dom'

import AppRouter from '../react/AppRouter'

document.addEventListener('DOMContentLoaded', () => {
  const reactElement = document.getElementById('react')

  if (reactElement) {
    ReactDOM.render(<AppRouter />,
    reactElement)
  }
})
