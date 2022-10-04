import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

const BookInventory = (props) => {
  const booksArray = Array.from(props.books);
  const { getBooks, setBooks, setBookToUpdate } = props;

  useEffect(() => {
    getBooks();
  }, []);

  if (booksArray.length === 0) {
    return <>
      <h3>Please add a Book</h3>
      <div className="d-flex justify-content-center">
        <Link to="/add"><button type="button" className="btn btn-secondary">Add Book</button></Link>
      </div>
    </>
  }

  if (booksArray.length > 0) {
    return (
      <div className="mt-5">
        <h1 className="text-center border-bottom border-dark border-2 pb-3">Current Inventory</h1>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Binding</th>
              <th>Price</th>
              <th>Update / Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              booksArray.map(book => (
                <tr key={book.bookId}>
                  <Book book={book} books={booksArray} setBooks={setBooks} setBookToUpdate={setBookToUpdate} />
                </tr>
              ))
            }
          </tbody>
        </table>
        <div className="d-flex justify-content-center">
          <Link to="/add"><button type="button" className="btn btn-secondary">Add Book</button></Link>
        </div>
      </div>
    );
  }
};

export default BookInventory;