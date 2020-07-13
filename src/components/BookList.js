import React from 'react';
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';


const BookList = props => {
  const { books, changeShelf } = props;
  const shelfTypes = [
    { type: 'currentlyReading', title: 'Currently Reading' },
    { type: 'wantToRead', title: 'Want to Read' },
    { type: 'read', title: 'Read' }
  ];

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {shelfTypes.map((shelf, index) => {
          const shelfBooks = books.filter(book => book.shelf === shelf.type);
          return (
            <div className="bookshelf" key={index}>
              <h2 className="bookshelf-title">{shelf.title}</h2>
              <div className="bookshelf-books">
                <BookShelf books={shelfBooks} changeShelf={changeShelf} />
              </div>
            </div>
          );
        })}
        <div className="open-search">
          <Link to="/search">Search</Link>
        </div>
      </div>
    </div>
  );
};

export default BookList;
