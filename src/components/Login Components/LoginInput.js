import useInput from '../../hooks/useInput';
import { Link } from 'react-router-dom';
import '../../styles/login-style.css';
import PropTypes from 'prop-types';
import SmallPokeball from '../Pokemon Components/SmallPokeball';
import SmallMasterball from '../Pokemon Components/SmallMasterball';

const LoginInput = (props) => {
  const [username, handleUsernameChange] = useInput('');
  const [password, handlePasswordChange] = useInput('');

  const onSubmitHandler = (event) => {
    event.preventDefault();

    props.login({
      username,
      password,
    });
  };

  return (
    <div className="login-container">
      <form onSubmit={onSubmitHandler} className="login-input">
        <div className="login-header">
          <h2 className="text-2xl">LOGIN</h2>
        </div>
        <div className="username-container">
          <div className="mt-3">
            <SmallPokeball />
          </div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="password-container">
          <div className="mt-3">
            <SmallMasterball />
          </div>
          <input
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="login-button">
          <button>Login</button>
        </div>
      </form>
      <div className="go-to__register">
        <p>
          You don't have an account?{' '}
          <Link to="/register" className="link-signup">
            Sign up here.
          </Link>
        </p>
      </div>
    </div>
  );
};

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
