// modules/NavLink.js
import React from 'react'
import { Link } from 'react-router'

import styles from './navlink.css'

export default React.createClass({
  render() {
    return <li><Link {...this.props} activeClassName="active"/></li>
  }
})
