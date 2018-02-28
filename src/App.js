import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import escapeRegExp from 'escape-string-regexp'
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
      books: state.books.map((b) => (
        b.id === book.id?b=book:b=b))
    }))

    BooksAPI.update(book,newShelf)
  }
  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    if (query) {
      query = escapeRegExp(query)
      BooksAPI.search(query).then((books) => {
        this.setState({ searchBooks: books})
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
          books={this.state.books}
          />
        )}/>
        <Route path='/search' render={({ history }) => (
          <SearchBooks
          query={this.query}
          books={this.state.searchBooks}
          onUpdateQuery={this.updateQuery}
          onUpdateShelf={this.updateShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
