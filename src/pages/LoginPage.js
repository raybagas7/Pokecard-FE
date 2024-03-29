import React from 'react';
import PropTypes from 'prop-types';
import { forgotPassword, login } from '../utils/network-data';
import LoginInput from '../components/Login Components/LoginInput';

import Swal from 'sweetalert2';

const LoginPage = ({ loginSuccess }) => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast',
    },
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });

  const onLogin = async ({ username, password }) => {
    const { error, data, message } = await login({ username, password });

    // console.log('mydata', data);
    if (!error) {
      loginSuccess(data);
      Toast.fire({
        icon: 'success',
        title: `Welcome ${username}`,
      });
    } else {
      Toast.fire({
        icon: 'error',
        title: `${message}`,
      });
    }
  };

  const onForgot = async ({ email }) => {
    const { error, message } = await forgotPassword(email);

    // console.log('mydata', data);
    if (!error) {
      Toast.fire({
        icon: 'success',
        title: `${message}`,
      });
    } else {
      Toast.fire({
        icon: 'error',
        title: `${message}`,
      });
    }
  };

  return (
    <section>
      <LoginInput login={onLogin} forgot={onForgot} />
    </section>
  );
};

export default LoginPage;

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};
