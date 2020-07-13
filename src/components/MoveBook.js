import React, { Component } from 'react';
import './MoveBook.css';

class MoveBook extends Component {

  updateShelf = event =>
    this.props.changeShelf(this.props.book, event.target.value);

  render() {
    const { book, books } = this.props;
    let currentShelf = 'none';
    for (let item of books) {
      if (item.id === book.id) {
        currentShelf = item.shelf;
        break;
      }
    }
    return (
      <div className="book-shelf-changer">
        <select onChange={this.updateShelf} defaultValue={currentShelf}>
          <option value="none" disabled>
            Move to...
          </option>
          {<option value="currentlyReading">Currently Reading</option>}
          {<option value="wantToRead">Want to Read</option>}
          {<option value="read">Read</option>}
          {<option value="none">Remove</option>}
        </select>
      </div>
    );
  }
}

export default MoveBook;
