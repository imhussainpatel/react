import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Books from './Books'

class BooksGrid extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateShelf: PropTypes.func.isRequired,
  }
  render() {
    const { books,onUpdateShelf} = this.props
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
}

export default BooksGrid