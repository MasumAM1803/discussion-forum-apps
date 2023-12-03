import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Router from './route/Router';
import Loading from './components/Loading';
import LoginPage from './pages/auth/Login';
import RegisterPage from './pages/auth/Register';
import Main from './components/styled/Main';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';
import Footer from './components/Footer';

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
        <Loading />
        <div className="app-container">
          <Main auth>
            <Routes>
              <Route path="/*" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </Main>
        </div>
      </>
    );
  }

  return (
    <>
      <Loading />
      <div className="app-container">
        <header>
          <h2>Masum Forum App</h2>
        </header>
        <Main>
          <Router />
        </Main>
        <Footer authUser={authUser} onSignOut={onSignOut} />
      </div>
    </>
  );
}

export default App;
