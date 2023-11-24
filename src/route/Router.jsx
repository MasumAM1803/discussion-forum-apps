import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Detail from '../pages/thread/Detail';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/threads/:id" element={<Detail />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
