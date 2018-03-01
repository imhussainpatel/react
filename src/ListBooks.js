import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BooksGrid from './BooksGrid' 
function ListBooks (props) {
  const { books,onUpdateShelf} = props
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
ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  onUpdateShelf: PropTypes.func.isRequired,
}
export default ListBooks