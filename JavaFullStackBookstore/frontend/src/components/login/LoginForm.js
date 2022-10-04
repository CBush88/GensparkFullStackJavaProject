import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const LoginForm = ({ setUserAttempt, userAttempt, getUsers, authenticate }) => {

    const handleChanges = e => {
        setUserAttempt({
            ...userAttempt,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        getUsers()
    }, []);

    return (
        <div>
            <form onSubmit={authenticate} className="d-flex flex-column align-items-start w-25">
                <label htmlFor='username' className="form-label label">Username </label>
                <br />
                <input type="text" name="username" id="username" required={true} onChange={handleChanges} className="form-control-lg" />
                <br />
                <label htmlFor='password' className="form-label label">Password</label>
                <br />
                <input type="password" name="password" id="password" required={true} onChange={handleChanges} className="form-control-lg" />
                <br />
                <button type="submit" className="btn btn-primary mt-3">Log In</button>
            </form>
            <div className="ms-1">
                <Link to="/signup" className="">Sign up</Link>
            </div>
        </div>
    )
}

export default LoginForm