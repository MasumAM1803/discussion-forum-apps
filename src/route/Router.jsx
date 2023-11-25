import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home';
import NotFound from '../pages/NotFound';
import DetailPage from '../pages/thread/Detail';
import AddPage from '../pages/thread/Add';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/threads/:id" element={<DetailPage />} />
      <Route path="/threads/new" element={<AddPage />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
