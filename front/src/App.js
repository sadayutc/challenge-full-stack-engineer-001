import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Main from './components/Main';
import Login from './pages/auth/Login';
import PageNotFound from './pages/errors/PageNotFound';
import { useUser } from './contexts/userContext';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const {
    state: { isAuthenticated },
  } = useUser();

  const PrivateRoute = ({ component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          React.createElement(component, props)
        ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        )
      }
    />
  );

  const PublicRoute = ({ component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: '/',
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  };

  return (
    <>
      <ToastContainer />
      <HashRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/admin/product" />}
          />
          <Route
            exact
            path="/admin"
            render={() => <Redirect to="/admin/product" />}
          />
          <PrivateRoute path="/admin" component={Main} />
          <PublicRoute path="/login" component={Login} />
          <Route component={PageNotFound} />
        </Switch>
      </HashRouter>
    </>
  );
};

export default App;
