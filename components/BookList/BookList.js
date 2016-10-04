import React from 'react'
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap'

import styles from './booklist.css'

const BookList = React.createClass({
    
    render() {
        var bookNodes = this.props.data.map(function(book){
            return (
                <Col xs={4} md={3} key={ book.id }>
                    <Thumbnail src={ book.image }>
                        <h4>{ book.title }</h4>
                        <p>{ book.pubdate }</p>
                        <p>
                          <Button bsStyle="primary">Want</Button>&nbsp;
                          <Button bsStyle="default" href={ book.alt } target="_blank">Peak</Button>
                        </p>
                    </Thumbnail>
                </Col>
                )
        })
        return(
            <Grid>
                <Row>
                    {bookNodes}
                </Row>
            </Grid>
            )
    }
})

module.exports = BookList