import React from 'react'
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'

export default React.createClass({
  render() {
    return (
        <FormGroup controlId={this.props.id}>
          <ControlLabel>{this.props.label}</ControlLabel>
          <FormControl {...this.props} />
          {this.props.help && <HelpBlock>{this.props.help}</HelpBlock>}
        </FormGroup>
      )
      }
})