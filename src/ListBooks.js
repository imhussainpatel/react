import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BooksGrid from './BooksGrid'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateShelf: PropTypes.func.isRequired,
  }
  render() {
    const { books,onUpdateShelf} = this.props
    //console.log(books);
    return (
      <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                  <BooksGrid 
                  onUpdateShelf={onUpdateShelf}
                  books={books.filter((b) => b.shelf === "currentlyReading")}/>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                  <BooksGrid 
                  onUpdateShelf={onUpdateShelf}
                  books={books.filter((b) => b.shelf === "wantToRead")}/>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                  <BooksGrid
                  onUpdateShelf={onUpdateShelf}
                  books={books.filter((b) => b.shelf === "read")}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
            <Link
            to='/search'
          >Add a book</Link>
            </div>
          </div>
    )
  }
}

export default ListBooks