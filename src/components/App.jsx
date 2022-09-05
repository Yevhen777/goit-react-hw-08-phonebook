import { RegisterUser } from '../pages/RegisterUser';
import { LoginUser } from '../pages/LoginUser';
import { ContactsUser } from '../pages/ContactsUser';
import { NotFound } from './NotFound';
import { UserMenu } from '../pages/UserMenu';
import { Routes, Route, Link } from 'react-router-dom';

export function App() {
  return (
    <div>
      <nav>
        <Link to="/">Contact</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </nav>
      ;
      <div>
        <Routes>
          <Route path="/" element={<ContactsUser />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/login" element={<LoginUser />}>
            <Route path="userMenu" element={<UserMenu />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
