import useInput from '../../hooks/useInput';
import { Link } from 'react-router-dom';
import '../../styles/login-style.css';
import PropTypes from 'prop-types';
import SmallPokeball from '../Pokemon Components/SmallPokeball';
import SmallMasterball from '../Pokemon Components/SmallMasterball';
import { useState } from 'react';
import SmallUltraBall from '../Pokemon Components/SmallUltraBall';
import { FaEyeSlash, FaEye } from 'react-icons/fa';

const LoginInput = (props) => {
  const [username, handleUsernameChange] = useInput('');
  const [email, handleEmailChange] = useInput('');
  const [password, handlePasswordChange] = useInput('');
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [showOrHideLogin, setShowOrHideLogin] = useState(
    'animate-default_quantum_bouncing'
  );
  const [showOrHideFP, setShowOrHideFP] = useState('invisible');

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
          <div className={`username-container mb-3`}>
            <div className="mt-3">
              <SmallUltraBall />
            </div>
            <input
              className="rounded-xl"
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
          <div className={`username-container mb-5`}>
            <div className="mt-3">
              <SmallPokeball />
            </div>
            <input
              className="rounded-xl"
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className={`password-container mb-4`}>
            <div className="mt-3">
              <SmallMasterball />
            </div>
            <input
              className="rounded-l-xl"
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
