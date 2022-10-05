import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { updateBook } from '../../service/BooksDataService'
import { validGenre, validPrice } from '../../service/ValidationService';

const UpdateBook = ({ bookToUpdate }) => {
    const [updatedBook, setUpdatedBook] = useState(bookToUpdate);

    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        if (validGenre() && validPrice()) {
            updateBook(updatedBook)
                .then(() => navigate("/inventory"));
        }
    }

    const handleChanges = (e) => {
        setUpdatedBook({
            ...updatedBook,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className="container d-flex justify-content-center">
            <div className="d-flex flex-column align-items-start w-25">
                <h2 className="mt-3">Update a Book</h2>
                <form onSubmit={onSubmit} className="border-top border-dark border-2">
                    <input type="hidden" value={updatedBook.bookId} onChange={handleChanges} className="form-control-lg" />
                    <label htmlFor="title" className="form-label label">Title</label>
                    <br />
                    <input type="text" name="bookTitle" id="title" required={true} placeholder="Title" value={updatedBook.bookTitle} onChange={handleChanges} className="form-control-lg" />
                    <br />
                    <label htmlFor="genre" className="form-label label">Genre</label>
                    <br />
                    <input type="text" name="bookGenre" id="genre" required={true} placeholder="Genre" value={updatedBook.bookGenre} onChange={handleChanges} className="form-control-lg" />
                    <br />
                    <label htmlFor="binding" className="form-label label">Binding</label>
                    <br />
                    <select name='bookBinding' id='binding' value={updatedBook.bookBinding} onChange={handleChanges} className="form-select form-control-lg">
                        <option value="Paper-Back">Paper-Back</option>
                        <option value="Hard-Back">Hard-Back</option>
                        <option value="Spiral-Back">Spiral-Back</option>
                        <option value="Loose-Leaf">Loose-Leaf</option>
                    </select>
                    <label htmlFor="price" className="form-label label">Price</label>
                    <br />
                    <input type="text" name="bookPrice" id="price" required={true} placeholder="Price" value={updatedBook.bookPrice} onChange={handleChanges} className="form-control-lg" />
                    <br />
                    <label style={{ display: "hidden" }} id='errLabel'></label>
                    <button type="submit" className="btn btn-primary mt-3">Update book</button>
                </form>
                <Link to="/inventory">Go back</Link>
            </div>
        </div>
    )
}

export default UpdateBook