import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/store'
import initialState from './store/initialState'

const store = configureStore(initialState)


import './styles/main.css'

let div = document.createElement('div')
document.body.appendChild(div)


render(
  <Provider store={ store }>
    <App />
  </Provider>,
  div
)


