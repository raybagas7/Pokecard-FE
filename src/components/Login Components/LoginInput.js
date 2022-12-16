import useInput from '../../hooks/useInput';
import { Link } from 'react-router-dom';
import '../../styles/login-style.css';
import PokeballLoginDecoration from './PokeballLoginDecoration';

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
          <h2>LOGIN</h2>
        </div>
        <div className="username-container">
          <PokeballLoginDecoration />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="password-container">
          <PokeballLoginDecoration />
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
          {' '}
          You don't have an account?{' '}
          <Link to="/register" className="link-signup">
            Sign up here.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginInput;
