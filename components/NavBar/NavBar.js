// modules/NavLink.js
import React from 'react'
import auth from '../../utils/auth'
import NavLink from '../NavLink/NavLink'
import { Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap'

export default React.createClass({
    getInitialState() {
    return {
      loggedIn: auth.loggedIn()
    }
  },

  updateAuth(loggedIn) {
    this.setState({
      loggedIn: !!loggedIn
    })
  },

  componentWillMount() {
    auth.onChange = this.updateAuth
    auth.login()
  },
  render() {
    return (
            <Navbar>
                <Navbar.Header>
                  <Navbar.Brand>
                    <a href="/">Book Share</a>
                  </Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                  <Nav>
                    <NavLink to="/">Home</NavLink>
                    {this.state.loggedIn ? (
                        <NavLink to="/mybooks">My Books</NavLink>
                    ) : (<li></li>)}
                    <NavLink to="/about">About</NavLink>
                  </Nav>
                  {this.state.loggedIn ? (
                      <Nav pullRight>
                            <NavLink to="/user/foo">User: Foo</NavLink>
                            <NavLink to="/logout">Log out</NavLink>
                          </Nav>
                    ) : (
                      <Nav pullRight>
                            <NavLink to="/login">Sign in</NavLink>
                          </Nav>
                    )}
                </Navbar.Collapse>
              </Navbar>
        )
  }
})