import React, { Component, Fragment } from 'react';
import NavBar from '../components/NavBar';
import CartDetails from '../components/CartDetails';
import Footer from '../components/Footer';

class Cart extends Component {
    render() {
        return (
            <Fragment>
                <NavBar />
                     <CartDetails {...this.props}/>
                <Footer />
            </Fragment>
        )
    }
}

export default Cart
