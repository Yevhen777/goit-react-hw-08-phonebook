import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import style from './ContactForm.module.css';
import { useSelector } from 'react-redux';
import { UserMenu } from './UserMenu';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <div>
      <header className={style.header}>
        <nav>
          <Link className={style.active} to="/">
            Contact
          </Link>
          <Link className={style.active} to="/registration">
            Register
          </Link>
          <Link className={style.active} to="/login">
            Login
          </Link>
        </nav>
        {isLoggedIn && <UserMenu />}
      </header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
