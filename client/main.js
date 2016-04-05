import { Meteor } from 'meteor/meteor';
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from '../project/containers/App'
import configureStore from '../project/store/configureStore'
import 'todomvc-app-css/index.css'



Meteor.startup(() => {
  const store = configureStore()
  const node = (
    <Provider
      store={store}
      >
      <App />
    </Provider>
  )
  ReactDOM.render(
    node,
    document.getElementById('root')
  )
})
