import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';
import '../../styles/register-style.css';
import { Link } from 'react-router-dom';

const RegisterInput = (props) => {
  const [username, handleUsernameChange] = useInput('');
  const [password, handlePasswordChange] = useInput('');
  const [trainer_name, handleTrainerNameChange] = useInput('');
  const [email, handleEmailChange] = useInput('');
  const [confirmPassword, handleConfirmChange] = useInput('');

  const matchPassword = () => {
    const match = password === confirmPassword ? true : false;
    return match;
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    props.register({
      username,
      password,
      trainer_name,
      email,
    });
  };

  return (
    <div className="register-container">
      <form
        onSubmit={onSubmitHandler}
        className="register-input animate-default_quantum_bouncing"
      >
        <div className="signup-header">
          <h2 className="text-2xl">SIGN UP</h2>
        </div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleConfirmChange}
          required
        />
        <input
          type="text"
          placeholder="Trainer Name"
          value={trainer_name}
          onChange={handleTrainerNameChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <div className="register-button">
          {matchPassword() === true ? (
            <button disabled={!matchPassword()}>Register</button>
          ) : (
            <button disabled={!matchPassword()}>Password didn't match</button>
          )}
        </div>
      </form>
      <div className="back-to__login animate-default_quantum_bouncing">
        <p>
          You already have an account?
          <Link to={'/'} className="link-login">
            <span> Login here.</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
