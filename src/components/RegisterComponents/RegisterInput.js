import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';
import '../../styles/register-style.css';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RegisterInput = (props) => {
  const [username, handleUsernameChange] = useInput('');
  const [password, handlePasswordChange] = useInput('');
  const [trainer_name, handleTrainerNameChange] = useInput('');
  const [email, handleEmailChange] = useInput('');
  const [confirmPassword, handleConfirmChange] = useInput('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);
  let maxUsername = 15;
  let maxTName = 15;

  const passwordStrenght = (password) => {
    let i = 0;
    if (password.length >= 1) {
      i++;
    }
    if (password.length >= 8) {
      i++;
    }
    if (password.length >= 10) {
      i++;
    }
    if (password.length > 7) {
      if (/[A-Z]/.test(password)) {
        i++;
      }
      if (/[1-9]/.test(password)) {
        i++;
      }
      if (/[A-Za-z0-3]/.test(password)) {
        i++;
      }
      if (/[!@#$%^&*)(+=._-]/.test(password)) {
        i++;
      }
    }
    return i;
  };

  let newPasswordStrenght = passwordStrenght(password);

  const toggleShowPass = () => {
    const temp = showPassword;
    setShowPassword(!temp);
  };

  const toggleShowConfPass = () => {
    const temp = showConfPassword;
    setShowConfPassword(!temp);
  };

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
        className="register-input flex animate-default_quantum_bouncing flex-col gap-3"
      >
        <div className="signup-header">
          <h2 className="text-2xl">SIGN UP</h2>
        </div>
        <div className="flex">
          <input
            className="rounded-l-xl"
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            maxLength={15}
            required
          />
          <div
            onClick={toggleShowPass}
            className="flex items-center rounded-r-xl bg-white p-2 text-black-steam/50"
          >
            <p>{maxUsername - username.length}</p>
          </div>
        </div>
        <div className="flex">
          <input
            className="rounded-l-xl rounded-r-none"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            autoComplete="current-password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <div
            onClick={toggleShowPass}
            className={`group/show2 flex cursor-pointer items-center rounded-r-xl border-l-2 border-black-steam/30 p-2 
            transition duration-300 hover:bg-black-steam
            ${
              newPasswordStrenght > 0 && newPasswordStrenght <= 3
                ? 'border-l-0 bg-red-poke shadow shadow-red-poke'
                : newPasswordStrenght >= 3 && newPasswordStrenght <= 6
                ? 'border-l-0 bg-yellow-poke shadow shadow-gold-poke'
                : newPasswordStrenght >= 7
                ? 'border-l-0 bg-green-400 shadow shadow-green-400'
                : 'bg-white'
            }`}
          >
            {showPassword ? (
              <FaEye
                className="text-black-steam transition duration-300 group-hover/show2:text-orange-poke
              max-md:h-3 max-md:w-3"
              />
            ) : (
              <FaEyeSlash
                className="text-black-steam transition duration-300 group-hover/show2:text-orange-poke
              max-md:h-3 max-md:w-3"
              />
            )}
          </div>
        </div>
        <div className="flex">
          <input
            className="rounded-l-xl rounded-r-none"
            type={showConfPassword ? 'text' : 'password'}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmChange}
            required
          />
          <div
            onClick={toggleShowConfPass}
            className="group/show2 flex cursor-pointer items-center rounded-r-xl border-l-2 border-black-steam/30 bg-white p-2 
            transition duration-300 hover:bg-black-steam"
          >
            {showConfPassword ? (
              <FaEye
                className="text-black-steam transition duration-300 group-hover/show2:text-orange-poke
              max-md:h-3 max-md:w-3"
              />
            ) : (
              <FaEyeSlash
                className="text-black-steam transition duration-300 group-hover/show2:text-orange-poke
              max-md:h-3 max-md:w-3"
              />
            )}
          </div>
        </div>
        <div className="flex">
          <input
            className="rounded-l-xl"
            type="text"
            placeholder="Trainer Name"
            value={trainer_name}
            maxLength={15}
            onChange={handleTrainerNameChange}
            required
          />
          <div
            onClick={toggleShowPass}
            className="flex items-center rounded-r-xl bg-white p-2 text-black-steam/50"
          >
            <p>{maxTName - trainer_name.length}</p>
          </div>
        </div>
        <div className="flex">
          <input
            className="rounded-xl"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>

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
