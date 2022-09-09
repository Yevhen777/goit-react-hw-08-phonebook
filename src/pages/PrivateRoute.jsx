// import { Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';

// export default function PrivateRoute({ children, ...routeProps }) {
//   console.log(PrivateRoute);
//   const isLoggin = useSelector(state => state.auth.isLoggedIn);
//   return (
//     <>
//       <Route {...routeProps}>
//         {isLoggin ? children : <Navigate to="/login" />}
//       </Route>
//     </>
//   );
// }

// export default function PrivateRoute({
//   component: Component,
//   redirectTo = '/',
// }) {
//   const { isLoggedIn, isRefreshing } = useAuth();

//   const shouldRedirect = !isLoggedIn && !isRefreshing;
//   return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
// }
