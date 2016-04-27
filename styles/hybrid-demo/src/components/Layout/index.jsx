import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'

export default (props) =>
  <div className='container'>
    <div className='row'>
      <div className='col-md-12'>
        {props.children}
      </div>
    </div>
  </div>
