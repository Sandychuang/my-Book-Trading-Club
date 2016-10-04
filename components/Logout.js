import React from 'react'
import auth from '../utils/auth'
import { browserHistory } from 'react-router'

const Logout = React.createClass({
  componentDidMount() {
    auth.logout()
    setTimeout(function () {
        browserHistory.push('/')
    },3000)
  },

  render() {
    return <p>You are now logged out</p>
  }
})

module.exports = Logout
