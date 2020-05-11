import React, { Component, Fragment } from 'react'
import NavBar from '../components/NavBar';
import OrderSuccessPage from '../components/OrderSuccessPage';

class OrderPlaced extends Component {
    render() {
        return (
            <Fragment>
                <NavBar />
                <OrderSuccessPage {...this.props}/>
            </Fragment>
        )
    }
}

export default OrderPlaced
