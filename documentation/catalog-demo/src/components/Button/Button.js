import React, {Component, PropTypes} from 'react';

const styles = {
  button: {
    backgroundColor: '#fff',
    border: '2px solid #f55',
    borderRadius: 3,
    boxSizing: 'border-box',
    color: '#f55',
    cursor: 'pointer',
    display: 'inline-block',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: 'normal',
    margin: 0,
    outline: 'none',
    overflow: 'visible',
    padding: '0.5em 1em',
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'none',
    touchAction: 'manipulation',
    verticalAlign: 'middle',
  },
  primary: {
    color: '#fff',
    backgroundColor: '#f55'
  },
  large: {
    fontSize: '20px'
  },
  small: {
    fontSize: '12px'
  },
  disabled: {
    opacity: 0.8
  }
}

export default class Button extends Component {
  render() {
    const {primary, disabled, large, small, onClick, children} = this.props;
    let style = {
      ...styles.button,
      ...(primary ? styles.primary : null),
      ...(large ? styles.large : null),
      ...(small ? styles.small : null),
      ...(disabled ? styles.disabled : null)
    }

    return (
      <button
        style={style}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  onClick: () => {},
  primary: false,
  large: false,
  small: false,
  disabled: false
};
