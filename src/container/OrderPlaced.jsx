import React, { Component } from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import OrderSuccessPage from '../components/OrderSuccessPage';

class OrderPlaced extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <OrderSuccessPage {...this.props}/>
                <Footer />
            </div>
        )
    }
}

export default OrderPlaced
