import React from 'react'
import NavBar from './NavBar/NavBar'
import { Grid } from 'react-bootstrap'

const App = React.createClass({

  render() {
    return (
      <div>
        <NavBar />
        <Grid>
        {this.props.children}
        </Grid>
      </div>
    )
  }

})

module.exports = App
