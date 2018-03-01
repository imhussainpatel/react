import React from 'react';
import PropTypes from 'prop-types'
import Books from './Books'

function BooksGrid (props) {
    return (
      <ol className="books-grid">
      {props.books.map((book) => {
        return <li key={book.id}>
          <Books 
          onUpdateShelf={props.onUpdateShelf}
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