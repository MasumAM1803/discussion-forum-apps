/* eslint-disable no-unused-vars */
import React from 'react';
import { IoEarthOutline } from 'react-icons/io5';
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
      <header className="login-page__hero">
        <h1><IoEarthOutline /></h1>
      </header>
      <article className="login-page__main">
        <h2>
          Let&apos;s
          {' '}
          <strong>Talks</strong>
          ,
          {' '}
          <br />
          To Discuss in Here.
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
