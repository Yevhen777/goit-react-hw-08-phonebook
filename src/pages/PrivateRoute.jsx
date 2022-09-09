import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({
  component: Component,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const isRefreshing = useSelector(state => state.auth.isRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}
// export default function PrivateRoute({
//   component: Component,
//   redirectTo = '/',
// }) {
//   const { isLoggedIn, isRefreshing } = useAuth();

//   const shouldRedirect = !isLoggedIn && !isRefreshing;
//   return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
// }
