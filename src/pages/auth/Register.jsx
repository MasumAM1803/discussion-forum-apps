import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../../states/users/action';
import RegisterInput from '../../components/auth/register/Input';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = async ({ name, email, password }) => {
    const issSuccess = await dispatch(asyncRegisterUser({ email, name, password }));
    if (issSuccess) navigate('/');
  };

  return (
    <section className="register-page">
      <article className="register-page__main">
        <h2>Create your account</h2>
        <RegisterInput register={onRegister} />

        <p>
          Already have an account?
          {' '}
          <Link to="/">Login</Link>
        </p>
      </article>
    </section>
  );
}

export default RegisterPage;
