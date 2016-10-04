import React from 'react'
import { withRouter } from 'react-router'
import { Button, Alert } from 'react-bootstrap'
import FieldGroup from './FieldGroup/FieldGroup'
import auth from '../utils/auth.js'

const Login = React.createClass({
  getInitialState() {
    return {
      error: false
    }
  },

  handleSubmit(event) {
    event.preventDefault()

    const email = document.getElementById('email').value
    const pass = document.getElementById('password').value

    auth.login(email, pass, (loggedIn) => {
      if (!loggedIn)
        return this.setState({ error: true })

      const { location } = this.props

      if (location.state && location.state.nextPathname) {
        this.props.router.replace(location.state.nextPathname)
      } else {
        this.props.router.replace('/')
      }
    })
  },

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
              <FieldGroup
        id="email"
        type="email"
        label="Email address"
        placeholder="Enter email"
        help="Please Enter your email"
        defaultValue="joe@example.com"
      />
      <FieldGroup
        id="password"
        label="Password"
        type="password"
        help="Default password is `password1`"
      />
        <Button bsStyle="success" type="submit" block>Login</Button>
      </form>
      {this.state.error && (
          <Alert bsStyle="danger">Bad login information</Alert>
        )}
      </div>
    )
  }

})

module.exports = withRouter(Login)
