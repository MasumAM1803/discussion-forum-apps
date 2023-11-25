import React from 'react';
import NotFoundImage from '../assets/undraw_page_not_found.svg';

function NotFoundPage() {
  return (
    <div className="not-found__container">
      <img src={NotFoundImage} alt="page not found" />
    </div>
  );
}

export default NotFoundPage;
