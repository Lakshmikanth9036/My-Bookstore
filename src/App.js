import React, { Component } from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './container/Dashboard';
import Cart from './container/Cart';
import OrderPlaced from './container/OrderPlaced';
import Login from './container/Login';
import Registration from './container/Registration';
import BookDetails from './container/BookDetails';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/bookstore" component={Dashboard} />
          <Route exact path="/bookstore/cart" component={Cart} />
          <Route exact path="/bookstore/oderplaced" component={OrderPlaced} />
          <Route exact path="/bookstore/bookdetails" component={BookDetails}/>
          <Route exact path="/register" component={Registration} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
