import { Meteor } from 'meteor/meteor';
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from '../project/containers/App'
import configureStore from '../project/store/configureStore'
import 'todomvc-app-css/index.css'



Meteor.startup(() => {
  const store = configureStore()
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
})
