import React, { Component, PropTypes } from 'react'
import { scale } from 'd3';

import './ScatterPlot.scss'

export default class ScatterPlot extends Component {

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    opacity: PropTypes.number,
    points: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired
  }

  defaultProps = {
    opacity: 1
  }

  render() {
    let { width, height, opacity, points } = this.props
    let x = scale.linear().domain([0, 1]).range([0, width]),
        y = scale.linear().domain([0, 1]).range([height, 0])

    return (
      <svg className="ScatterPlot" width={ width } height={ height }>
        { points.map((d, i) =>
          <circle className="ScatterPlot__circle"
                  opacity={ opacity }
                  key={ i }
                  cx={ x(d[0]) } cy={ y(d[1]) }
                  r={ 3 }/>)}
      </svg>
    )
  }

}

