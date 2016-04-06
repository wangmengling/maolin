import { Meteor } from 'meteor/meteor';
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from '../web/store/configureStore'  //redux store
import routes from '../web/routers/routes'    //路由规则


const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

Meteor.startup(() => {

  const node = (
    <Provider {...{store}}>
        <Router history={history} routes={routes} />
    </Provider>
  )

  ReactDOM.render(
    node,
    document.getElementById('root')
  )
})
