import React from 'react';
import PropTypes from 'prop-types';
import './auth.css';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';

function Register({ username, password, setUsername, setPassword, handleSubmit }) {

  return (
    <div className="register-form">
      <p>Create a new account</p>
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
        label="Sign Up"
        className="register-button"
        onClick={handleSubmit}
        icon={faKey}
      />
    </div>
  );
}

// Définition des prop types pour valider les types des props
Register.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Register;