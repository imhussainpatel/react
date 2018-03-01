import React, { Component } from 'react';
import PropTypes from 'prop-types'

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
        var image=(book.imageLinks && book.imageLinks.thumbnail?book.imageLinks.thumbnail:'')
        var shelf=(book.shelf?book.shelf:"none")
        return <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+ image +')' }}></div>
              <div className="book-shelf-changer">
                <select value={shelf} onChange={(event) => onUpdateShelf(book,event.target.value)}>
                  <option value="" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors && book.authors.length>0 && book.authors.reduce((el, a) => el.concat(a, <br key={a}/>), [])}</div>
          </div>
        </li> 
      })}
      </ol>
    )
  }
}

export default BooksGrid