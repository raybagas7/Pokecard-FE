import React from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterComponents/RegisterInput';
import { register } from '../utils/network-data';
import Swal from 'sweetalert2';

const RegisterPage = () => {
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

  const navigate = useNavigate();

  const onRegisterHandler = async (user) => {
    const { error, message } = await register(user);
    if (!error) {
      navigate('/');
      Toast.fire({
        icon: 'success',
        title: `Your account has been created, try to login`,
      });
    } else {
      Toast.fire({
        icon: 'error',
        title: `${message} as ${user.username}`,
      });
    }
  };

  return (
    <section>
      <RegisterInput register={onRegisterHandler} />
    </section>
  );
};

export default RegisterPage;
