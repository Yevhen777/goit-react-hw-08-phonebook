import { RegisterUser } from '../pages/RegisterUser';
import { LoginUser } from '../pages/LoginUser';
import { ContactsUser } from '../pages/ContactsUser';
import { NotFound } from './NotFound';
import { UserMenu } from './UserMenu';
import { Routes, Route, Link } from 'react-router-dom';
import style from './ContactForm.module.css';
import { useSelector } from 'react-redux';
// import { PrivateRoute } from '../pages/PrivateRoute';
// import { PublicRoute } from '../pages/PublicRoute';

export function App() {
  const isLoggin = useSelector(state => state.auth.logginIn);
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
        {isLoggin && <UserMenu />}
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
