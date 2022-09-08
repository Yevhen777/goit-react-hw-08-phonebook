import { RegisterUser } from '../pages/RegisterUser';
import { LoginUser } from '../pages/LoginUser';
import { ContactsUser } from '../pages/ContactsUser';
import { NotFound } from './NotFound';
import { UserMenu } from './UserMenu';
import { Routes, Route, Link } from 'react-router-dom';
import style from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from '../redux/requestUser';
// import { PrivateRoute } from '../pages/PrivateRoute';
// import { PublicRoute } from '../pages/PublicRoute';

export function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <div>
      <header className={style.header}>
        <nav>
          <Link className={style.active} to="/">
            Contact
          </Link>
          <Link className={style.active} to="/register">
            Register
          </Link>
          <Link className={style.active} to="/login">
            Login
          </Link>
        </nav>
        {isLoggedIn && <UserMenu />}
      </header>

      <div>
        <Routes>
          <Route path="/" element={<ContactsUser />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="*" element={<NotFound />} />

          {/* <PrivateRoute path="/contact">
            <ContactsUser />
          </PrivateRoute> */}
          {/* 
          <PublicRoute path="/register" restricted>
            <RegisterUser />
          </PublicRoute>

          <PublicRoute path="/login" restricted>
            <LoginUser />
          </PublicRoute> */}
        </Routes>
      </div>
    </div>
  );
}
