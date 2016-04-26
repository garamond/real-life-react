import React from 'react'
import { render } from 'react-dom'

require("./styles.scss");

let App = () =>
  <div className="layout">
    <div className="app">
      SCSS Demo
    </div>  
  </div>

render(
  <App />,
  document.getElementById('app')
)
