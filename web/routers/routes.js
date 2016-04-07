import React from 'react'
import { Route, IndexRoute, Link } from 'react-router'

import App from "../containers/App"
import TopicDetail    from '../components/topic/detail.jsx'
import Topic    from '../components/topic/topic.js'

const Home = () => (<div>Home!</div>)
const Foo = () => (<div>Foo!</div>)
const Bar = () => (<div>Bar!</div>)

const routes = (
  <Route path="/" component={App}>
    // <IndexRoute component={Home}/>

    <Route path="topic" component={Topic}>
        <Route  path="topic/:topicId" component={TopicDetail}/>
    </Route>
    <Route path="foo" component={Foo}/>
    <Route path="bar" component={Bar}/>
  </Route>
)

export default routes
