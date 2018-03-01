import React from 'react';
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    searchBooks:[],
    query:''
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  updateShelf = (book,newShelf) => {
    book.shelf=newShelf
    this.setState((state) => ({
      books: state.books.filter((b) => b.id !== book.id).concat([ book ])
    }))

    BooksAPI.update(book,newShelf)
  }
  userShelfBooksMatch=()=>{
    this.state.books.forEach(book => {
      var newSearchBooks=this.state.searchBooks.filter((b) => b.id !== book.id)
      if(newSearchBooks && newSearchBooks<this.state.searchBooks){
        this.setState((state) => ({
          searchBooks: newSearchBooks.concat([ book ])
        }))
      }
    });
  }
  updateQuery = (query) => {
    this.setState({ query })
    if (query) {
      query = escapeRegExp(query)
      BooksAPI.search(query).then((books) => {
        if(!books || books.error){
          this.setState({ searchBooks: [] })
        }else{
          this.setState({ searchBooks: books})
          this.userShelfBooksMatch();
        }
      })
    } else {
      this.setState({ searchBooks: [] })
    }
  }
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks
          onUpdateShelf={this.updateShelf}
          books={this.state.books.sort(sortBy('title'))}
          />
        )}/>
        <Route path='/search' render={({ history }) => (
          <SearchBooks
          query={this.state.query}
          books={this.state.searchBooks.sort(sortBy('title'))}
          onUpdateQuery={this.updateQuery}
          onUpdateShelf={this.updateShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
