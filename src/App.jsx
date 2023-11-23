import React, { useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Router from './route/Router';
import LoginPage from './pages/auth/Login';
import RegisterPage from './pages/auth/Register';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';

function App() {
  const {
    authUser = null,
    isPreload = false,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        {/* <Loading /> */}
        <main>
          <Routes>
            <Route path="/*" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <div className="app-container">
      <header>
        <Link to="/">Home</Link>
        <button type="button" onClick={onSignOut}>Sign out</button>
      </header>
      <main>
        <Router />
      </main>
    </div>
  );
}

export default App;
