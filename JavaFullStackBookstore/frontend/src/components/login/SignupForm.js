import React, { useRef } from 'react';
import { createUser } from '../../service/UsersDataService';
import { useNavigate } from 'react-router-dom';
import bcrypt from "bcryptjs";
import { validPassword } from '../../service/ValidationService';

const SignupForm = ({ getUsers }) => {
  const usernameInputRef = useRef("");
  const passwordInputRef = useRef("");

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if (validPassword()) {
      const username = usernameInputRef.current.value;
      const password = passwordInputRef.current.value;
      const hashed = bcrypt.hashSync(password, 10);
      const credentials = {
        "username": username,
        "password": hashed
      }
      createUser(credentials)
        .then(() => navigate("/"));
    }
  }

  return (
    <div className="d-flex justify-content-center mt-3">
      <form onSubmit={handleSubmit} className="d-flex flex-column align-items-start w-25">
        <h1 className="border-bottom border-dark border-2 pb-3">Sign Up Below:</h1>
        <label htmlFor='username' className="form-label label">Username </label>
        <br />
        <input type="text" name="username" id="username" required={true} ref={usernameInputRef} className="form-control-lg" />
        <br />
        <label htmlFor='password' className="form-label label">Password</label>
        <br />
        <input type="password" name="password" id="password" minLength={8} required={true} ref={passwordInputRef} className="form-control-lg" />
        <br />
        <label htmlFor='repeatPassword' className="form-label label">Repeat Password</label>
        <br />
        <input type="password" name="repeatPassword" id="repeatPassword" required={true} className="form-control-lg" />
        <br />
        <label id="errLabel" className="form-label label"></label>
        <br />
        <button type="submit" className="btn btn-primary mt-3">Sign Up</button>
      </form>
    </div>
  )
}

export default SignupForm;