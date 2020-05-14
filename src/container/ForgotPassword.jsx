import React, { Component } from 'react';
import bookstorelogo from '../assets/images/bookstore.png';
import classes from '../scss_styles/ForgotPassword.module.scss';
import { Card, InputAdornment, Button, RadioGroup, FormControlLabel, Backdrop } from '@material-ui/core';
import TextField from '../elements/CssTextField';
import EmailIcon from '@material-ui/icons/Email';
import StyledRadio from '../elements/StyledRadio';
import Loader from '../UI/Loader';

class ForgotPassword extends Component {

    state = {
        emailAddress: '',
        validEmail: false,
        error: '',
        valid: false,
        type: 'User',
        loader: false
    }

    submitHandler = () => {

        this.setState({ loader: true })
        setTimeout(() => {
                this.props.history.push('/login')
        }, 3000)
    }

    handleRadioChange = event => {
        this.setState({
            type: event.target.value
        })
    }

    changeHandler = event => {
        let emailAddress = event.target.value;
        let isValid = this.isValidForm(emailAddress);
        this.setState({
            emailAddress: emailAddress,
            valid: isValid
        })
    }

    isValidForm = (emailAddress) => {

        let formIsValid = true;
        let error = this.state.error;
        let validEmail = this.state.validEmail;

        if (!emailAddress) {
            formIsValid = false;
        }

        if (typeof emailAddress !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(emailAddress)) {
                validEmail = true;
                formIsValid = false;
                error = "*Please enter valid email-ID.";
            }
            else {
                validEmail = false
            }
        }

        this.setState({
            error: error,
            validEmail: validEmail
        })
        return formIsValid;
    }

    render() {

        const { emailAddress, validEmail, error, valid, loader} = this.state
        return (
            <div className={classes.ForgotpasswordContainer}>
                <Card className={classes.ForgotpasswordCard} variant="outlined">
                    <img className={classes.Logo} src={bookstorelogo} alt="book-store-logo" />
                    <div className={classes.Forgot}>Forgot Password</div>
                    <div className={classes.Form}>
                        <TextField
                            style={{ marginBottom: "7px" }}
                            name="emailAddress"
                            id="emailAddress"
                            value={emailAddress}
                            error={validEmail}
                            helperText={validEmail ? error : 'Email'}
                            onChange={this.changeHandler}
                            label="Email Address"
                            variant="outlined"
                            size="small"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <EmailIcon fontSize="small" />
                                    </InputAdornment>
                                ),
                            }} />
                        <div className={classes.Buttons}>
                            <Button disabled={!valid} className={classes.Submit} onClick={this.submitHandler} variant='contained'>Submit</Button>
                        </div>
                        <RadioGroup style={{
                            display: "flex",
                            width: "80%",
                            marginBottom: "20px",
                            marginLeft: "12%",
                            justifyContent: "space-between"
                        }} row aria-label="position" name="position" value={this.state.type} onChange={this.handleRadioChange}>
                            <FormControlLabel value="User" control={<StyledRadio />} label={<div style={{ fontSize: "13px", fontWeight: "500", color: "#333232" }}>User</div>} />
                            <FormControlLabel value="Seller" control={<StyledRadio />} label={<div style={{ fontSize: "13px", fontWeight: "500", color: "#333232" }}>Seller</div>} />
                            <FormControlLabel value="Admin" control={<StyledRadio />} label={<div style={{ fontSize: "13px", fontWeight: "500", color: "#333232" }}>Admin</div>} />
                        </RadioGroup>
                    </div>
                    <Backdrop className={classes.ZIndex} open={loader}>
                        <Loader />
                    </Backdrop>
                </Card>
            </div>
        )
    }
}

export default ForgotPassword
