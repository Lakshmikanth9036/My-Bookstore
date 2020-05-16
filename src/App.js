import React, { Component } from 'react';
import './App.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './container/Dashboard';
import Cart from './container/Cart';
import OrderPlaced from './container/OrderPlaced';
import Login from './container/Login';
import Registration from './container/Registration';
import BookDetails from './container/BookDetails';
import AdminDashboard from './container/AdminDashboard';
import SellerDashboard from './container/SellerDashboard';
import ResetPassword from './container/ResetPassword';
import ForgotPassword from './container/ForgotPassword';
import Verify from './container/Verify';
import asyncComponent from './hoc/asyncComponent';
import Wishlist from './container/Wishlist';

const PrivateRoute = asyncComponent(() => {
  return import('./auth/PriviteRoute');
})

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/resetpassword/:token" component={ResetPassword} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
          <Route exact path="/verify" component={Verify} />
          <Route exact path="/bookstore/admin" component={AdminDashboard} />
          <Route exact path="/bookstore/seller" component={SellerDashboard} />
          <Route exact path="/register" component={Registration} />
          <Route exact path="/bookstore/user" component={Dashboard} />
          <PrivateRoute exact path="/bookstore/user/cart" component={Cart} />
          <Route exact path="/bookstore/user/wishlist" component={Wishlist} />
          <PrivateRoute exact path="/bookstore/user/oderplaced" component={OrderPlaced} />
          <Route exact path="/bookstore/user/bookdetails" component={BookDetails} />
          <Redirect from="*" to="/bookstore/user" />
        </Switch>
      </div>
    );
  }
}

export default App;
