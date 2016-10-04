import React from 'react'
import { Label, PageHeader } from 'react-bootstrap'
import BookList from './BookList/BookList'

const PageOne = React.createClass({
    getBooksFromDouban() {
        $.ajax({
            url: 'https://api.douban.com/v2/book/search?q=python&count=25&fields=id,title,image,pubdate,alt&callback=?',
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({ data: data })
                console.log(this.state.data)
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(status, err.toString())
            }.bind(this)
        })
    },
    getInitialState: function() {
        return {
            data: {
                "count": 25,
                "start": 0,
                "total": 1162,
                "books": [{
                    "image": "https://img3.doubanio.com/mpic/s2721950.jpg",
                    "title": "The Complete Monty Python's Flying Circus",
                    "alt": "https://book.douban.com/subject/1886640/",
                    "id": "1886640"
                }]
            }
        }
    },
    componentDidMount() {
        this.getBooksFromDouban()
    },
    render() {
        return ( 
            <div>
            <PageHeader>Page One<small> We have <Label bsStyle="info">{ this.state.data.count }</Label> books.</small> < /PageHeader> <BookList data = { this.state.data.books }
            /> 
            </div>
        )
    }
})

module.exports = PageOne
