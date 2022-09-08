// import { Route, Redirect } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// export const PublicRoute = ({
//   children,
//   restricted = false,
//   ...routeProps
// }) => {
//   const isLoggin = useSelector(state => state.auth.logginIn);
//   const redirect = isLoggin && restricted;
//   return (
//     <Route {...routeProps}>{redirect ? <Redirect to="/" /> : children}</Route>
//   );
// };
