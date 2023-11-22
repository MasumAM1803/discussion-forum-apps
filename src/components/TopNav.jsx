import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineGTranslate } from 'react-icons/md';
import { FaRegMoon, FaSun } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

function TopNav() {
  const { authedUser, setAuthedUser } = React.useContext(AuthContext);
  const { theme, onChangeTheme } = React.useContext(ThemeContext);
  const { locale, toggleLocale } = React.useContext(LocaleContext);

  const navigate = useNavigate();

  const onLogoutHandle = () => {
    localStorage.removeItem('accessToken');
    setAuthedUser(null);
    navigate('/');
  };

  return (
    <>
      {
            authedUser ? (
              <div className="navigation">
                <ul>
                  <li>
                    <Link to="/notes/archived">{locale === 'id' ? 'Terapsip' : 'Archived' }</Link>
                  </li>
                  <li>
                    <button className="toggle-locale" onClick={() => toggleLocale(locale === 'id' ? 'en' : 'id')}><MdOutlineGTranslate /></button>
                  </li>
                  <li>
                    <button className="toggle-theme" onClick={() => onChangeTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? <FaSun /> : <FaRegMoon />}</button>
                  </li>
                  <li>
                    <button className="button-logout" onClick={onLogoutHandle}>
                      <FiLogOut />
                      {authedUser.name}
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="navigation">
                <ul>
                  <li>
                    <button className="toggle-locale" onClick={() => toggleLocale(locale === 'id' ? 'en' : 'id')}><MdOutlineGTranslate /></button>
                  </li>
                  <li>
                    <button className="toggle-theme" onClick={() => onChangeTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? <FaSun /> : <FaRegMoon />}</button>
                  </li>
                </ul>
              </div>
            )
        }
    </>
  );
}

export default TopNav;
