/* eslint-disable import/named */
import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../../states/authUser/action';
import LoginInput from '../../components/auth/login/Input';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
    Navigate('/');
  };

  return (
    <section className="login-page">
      <article className="login-page__main">
        <h2>
          LOGIN HERE
        </h2>

        <LoginInput login={onLogin} />
        <p>
          Don&apos;t have an account?
          {' '}
          <Link to="/register">Register</Link>
        </p>
      </article>
    </section>
  );
}

export default LoginPage;
