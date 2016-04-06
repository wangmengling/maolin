import { createStore, combineReducers } from 'redux'

import todos from '../reducers/todos'
import { routerReducer } from 'react-router-redux'  //路由

export default function configureStore(initialState) {

  const reducer = combineReducers({
    todos,
    routing: routerReducer
  })

  const store = createStore(reducer, initialState)

  return store
}
