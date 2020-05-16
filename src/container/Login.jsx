import React, { Component } from 'react';
import classes from '../scss_styles/Login.module.scss';
import { Card, InputAdornment, IconButton, Link, Button, RadioGroup, FormControlLabel, Backdrop, Snackbar } from '@material-ui/core';
import TextField from '../elements/CssTextField';
import EmailIcon from '@material-ui/icons/Email';
import Visibility from '@material-ui/icons/Visibility';
import bookstorelogo from '../assets/images/bookstore.png';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import StyledRadio from '../elements/StyledRadio';
import Loader from '../UI/Loader';

class Login extends Component {

    state = {
        fields: {},
        errors: {},
        valid: {
            emailAddress: false,
            password: false
        },
        showPassword: false,
        isValid: false,
        type: 'User',
        loader: false,
        open: false,
        snackMessage: ''
    }

    changeHandler = (e) => {
        let fields = { ...this.state.fields }
        fields[e.target.name] = e.target.value
        let isValid = this.isValidForm(fields);
        this.setState({
            fields: fields,
            isValid: isValid
        })
    }

    handleClickShowPassword = () => {
        this.setState(prevState => { return { showPassword: !prevState.showPassword } })
    }

    handleClose = () => {
        this.setState(prevState => { return { open: !prevState.open } })
    }

    handleRadioChange = event => {
        this.setState({
            type: event.target.value
        })
    }

    signInHandler = () => {
        this.setState({ loader: true })
        setTimeout(() => {
            if (this.state.type === 'User') {
                this.setState({ open: true, snackMessage: 'Successfully loged-in', loader: false })
                setTimeout(() => {
                    localStorage.setItem('UserToken', JSON.stringify('eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiZXhwIjoxNTg4NzU5NDQ2fQ.BGJkdNKnsOCIW_61hM3eDhHuJPb7MYTDF0sWv0D-OzGKQPEFeeTwFGCSGPK6ebb00OGojFgDrIMwxbY8NqyRPA'))
                    this.props.history.push('/bookstore/user')
                }, 2000)
            }
            else if (this.state.type === 'Admin')
                this.props.history.push('/bookstore/admin')
            else if (this.state.type === 'Seller')
                this.props.history.push('/bookstore/seller')
        }, 3000)
    }

    isValidForm = (fields) => {

        let valid = { ...this.state.valid };
        let errors = { ...this.state.errors };
        let formIsValid = true;

        if (!fields["emailAddress"]) {
            formIsValid = false;
            errors["emailAddress"] = "*Please enter your email-ID.";
        }

        if (typeof fields["emailAddress"] !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["emailAddress"])) {
                valid["emailAddress"] = true;
                formIsValid = false;
                errors["emailAddress"] = "*Please enter valid email-ID.";
            }
            else {
                valid["emailAddress"] = false
            }
        }

        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }

        if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                valid["password"] = true
                errors["password"] = "*Please enter secure and strong password.";
            }
            else {
                valid["password"] = false
            }
        }

        this.setState({
            errors: errors,
            valid: valid
        })
        return formIsValid
    }

    render() {
        const { fields, errors, valid, showPassword, open, snackMessage } = this.state
        return (
            <div className={classes.LoginContainer}>
                <Card className={classes.LoginCard} variant="outlined">
                    <img className={classes.Logo} src={bookstorelogo} alt="book-store-logo" />
                    <div className={classes.Signin}>Sign in</div>
                    <div className={classes.Form}>
                        <TextField
                            style={{ marginBottom: "7px" }}
                            name="emailAddress"
                            id="emailAddress"
                            value={fields.emailAddress}
                            error={valid.emailAddress}
                            helperText={valid.emailAddress ? errors.emailAddress : 'Email'}
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


                        <TextField
                            style={{ marginBottom: "7px" }}
                            size="small"
                            variant="outlined"
                            className="margin"
                            label="Password"
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={fields.password}
                            error={valid.password}
                            helperText={valid.password ? errors.password : 'Password'}
                            onChange={this.changeHandler}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            color="black"
                                            aria-label="toggle password visibility"
                                            onClick={this.handleClickShowPassword}
                                            edge="end">
                                            {showPassword ?
                                                <Visibility style={{ color: "black" }} fontSize="small" />
                                                : <VisibilityOff style={{ color: "black" }} fontSize="small" />}
                                        </IconButton>
                                    </InputAdornment>)
                            }}
                        />
                        <Link className={classes.Forget} href='/forgotpassword'>Forgot password?</Link>
                        <div className={classes.Buttons}>
                            <Button className={classes.SignupButton} href='/register'>Sign up</Button>
                            <Button disabled={!this.state.isValid} className={classes.SigninButton} onClick={this.signInHandler} variant='contained'>Sign in</Button>
                        </div>
                        <RadioGroup style={{
                            display: "flex",
                            width: "80%",
                            marginBottom: "20px",
                            alignSelf: "center",
                            justifyContent: "space-between"
                        }} row aria-label="position" name="position" value={this.state.type} onChange={this.handleRadioChange}>
                            <FormControlLabel value="User" control={<StyledRadio />} label={<div style={{ fontSize: "13px", fontWeight: "500", color: "#333232" }}>User</div>} />
                            <FormControlLabel value="Seller" control={<StyledRadio />} label={<div style={{ fontSize: "13px", fontWeight: "500", color: "#333232" }}>Seller</div>} />
                            <FormControlLabel value="Admin" control={<StyledRadio />} label={<div style={{ fontSize: "13px", fontWeight: "500", color: "#333232" }}>Admin</div>} />
                        </RadioGroup>
                    </div>
                </Card>
                <Backdrop className={classes.ZIndex} open={this.state.loader}>
                    <Loader />
                </Backdrop>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    autoHideDuration={1500}
                    key={new Date().getTime()}
                    open={open}
                    onClose={this.handleClose}
                    message={snackMessage}
                />
            </div>
        )
    }
}

export default Login
