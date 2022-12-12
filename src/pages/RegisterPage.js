import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
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
      <div className="back-to__login">
        <p>
          : 'You already have an account?
          <Link to={'/'} className="link-login">
            <span> Login here.</span>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default RegisterPage;
