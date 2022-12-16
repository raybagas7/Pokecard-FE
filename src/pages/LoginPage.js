import React from 'react';
import PropTypes from 'prop-types';
import { login } from '../utils/network-data';
import LoginInput from '../components/Login Components/LoginInput';

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
    </section>
  );
};

export default LoginPage;

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};
