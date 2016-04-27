import React, { PropTypes } from 'react'

const Button = ({ onClick, primary, children }) =>

  <button onClick={ onClick } style={ primary ? styles.primary : styles.normal }>
    { children }
  </button>

Button.propTypes = {
  onClick: PropTypes.func.isRequired
}

var styles = {
  normal: {
    color: '#000',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: 4,
    marginRight: 5
  },
  primary: {
    color: 'white',
    backgroundColor: 'steelblue',
    border: '1px solid steelblue',
    borderRadius: 4,
    marginRight: 5
  }
}

export default Button
