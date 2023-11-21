import React from 'react';
import { Link } from 'react-router-dom';
import Router from './route/Router';

function App() {
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
