import React, { Component } from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './container/Dashboard';
import Cart from './container/Cart';
import OrderPlaced from './container/OrderPlaced';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
        <Route exact path="/bookstore" component={Dashboard} />
        <Route exact path="/bookstore/cart" component={Cart} />
        <Route exact path="/bookstore/oderplaced" component={OrderPlaced} />
        <Route component={Dashboard}/>
      </Switch>
      </div>
    );
  }
}

export default App;
