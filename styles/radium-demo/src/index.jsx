import React from 'react'
import { render } from 'react-dom'
import Radium from 'radium'

const globalStyles = {
  fontFamily: 'Helvetica, sans-serif',
  fontSize: '2rem'
}

const styles = {
  app: {
    ...globalStyles,
    fontSize: '5rem',
    color: 'grey',
    ':hover': { background: 'lightgrey' }
  }
}

let App = () => <div style={styles.app}>Radium Demo</div>
App = Radium(App)

render(
  <App />,
  document.getElementById('app')
)
