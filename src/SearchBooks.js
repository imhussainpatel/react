import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BooksGrid from './BooksGrid'

class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array,
    query: PropTypes.string,
    onUpdateShelf: PropTypes.func.isRequired,
    onUpdateQuery: PropTypes.func.isRequired,
  }
  render() {
    const { query,books,onUpdateShelf,onUpdateQuery} = this.props
    return (
      <div className="search-books">
      <div className="search-books-bar">
      <Link
        to='/'
        className="close-search"
      >Close</Link>
        {/* <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a> */}
        <div className="search-books-input-wrapper">
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
          <input type="text" placeholder="Search by title or author"
          value={query} onChange={(event) => onUpdateQuery(event.target.value)}/>

        </div>
      </div>
      <div className="search-books-results">
      {books.length>0 && (<BooksGrid 
      onUpdateShelf={onUpdateShelf}
      books={books}/>)}
      {books.length<=0 && ("No Results Available...")}
      </div>
    </div>
    )
  }
}

export default SearchBooks