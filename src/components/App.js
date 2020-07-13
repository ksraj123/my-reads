import { Route, Switch } from 'react-router-dom';
import {getAll, update} from './BooksAPI';
import Error404page from './Error404page';
import BookList from './BookList';
import Search from './SearchBook';
import React from 'react';
import './App.css';

class BooksApp extends React.Component {
  state = { books: [] };

  changeShelf = (newBook, shelf) => {
    console.log("here");
    update(newBook, shelf).then(response => {
      newBook.shelf = shelf;
      this.setState(prevState => ({
        books: prevState.books
          .filter(book => book.id !== newBook.id)
          .concat(newBook)
      }));
    });
  };

  render() {
    return (
      <div className="app">
        <Switch>
          <Route path="/search" render={() => (
            <Search books={this.state.books} changeShelf={this.changeShelf} />)}/>
          <Route exact path="/" render={() => (
            <BookList books={this.state.books} changeShelf={this.changeShelf} />)}/>
          <Route component={Error404page} />
        </Switch>
      </div>
    );
  }

  componentDidMount() {
    getAll().then(books => this.setState({ books }));
  }
}

export default BooksApp;
