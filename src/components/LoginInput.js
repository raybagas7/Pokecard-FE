import useInput from '../hooks/useInput';

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
    <div className="register-container">
      <form onSubmit={onSubmitHandler} className="register-input">
        <h2>'LOGIN'</h2>
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
        <div className="register-button">
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginInput;
