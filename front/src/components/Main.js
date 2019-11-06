import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { styled } from '@material-ui/styles';
import Header from './Header';
import Sidebar from './Sidebar';
import ProductIndex from '../pages/product/ProductIndex';
import Profile from '../pages/user/Profile';
import Logout from '../pages/auth/Logout';

const Root = styled('div')({
  display: 'flex',
  maxWidth: '100vw',
  overflowX: 'hidden',
});

const Content = styled('div')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}));

const FakeToolbar = styled('div')(({ theme }) => ({ ...theme.mixins.toolbar }));

const Main = () => {
  return (
    <Root>
      <Header />
      <Sidebar />
      <Content>
        <FakeToolbar />
        <Switch>
          <Route path="/admin/product" component={ProductIndex} />
          <Route path="/admin/profile" component={Profile} />
          <Route path="/admin/logout" component={Logout} />
        </Switch>
      </Content>
    </Root>
  );
};

export default Main;
