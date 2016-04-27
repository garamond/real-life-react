import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import d3 from 'd3'

import './Slider.scss'

export default class Slider extends Component {
 
  static props = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
  }
  
  componentDidMount() {
    let drag = d3.behavior.drag()
      .on('drag', this.handleDrag)

    d3.select(findDOMNode(this))
      .call(drag)
  }

  handleDrag = () => {
    let { width, onChange } = this.props
    let posY = d3.mouse(findDOMNode(this))[0],
        newValue = Math.max(0, Math.min(1,  posY / width))
    onChange(newValue)
  }

  render() {
    let { width, height, value, title } = this.props

    return (
      <svg className="Slider" width={ width } height={ height }>
        <rect className="Slider-fill" width={ width * value } height={ height } />
        <rect className="Slider-border" width={ width } height={ height } />
        <text x={ width/2 } y={ height/2 + 1 }>{
          title+': '+Math.round(value*100)+'%'
        }</text>
      </svg>
    )
  }

}

