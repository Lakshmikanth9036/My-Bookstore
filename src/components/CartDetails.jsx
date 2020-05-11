import React, { Component } from 'react'
import classes from '../scss_styles/CartDetails.module.scss';
import { Card, IconButton, Button, FormControlLabel, RadioGroup } from '@material-ui/core';
import book from '../assets/images/Image1.png';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import StyledRadio from '../elements/StyledRadio';
import CssTextField from '../elements/CssTextField';

class CartDetails extends Component {

    state = {
        placeOrder: false,
        continue: false,
        type: 'Home',
        quantity: 1
    }

    placeOrderHandler = () => {
        this.setState(prevState => {
            return { placeOrder: !prevState.placeOrder }
        })
    }

    continueHandler = () => {
        this.setState(prevState => {
            return { continue: !prevState.continue }
        })
    }

    orderPlaced = () => {
        this.props.history.push('/bookstore/oderplaced');
    }

    handleRadioChange = event => {
        this.setState({
            type: event.target.value
        })
    }

    addBookHandler = () => {
        this.setState(prevState => {
            return { quantity: prevState.quantity + 1 }
        })
    }

    removeBookHandler = () => {
        this.setState(prevState => {
            return { quantity: prevState.quantity - 1 }
        })
    }

    render() {

        return (
            
            <div className={classes.CartDetails}>
                <Card className={classes.CartItem} variant="outlined">
                    <div className={classes.No_of_cart_items}>My cart(2)</div>
                    <div className={classes.Item}>
                        <img className={classes.BookImage} src={book} alt="book" />
                        <div className={classes.BookDetails}>
                            <div className={classes.BookName}>Don't Make Me Think</div>
                            <div className={classes.AuthorName}>by Steve Krug</div>
                            <div className={classes.BookPrice}><strong>Rs. 1500</strong></div>

                            <div className={classes.BookQuantity} style={this.state.placeOrder ? { marginBottom: "16px" } : null}>
                                <IconButton className={classes.Minus} disabled={this.state.quantity <= 1 || this.state.placeOrder} onClick={this.removeBookHandler} size="small">
                                    <RemoveIcon fontSize="small" />
                                </IconButton>
                                <div className={classes.Quantity}>{this.state.quantity}</div>
                                <IconButton className={classes.Pluse} disabled={this.state.placeOrder} size="small" onClick={this.addBookHandler}>
                                    <AddIcon fontSize="small" />
                                </IconButton>
                                <Button
                                    style={{
                                        fontWeight: "500",
                                        fontSize: '12px',
                                        textTransform: 'capitalize'
                                    }} >Remove</Button>
                            </div>
                        </div>
                    </div>
                    <div className={classes.PlaceOrder} style={!this.state.placeOrder ? null : { display: "none" }}>
                        <Button className={classes.PlaceOrderButton} onClick={this.placeOrderHandler} variant="contained" color="primary">Place order</Button>
                    </div>
                </Card>
                <Card className={classes.CustomerDetails} variant="outlined">
                    <div className={classes.DetailsHeader}>
                        <div className={classes.Text}>Customer Details</div>
                        {this.state.continue ? <div className={classes.Edit} onClick={this.continueHandler}>Edit</div> : null }
                    </div>
                    <div className={classes.Details} style={this.state.placeOrder ? { display: "flex" } : { display: "none" }}>
                        <div className={classes.Row_1}>
                            <CssTextField
                                className={classes.Textfield}
                                disabled={this.state.continue}
                                required
                                autoComplete="off"
                                variant="outlined"
                                label="Name" />
                            <CssTextField
                                className={classes.Textfield}
                                disabled={this.state.continue}
                                required
                                autoComplete="off"
                                variant="outlined"
                                label="Phone number" />
                        </div>
                        <div className={classes.Row_2}>
                            <CssTextField
                                className={classes.Textfield}
                                disabled={this.state.continue}
                                required
                                autoComplete="off"
                                variant="outlined"
                                label="Pincode" />
                            <CssTextField
                                className={classes.Textfield}
                                disabled={this.state.continue}
                                required
                                autoComplete="off"
                                variant="outlined"
                                label="Locality" />
                        </div>
                        <div className={classes.Row_3}>
                            <CssTextField
                                style={{
                                    width: "512px"
                                }}
                                disabled={this.state.continue}
                                required
                                autoComplete='off'
                                variant="outlined"
                                multiline
                                rows={3}
                                label="Address" />
                        </div>
                        <div className={classes.Row_4}>
                            <CssTextField
                                className={classes.Textfield}
                                disabled={this.state.continue}
                                required
                                autoComplete="off"
                                variant="outlined"
                                label="City/Town" />
                            <CssTextField
                                className={classes.Textfield}
                                disabled={this.state.continue}
                                required
                                autoComplete="off"
                                variant="outlined"
                                label="Landmark" />
                        </div>
                        <div className={classes.Type}>
                            <div style={{ fontSize: "12px", color: "#333232", textAlign: "left", marginTop: "16px" }}>Type</div>
                            <RadioGroup style={this.state.continue ? {
                                display: "flex",
                                width: "60%",
                                marginBottom: "30px",
                                justifyContent: "space-between"
                            } : {
                                    display: "flex",
                                    width: "60%",
                                    justifyContent: "space-between"
                                }} row aria-label="position" name="position" value={this.state.type} onChange={this.handleRadioChange}>
                                <FormControlLabel disabled={this.state.continue} value="Home" control={<StyledRadio />} label={<div style={{ fontSize: "13px", fontWeight: "500", color: "#333232" }}>Home</div>} />
                                <FormControlLabel disabled={this.state.continue} value="Office" control={<StyledRadio />} label={<div style={{ fontSize: "13px", fontWeight: "500", color: "#333232" }}>Office</div>} />
                                <FormControlLabel disabled={this.state.continue} value="Other" control={<StyledRadio />} label={<div style={{ fontSize: "13px", fontWeight: "500", color: "#333232" }}>Other</div>} />
                            </RadioGroup>
                        </div>
                        <div className={classes.Continue} style={!this.state.continue ? null : { display: "none" }}>
                            <Button className={classes.ContinueButton} onClick={this.continueHandler} variant="contained" color="primary">Continue</Button>
                        </div>
                    </div>
                </Card>
                <Card className={classes.OrderSummery} variant="outlined">
                    <div className={classes.Summery}>Order summery</div>
                    <div className={classes.OrderDetails} style={this.state.continue ? { display: "flex" } : { display: "none" }}>
                        <div className={classes.OrderedItem}>
                            <img className={classes.OrderedBookImage} src={book} alt="book" />
                            <div className={classes.OrderedBookDetails}>
                                <div className={classes.OrderedBookName}>Don't Make Me Think</div>
                                <div className={classes.OrderedAuthorName}>by Steve Krug</div>
                                <div className={classes.OrderedBookPrice}><strong>Rs. 1500</strong></div>
                            </div>
                        </div>
                        <div className={classes.Checkout}>
                            <Button className={classes.CheckoutButton} onClick={this.orderPlaced} variant="contained" color="primary">Checkout</Button>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}

export default CartDetails
