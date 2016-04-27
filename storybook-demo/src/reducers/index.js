import {
  ADD_POINTS,
  REMOVE_POINTS,
  CLEAR,
  CHANGE_OPACITY
} from '../actions'

export default createReducer(

  {},

  {

    [ ADD_POINTS ] (state, action) {

      let { points } = state
      return {
        ...state,
        points: points.concat(action.points)
      }

    },

    [ REMOVE_POINTS ] (state, action) {

      let { points } = state
      return {
        ...state,
        points: points.slice(points, - action.count)
      }

    },

    [ CLEAR ] (state, action) {

      return {
        ...state,
        points: []
      }

    },

    [ CHANGE_OPACITY ] (state, action) {

      let { opacity } = action
      return {
        ...state,
        opacity 
      }

    }
  }
)


function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}