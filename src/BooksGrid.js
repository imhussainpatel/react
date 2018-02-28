import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class BooksGrid extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateShelf: PropTypes.func.isRequired,
  }
  render() {
    const { books,onUpdateShelf} = this.props
    console.log(books);
    return (
      <ol className="books-grid">
      {books.map((book) => {
        console.log(book);
        return <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+ book.imageLinks.thumbnail +')' }}></div>
              <div className="book-shelf-changer">
                <select value={book.shelf} onChange={(event) => onUpdateShelf(book,event.target.value)}>
                  <option value="none" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{books.authors.length>0 && book.authors.reduce((el, a) => el.concat(a, <br key={a}/>), [])}</div>
          </div>
        </li> 
      })}
      </ol>
    )
  }
}

export default BooksGrid