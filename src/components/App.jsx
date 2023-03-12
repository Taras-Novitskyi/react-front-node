import { useEffect, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box } from 'components/Box/Box';
import { authOperations, authSelectors } from 'redux/auth';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { Layout } from './Layout/Layout';

const HomeView = lazy(() => import('../pages/HomePage/HomePage'));
const ContactsView = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const LoginView = lazy(() => import('../pages/LoginView/LoginPage'));
const RegisterView = lazy(() => import('../pages/RegisterPage/RegisterPage'));

export function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.selectIsRefreshing);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div>
      <Box backgroundColor="rgb(249, 249, 249)" minHeight="100vh">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeView />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterView />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginView />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsView />}
                />
              }
            />
          </Route>
        </Routes>
        <ToastContainer />
      </Box>
    </div>
  );
}
