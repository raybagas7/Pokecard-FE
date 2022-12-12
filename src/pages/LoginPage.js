import React from 'react';
import PropTypes from 'prop-types';
import { login } from '../utils/network-data';
import LoginInput from '../components/LoginInput';
import { Link } from 'react-router-dom';

const LoginPage = ({ loginSuccess }) => {
  const onLogin = async ({ username, password }) => {
    const { error, data } = await login({ username, password });

    // console.log(data);
    if (!error) {
      loginSuccess(data);
    }
  };
  return (
    <section>
      <LoginInput login={onLogin} />
      <div className="go-to__register">
        <p>
          {' '}
          "You don't have an account?
          <Link to="/register" className="link-signup">
            'Sign up here.
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};
