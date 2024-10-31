import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './auth.css';
import axios from 'axios';
import Login from './Login';
import Register from './Register';

function Authentication({ setIsLoggedIn = () => {}, setUserUsername = () => {} }) {
  // State to toggle between login and signup forms
  const [_switch, setSwitch] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Login form
  const handleSignInClick = () => {
    setSwitch(true);
  };

  // Register form
  const handleSignUpClick = () => {
    setSwitch(false);
  };

  // Handle form submission for both login and register
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form behavior

    try {
      let response;
      if (_switch) {
        // If _switch is true, handle login
        response = await axios.post('http://localhost:8000/api/auth/login', {
          username,
          password,
        });
      } else {
        // If _switch is false, handle registration
        response = await axios.post('http://localhost:8000/api/auth/register', {
          username,
          password,
        });
      }

      // On success, store the token in localStorage and update states
      const { accessToken } = response.data;
      localStorage.setItem('accessToken', accessToken);
      setUserUsername(username); // Set username
      setIsLoggedIn(true);       // Mark user as logged in

    } catch (error) {
      console.error('Error during authentication:', error);
    }
  };

  return (
    <div className="authentication-container">
      <div className="button-group">
        <button
          onClick={handleSignInClick}
          className={_switch ? 'btn-active' : 'btn-inactive'}
        >Sign In
        </button>
        <button
          onClick={handleSignUpClick}
          className={!_switch ? 'btn-active' : 'btn-inactive'}
        >Sign Up
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {_switch ? (
          <Login
            //setIsLoggedIn={setIsLoggedIn}
            //setUserUsername={setUserUsername}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            handleSubmit={handleSubmit}
          />
        ) : (
          <Register
            //setIsLoggedIn={setIsLoggedIn}
            //setUserUsername={setUserUsername}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            handleSubmit={handleSubmit}
          />
        )}
      </form>
    </div>
  );
}

Authentication.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
  setUserUsername: PropTypes.func.isRequired,
};

export default Authentication;
