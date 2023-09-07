import { Alert } from 'bootstrap';
import React, { useState } from 'react';
import Home from '../Home/Home';
import './Login.css';
const Login = () => {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage.getItem("userPassword").replace(/"/g, "");
    let mail = localStorage.getItem("userEmail").replace(/"/g, "");
    

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }
  return (
    <div>
      {home ? (
        <form className='shadow-lg p-5 rounded' onSubmit={handleLogin}>
          <h3>LogIn</h3>
          <div className="form-group mt-3 text-start">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(event) => setEmaillog(event.target.value)}
                />
              </div>

              <div className="form-group mt-3 text-start">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control required"
                  placeholder="Enter password"
                  onChange={(event) => setPasswordlog(event.target.value)}
                />
              </div>

          <button type="submit" className="btn btn-primary mt-3 btn-lg btn-block">
            Login
          </button>

          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else keep trying.
            </Alert>
          )}
        </form>
      ) : (
        <Home />
      )}
    </div>
  );
};

export default Login;