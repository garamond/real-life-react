import React from 'react'
import { render } from 'react-dom'

import App from './components/App'
import Layout from './components/Layout'

render(
  <Layout>
    <App active='true' />
  </Layout>,
  document.getElementById('app')
)
