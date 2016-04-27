import React, { Component, PropTypes } from 'react'
import Button from '../components/Button'
import Slider from '../components/Slider'

class ButtonPane extends Component {

  static propTypes = {
    addPoints: PropTypes.func.isRequired,
    removePoints: PropTypes.func.isRequired,
    clear: PropTypes.func.isRequired,
    changeOpacity: PropTypes.func.isRequired
  }

  handleMore = () => {
    this.props.addPoints(100)
  }

  handleLess = () => {
    this.props.removePoints(100)
  }

  handleClear = () => {
    this.props.clear()
  }

  handleChangeOpacity = (opacity) => {
    this.props.changeOpacity(opacity)
  }

  render() {
    let { appState } = this.props
    return (
      <div className="ButtonPane">
        <Button onClick={ this.handleMore }>+100</Button>
        <Button onClick={ this.handleLess }>-100</Button>
        <Button onClick={ this.handleClear }>Clear</Button>

        <Slider width={ 200 } height={ 25 }
                        title="Opacity"
                        value={ appState.opacity }
                        onChange={ this.handleChangeOpacity } />

      </div>
    )
  }
}


export default ButtonPane
