import React from 'react'
import auth from '../utils/auth'
import { ButtonToolbar, Button } from 'react-bootstrap'

const Dashboard = React.createClass({
  render() {
    const token = auth.getToken()

    return (
      <div>
        <h1>Welcome to BookShare</h1>
        <p>You are now logged in!</p>
        <input type="hidden" value={token} />
        <ButtonToolbar>
          <Button bsStyle="success">Your trade requests</Button>
          <Button bsStyle="primary">Trade requests for you</Button>
        </ButtonToolbar>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Dashboard
