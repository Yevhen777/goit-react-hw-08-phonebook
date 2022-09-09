import { NotFound } from './NotFound';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from '../redux/requestUser';
import { lazy } from 'react';
import { SharedLayout } from './SharedLayout';
// import PrivateRoute from '../pages/PrivateRoute';
// import { PublicRoute } from '../pages/PublicRoute';

const ContactsUser = lazy(() => import('../pages/ContactsUser'));
const RegisterUser = lazy(() => import('../pages/RegisterUser'));
const LoginUser = lazy(() => import('../pages/LoginUser'));

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<ContactsUser />} />
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
        </Route>
      </Routes>
    </div>
  );
}
