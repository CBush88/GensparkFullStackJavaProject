import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { updateBook } from '../../service/BooksDataService'
import { validGenre, validPrice } from '../../service/ValidationService';

const UpdateBook = ({ bookToUpdate }) => {
    const [updatedBook, setUpdatedBook] = useState(bookToUpdate);

    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        if(validGenre() && validPrice()){
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
        <div>
            <h2>Update a Book</h2>
            <form style={{ textAlign: "left", marginLeft: "10em" }} onSubmit={onSubmit}>
                <input type="hidden" value={updatedBook.bookId} onChange={handleChanges} />
                <label htmlFor="title">Title</label>
                <br />
                <input type="text" name="bookTitle" id="title" required={true} placeholder="Title" value={updatedBook.bookTitle} onChange={handleChanges} />
                <br />
                <label htmlFor="genre">Genre</label>
                <br />
                <input type="text" name="bookGenre" id="genre" required={true} placeholder="Genre" value={updatedBook.bookGenre} onChange={handleChanges} />
                <br />
                <label htmlFor="binding">Binding</label>
                <br />
                <select name='bookBinding' id='binding' onChange={handleChanges}>
                    <option value="Hard-Back">Hard-Back</option>
                    <option value="Paper-Back">Paper-Back</option>
                    <option value="Spiral-Back">Spiral-Back</option>
                    <option value="Loose-Leaf">Loose-Leaf</option>
                </select>                
                <br />
                <label htmlFor="price">Price</label>
                <br />
                <input type="text" name="bookPrice" id="price" required={true} placeholder="Price" value={updatedBook.bookPrice} onChange={handleChanges} />
                <br />
                <label id='errLabel'></label>
                <br />
                <button style={{ width: "auto" }} type="submit">Update book</button>
            </form>
            <Link to="/">Go back</Link>
        </div>
    )
}

export default UpdateBook