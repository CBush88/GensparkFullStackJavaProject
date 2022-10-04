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
        if(validGenre() && validPrice()){
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

        <div>
            <h2>Add a Book</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor="title">Title</label>
                <br />
                <input type="text" name="bookTitle" id="title" required={true} placeholder="Title" onChange={handleChanges} />
                <br />
                <label htmlFor="genre">Genre</label>
                <br />
                <input type="text" name="bookGenre" id="genre" required={true} placeholder="Genre" onChange={handleChanges} />
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
                <input type="text" name="bookPrice" id="price" required={true} placeholder="Price" onChange={handleChanges} />
                <br />
                <label style={{display:"hidden"}} id="errLabel"></label>
                <br />
                <button style={{ width: "auto" }} type="submit">Add book</button>
            </form>
            <Link to="/">Go back</Link>
        </div>
    )
};

export default AddBook;