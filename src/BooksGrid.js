import React from 'react';
import PropTypes from 'prop-types'
import Books from './Books'

function BooksGrid (props) {
    const { books,onUpdateShelf} = props
    return (
      <ol className="books-grid">
      {books.map((book) => {
        return <li key={book.id}>
          <Books 
          onUpdateShelf={onUpdateShelf}
          book={book}/>
        </li>
      })}
      </ol>
    )
}
BooksGrid.propTypes = {
  books: PropTypes.array.isRequired,
  onUpdateShelf: PropTypes.func.isRequired,
}
export default BooksGrid