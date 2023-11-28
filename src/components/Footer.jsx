import React from 'react';
import PropTypes from 'prop-types';
import { LuBarChart3, LuMessagesSquare } from 'react-icons/lu';
import { RiLoginCircleLine, RiLogoutCircleRLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function Footer({ authUser, onSignOut }) {
  return (
    <footer>
      <nav className="footer-container">
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
      </nav>
    </footer>
  );
}

Footer.propTypes = {
  authUser: PropTypes.objectOf(PropTypes.string).isRequired,
  onSignOut: PropTypes.func.isRequired,
};

export default Footer;
