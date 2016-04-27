export const ADD_POINTS = 'ADD_POINTS'
export const REMOVE_POINTS = 'REMOVE_POINTS'
export const CLEAR = 'CLEAR'
export const CHANGE_OPACITY = 'CHANGE_OPACITY'

import { range } from 'd3'


export function addPoints(count) {
  let random = d3.random.normal(.5, .1)
  return {
    type: ADD_POINTS,
    points: range(count).map(() => range(2).map(random))
  }
}

export function removePoints(count) {
  return { type: REMOVE_POINTS, count  }
}

export function clear() {
  return { type: CLEAR  }
}

export function changeOpacity(opacity) {
  return { type: CHANGE_OPACITY, opacity  }
}
