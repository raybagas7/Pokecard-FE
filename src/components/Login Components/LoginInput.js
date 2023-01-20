import useInput from '../../hooks/useInput';
import { Link } from 'react-router-dom';
import '../../styles/login-style.css';
import PropTypes from 'prop-types';
import SmallPokeball from '../Pokemon Components/SmallPokeball';
import SmallMasterball from '../Pokemon Components/SmallMasterball';
import { useState } from 'react';
import SmallUltraBall from '../Pokemon Components/SmallUltraBall';

const LoginInput = (props) => {
  const [username, handleUsernameChange] = useInput('');
  const [email, handleEmailChange] = useInput('');
  const [password, handlePasswordChange] = useInput('');
  const [isLogin, setIsLogin] = useState(true);
  const [showOrHideLogin, setShowOrHideLogin] = useState(
    'animate-default_quantum_bouncing'
  );
  const [showOrHideFP, setShowOrHideFP] = useState('invisible');

  const showHide = () => {
    showOrHideLogin === 'animate-default_quantum_bouncing'
      ? setShowOrHideLogin('animate-fade_out_quantum_bouncing')
      : setShowOrHideLogin('animate-default_quantum_bouncing');

    showOrHideFP === 'animate-default_quantum_bouncing'
      ? setShowOrHideFP('animate-fade_out_quantum_bouncing')
      : setShowOrHideFP('animate-default_quantum_bouncing');

    setIsLogin(!isLogin);
  };

  const onSubmitForgotHandler = (event) => {
    event.preventDefault();
    showHide();

    props.forgot({
      email,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    props.login({
      username,
      password,
    });
  };

  return (
    <div className="login-container">
      <form
        onSubmit={onSubmitForgotHandler}
        className={`login-input absolute top-16 ${showOrHideFP}`}
      >
        <div className={`w-full p-5 `}>
          <div className="login-header">
            <h2 className={`text-2xl`}>FORGOT PASSWORD</h2>
          </div>
          <div className={`username-container`}>
            <div className="mt-3">
              <SmallUltraBall />
            </div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className={`login-button`}>
            <button>Request</button>
          </div>
        </div>
        <div className="m-3 flex justify-end text-black-steam">
          <div
            onClick={showHide}
            className="rounded-xl bg-white/50 p-2 shadow-md transition duration-500 hover:bg-white"
          >
            <p className="w-fit cursor-pointer hover:text-black-steam">Login</p>
          </div>
        </div>
      </form>
      <form
        onSubmit={onSubmitHandler}
        className={`login-input ${showOrHideLogin}`}
      >
        <div className={` p-5`}>
          <div className="login-header">
            <h2 className={`text-2xl`}>LOGIN</h2>
          </div>
          <div className={`username-container`}>
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
          <div className={`password-container`}>
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
          <div className={`login-button`}>
            <button>Login</button>
          </div>
        </div>
        <div className=" m-3 flex justify-end text-black-steam">
          <div
            onClick={showHide}
            className="rounded-xl bg-white/50 p-2 shadow-md transition duration-500 hover:bg-white"
          >
            <p className="w-fit cursor-pointer hover:text-black-steam">
              Forgot Password?
            </p>
          </div>
        </div>
      </form>
      <div className="go-to__register animate-default_quantum_bouncing">
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
