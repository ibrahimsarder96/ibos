import React, { useState } from 'react';
import './Registration.css';
import Login from './Login';
import { Alert } from 'bootstrap';


const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone || !profession) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("userEmail", JSON.stringify(email));
      localStorage.setItem("userName", JSON.stringify(name));
      localStorage.setItem("userPassword",JSON.stringify(password));
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }
  return (
    <div>
      <div >
          {" "}
          {login ? (
            <form className='shadow-lg p-5 rounded' onSubmit={handleFormSubmit}>
              <h3>Register</h3>

              <div className="form-group text-start">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control required"
                  placeholder="Enter Full Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="form-group mt-3 text-start">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="form-group mt-3 text-start">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control required"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-lg btn-block mt-3">
                Register
              </button>
              <p onClick={handleClick} className="forgot-password text-right mt-3 cursor-pointer">
                Already registered{" "}log in?
                
              </p>
              {flag && (
                <Alert color="primary" variant="danger">
                  I got it you are in hurry! But every Field is important!
                </Alert>
              )}
            </form>
          ) : (
            <Login />
          )}
        </div>
    </div>
  );
};

export default Registration;