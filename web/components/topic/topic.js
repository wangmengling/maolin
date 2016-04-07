import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../Header'
import MainSection from '../MainSection'
import * as TodoActions from '../../actions'
import { Link } from 'react-router'
class Topic extends Component {


  constructor(props) {
      super(props);
      this.state = {
          data: this.props.data || [],
          page: 1
      }
  }

  componentWillReceiveProps(nextProps) {
      this.setState({
          data: nextProps.data,
          page: 1
      });
  }

  componentDidMount() {
              $.get("https://cnodejs.org/api/v1/topics", function (response) {
                  this.setState({
                      data: this.state.data.concat(response.data),
                  }, function () {
                      loading = false;
                  });
              }.bind(this));
  }

  render() {
    const { todos, actions } = this.props
    return (
      <div>
        <Header addTodo={actions.addTodo} />
          {this.state.data.map(function (item) {
            console.log(item);
              return (
              <div className="media">
                  <div className="media-left">
                      <Link to="user-detail" params={{loginname:item.author.loginname}}>
                          <img className="media-object" src={item.author.avatar_url} width="40"
                               heigth="40" title={item.author.loginname}/>
                      </Link>
                  </div>
                  <div className="media-body">
                      <h4 className="media-heading">
                          <Link to="topic"  params={{topicId:item.id}}>{item.title}</Link>
                      </h4>

                      <p className="media-count">
                          <i className="fa fa-hand-pointer-o"></i>{item.visit_count}
                          <i className="fa fa-comment mg-l-5"></i>{item.reply_count}
                          <i className="fa fa-calendar mg-l-5"></i>发表于{item.create_at}
                      </p>
                  </div>
              </div>
                  )
              }.bind(this))}
      </div>
    )
  }
}

Topic.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default Topic
