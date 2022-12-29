import { NavLink, Outlet } from 'react-router-dom';
import s from './Layout.module.scss';

const Layout = () => {
  return (
    <>
      <header>
        <nav className="container">
          <ul className={s.navList}>
            <li>
              <NavLink
                to={'/'}
                className={({ isActive }) => (isActive ? s.activeLink : s.link)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/movies'}
                className={({ isActive }) => (isActive ? s.activeLink : s.link)}
              >
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
