import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Router from './route/Router';
import LoginPage from './pages/auth/Login';
import RegisterPage from './pages/auth/Register';

function App() {
  const {
    authUser = null,
    // isPreload = false,
  } = useSelector((states) => states);

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
      </header>
      <main>
        <Router />
      </main>
    </div>
  );
}

export default App;
