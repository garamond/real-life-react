import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'

import ControlPane from '../containers/ControlPane'
import ScatterPlot from '../components/ScatterPlot'

export default class App extends Component {

  render() {
    let { appState } = this.props
    let { addPoints, removePoints, clear, changeOpacity } = this.props
    return (
      <div className="App">

        <ControlPane {...{ appState, addPoints, removePoints, clear, changeOpacity }} />

        <ScatterPlot width={ 400 } height={ 400 }
                     opacity={ appState.opacity }
                     points={ appState.points }/>

      </div>
    )
  }

}


function mapStateToProps(state) {
  return {
    appState: state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
