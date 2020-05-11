import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import CartDetails from '../components/CartDetails';
import Footer from '../components/Footer';

class Cart extends Component {
    render() {
        return (
            <div>
                <NavBar />
                     <CartDetails {...this.props}/>
                <Footer />
            </div>
        )
    }
}

export default Cart
