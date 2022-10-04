import { React } from "react";
import { deleteBook } from "../../service/BooksDataService"
import { Link } from "react-router-dom"

const Book = (props) => {
  const { bookId, bookTitle, bookGenre, bookBinding, bookPrice } = props.book;

  const deleteAndRefresh = () => {
    deleteBook(bookId)
    const updatedBooks = props.books.filter(book => book.bookId !== bookId)
    props.setBooks(updatedBooks)
  }

  const updateButton = () => {
    props.setBookToUpdate(props.book)
  }


  return (
    <>
      <td>{bookTitle}</td>
      <td>{bookGenre}</td>
      <td>{bookBinding}</td>
      <td>{bookPrice}</td>
      <td style={{ width: "11em" }}>
        <Link to="/update" onClick={updateButton}><button type="button" className="btn btn-secondary btn-sm me-2">Update</button></Link>
        <button type="button" onClick={deleteAndRefresh} className="btn btn-secondary btn-sm">Delete</button>
      </td>
    </>
  );
};

export default Book;