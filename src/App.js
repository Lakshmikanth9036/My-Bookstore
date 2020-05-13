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

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/bookstore/user" component={Dashboard} />
          <Route exact path="/bookstore/admin" component={AdminDashboard} />
          <Route exact path="/bookstore/seller" component={SellerDashboard} />
          <Route exact path="/bookstore/user/cart" component={Cart} />
          <Route exact path="/bookstore/user/oderplaced" component={OrderPlaced} />
          <Route exact path="/bookstore/user/bookdetails" component={BookDetails}/>
          <Route exact path="/register" component={Registration} />
          <Route exact path="/login" component={Login} />
          <Redirect from="*" to="/login"/>
        </Switch>
      </div>
    );
  }
}

export default App;
