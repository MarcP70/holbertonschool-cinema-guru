import React from 'react';
import PropTypes from 'prop-types';
import './auth.css';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';

function Login({ username, password, setUsername, setPassword, handleSubmit }) {

  return (
    <div className="login-form">
      <p>Sign in with your account</p>
      <Input
        label="Username"
        type="text"
        className="input-username"
        value={username}
        setValue={setUsername}
        icon={faUser}
      />
      <Input
        label="Password"
        type="password"
        className="input-password"
        value={password}
        setValue={setPassword}
        icon={faKey}
      />
      <Button
        label="Sign In"
        className="login-button"
        onClick={handleSubmit}
        icon={faKey}
      />
    </div>
  );
}

// Define prop types
Login.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Login;