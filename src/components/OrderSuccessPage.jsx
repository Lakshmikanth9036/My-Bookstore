import React, { Component } from 'react';
import classes from '../scss_styles/OrderSuccessPage.module.scss';
import success from '../assets/images/Success2x.png';
import { Button } from '@material-ui/core';

class OrderSuccessPage extends Component {

    goToBookStore = () => {
        this.props.history.push('/bookstore');
    }

    render() {
        return (
            <div className={classes.OrderSuccessPage}>
                <div className={classes.OrderPlaced}>
                    <img className={classes.OrderPlacedImg} src={success} alt="success" />
                    <div className={classes.OrderText}>order placed successfully</div>
                    <div className={classes.OrderSummery}>
                        hurray!!! your order is confirmed the order id is #123456 save the order id for further communication..
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <th>Emial us</th>
                                <th>Contact us</th>
                                <th>Address</th>
                            </tr>
                            <tr>
                                <td>admin@bookstore.com</td>
                                <td>+91 8163475881</td>
                                <td>42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near Kumarakom restaurant, HSR Layout, Bangalore 560034</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={classes.ContinueShopping}>
                        <Button onClick={this.goToBookStore} className={classes.ContinueShoppingButton} variant="contained" color="primary">Continue Shopping</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderSuccessPage
