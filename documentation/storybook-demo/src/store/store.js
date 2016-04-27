import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

const PROD = (process.env.NODE_ENV === 'production')

const middleware = [
  thunkMiddleware   // to support async actions
]
if (!PROD) {
  middleware.push(createLogger())
}


const createStoreWithMiddleware =
  applyMiddleware.apply(null, middleware)(createStore)




export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
