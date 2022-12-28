import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';

const Header = () => {
  return (
    <header>
      <nav className="container">
        <ul className={s.navList}>
          <li>
            <NavLink
              to={'/'}
              className={({ isActive }) =>
                isActive ? s.activeLink : s.link
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/movies'}
              className={({ isActive }) =>
                isActive ? s.activeLink : s.link
              }
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
