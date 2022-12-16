import React from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterComponents/RegisterInput';
import { register } from '../utils/network-data';

const RegisterPage = () => {
  const navigate = useNavigate();

  const onRegisterHandler = async (user) => {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  };

  return (
    <section>
      <RegisterInput register={onRegisterHandler} />
    </section>
  );
};

export default RegisterPage;
