import React, { Component, PropTypes } from 'react'

export class WithState extends Component {

  state = { }

  render() {
    let { handlers } = this.props
    let child = this.props.children

    let props = Object.assign({}, this.state)

    for (let act in handlers) {
      let prop = handlers[ act ]
      props[ act ] = (v) => {
        if (typeof(child.props[ act ]) === 'function')  {
          child.props[ act ](v)
        }
        this.setState({ [ prop ] : v })
      }
    }
    return React.cloneElement(child, props)
  }

}


WithState.propTypes = {
  children: PropTypes.object.isRequired
}


export const withState = (handlers, renderChildren) => () =>
  <WithState handlers={ handlers }>{ renderChildren() }</WithState>
