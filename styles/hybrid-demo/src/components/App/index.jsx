import React from 'react'

import styles from './App.css'

export default class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <div className='title'>Hybrid Demo</div>
        <div style={{display: this.props.active ? 'block' : 'none'}}>
          <ul>
            <li>Global CSS file (Bootstrap)</li>
            <li>Per-component CSS file, namespaced</li>
            <li>Inline styles for dynamic styling</li>
          </ul>
        </div>
      </div>
    )
  }
}
