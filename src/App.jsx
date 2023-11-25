import React, { useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LuBarChart3, LuMessagesSquare } from 'react-icons/lu';
import { RiLogoutCircleRLine, RiLoginCircleLine } from 'react-icons/ri';
import Router from './route/Router';
import Loading from './components/Loading';
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
        <Loading />
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
    <>
      <Loading />
      <div className="app-container">
        <header>
          <h2>Masum Forum App</h2>
        </header>
        <main>
          <Router />
        </main>
        <footer>
          <div className="footer-container">
            <Link to="/" className="footer-btn">
              <LuMessagesSquare />
              Threads
            </Link>
            <Link to="/leaderboards" className="footer-btn">
              <LuBarChart3 />
              Leaderboards
            </Link>
            {authUser !== null
              ? (
                <button className="footer-btn" type="button" onClick={onSignOut}>
                  <RiLogoutCircleRLine />
                  Logout
                </button>
              )
              : (
                <Link to="/" className="footer-btn">
                  <RiLoginCircleLine />
                  Login
                </Link>
              )}
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
