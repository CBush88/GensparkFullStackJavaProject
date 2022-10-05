import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createBook } from '../../service/BooksDataService'
import { validGenre, validPrice } from '../../service/ValidationService';

const initialState = {
    "bookTitle": "",
    "bookGenre": "",
    "bookBinding": "",
    "bookPrice": 0,
};

const AddBook = () => {
    const [bookToAdd, setBookToAdd] = useState(initialState);

    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        if (validGenre() && validPrice()) {
            createBook(bookToAdd)
                .then(() => setBookToAdd(initialState))
                .then(() => navigate("/inventory"));
        }
    }

    const handleChanges = (e) => {
        setBookToAdd({
            ...bookToAdd,
            [e.target.name]: e.target.value,
        });
    }

    return (

        <div className="container d-flex justify-content-center">
            <div className="d-flex flex-column align-items-start w-25">
                <h2 className="mt-3">Add a Book</h2>
                <form onSubmit={onSubmit} className="border-top border-dark border-2">
                    <label htmlFor="title" className="form-label label">Title</label>
                    <br />
                    <input type="text" name="bookTitle" id="title" required={true} placeholder="Title" onChange={handleChanges} className="form-control-lg" />
                    <br />
                    <label htmlFor="genre" className="form-label label">Genre</label>
                    <br />
                    <input type="text" name="bookGenre" id="genre" required={true} placeholder="Genre" onChange={handleChanges} className="form-control-lg" />
                    <br />
                    <label htmlFor="binding" className="form-label label">Binding</label>
                    <br />
                    <select name='bookBinding' id='binding' onChange={handleChanges} className="form-select">
                        <option value="Hard-Back">Hard-Back</option>
                        <option value="Paper-Back">Paper-Back</option>
                        <option value="Spiral-Back">Spiral-Back</option>
                        <option value="Loose-Leaf">Loose-Leaf</option>
                    </select>
                    <label htmlFor="price" className="form-label label">Price</label>
                    <br />
                    <input type="text" name="bookPrice" id="price" required={true} placeholder="Price" onChange={handleChanges} className="form-control-lg" />
                    <br />
                    <label style={{ display: "hidden" }} id="errLabel" className="form-label label"></label>
                    <button type="submit" className="btn btn-primary mt-3">Add book</button>
                </form>
                <Link to="/inventory">Go back</Link>
            </div>
        </div>
    )
};

export default AddBook;