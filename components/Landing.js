import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router'

const Landing = React.createClass({

  render() {
    return (
      <div>
        <h1>Book Share</h1>
        <p>You can share books with strangers here.</p>
        <Link to="/login" className="btn btn-lg btn-success">Join Us Now!</Link>
      </div>
    )
  }

})

module.exports = Landing
