import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Main from './components/Main';
import Login from './pages/auth/Login';
import PageNotFound from './pages/errors/PageNotFound';

const App = () => {
  const isAuthenticated = true;

  const PrivateRoute = ({ component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          React.createElement(component, props)
        ) : (
          <Redirect
            to={{
              pathname: '/',
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
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/admin/product" />} />
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
  );
};

export default App;
