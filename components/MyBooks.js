import React from 'react'
import { Button } from 'react-bootstrap'
import FieldGroup from './FieldGroup/FieldGroup'
import BookList from './BookList/BookList'

const MyBooks = React.createClass({
    searchBooksFromDouban(bookName) {
        $.ajax({
            url: 'https://api.douban.com/v2/book/search?q='+bookName+'&count=1&fields=id,title,image,pubdate,alt&callback=?',
            dataType: 'json',
            cache: false,
            success: function(data) {
                localStorage.books = JSON.stringify(JSON.parse(localStorage.books).concat(data.books))
                this.setState({ data: JSON.parse(localStorage.books) })
                console.log(this.state.data)
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(status, err.toString())
            }.bind(this)
        })
    },
    getInitialState: function() {
        return {
            data: localStorage.books ? JSON.parse(localStorage.books) : [{
                    "image": "https://img3.doubanio.com/mpic/s2721950.jpg",
                    "title": "The Complete Monty Python's Flying Circus",
                    "alt": "https://book.douban.com/subject/1886640/",
                    "id": "1886640"
                }]
        }
    },
    handleSubmit(event) {
        event.preventDefault()

        const bookName = document.getElementById('bookName').value

        this.searchBooksFromDouban(bookName)
      },
      render() {
        return (
            <div>
            <h2>My books! Wooo!</h2>
            <form onSubmit={this.handleSubmit}>
                  <FieldGroup
            id="bookName"
            type="text"
            label="Book Name"
            placeholder="Book Name"
            help="Please Enter the book name."
          />
            <Button bsStyle="success" type="submit" block>Add</Button>
          </form>
          <BookList data = { this.state.data } />
            </div>
            )
      }
})

module.exports = MyBooks
