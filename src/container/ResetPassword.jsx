import React, { Component } from 'react';
import bookstorelogo from '../assets/images/bookstore.png';
import classes from '../scss_styles/ResetPassword.module.scss';
import { Card, InputAdornment, IconButton, Button, RadioGroup, FormControlLabel, Backdrop } from '@material-ui/core';
import TextField from '../elements/CssTextField';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';
import StyledRadio from '../elements/StyledRadio';
import Loader from '../UI/Loader';

class ResetPassword extends Component {

    state = {
        showPassword: false,
        password: '',
        passwordValid: false,
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


    componentDidMount() {
        console.log(this.props.match.params.token)
    }

    handleClickShowPassword = () => {
        this.setState(prevState => { return { showPassword: !prevState.showPassword } })
    }

    handleRadioChange = event => {
        this.setState({
            type: event.target.value
        })
    }

    changeHandler = event => {
        let password = event.target.value;
        let isValid = this.isValidForm(password);
        this.setState({
            password: password,
            valid: isValid
        })
    }

    isValidForm = (password) => {

        let formIsValid = true;
        let error = this.state.error;
        let passwordValid = this.state.passwordValid;

        if (!password) {
            formIsValid = false;
        }

        if (typeof password !== "undefined") {
            if (!password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                passwordValid = true;
                error = "*Please enter secure and strong password.";
            }
            else {
                passwordValid = false
            }
        }

        this.setState({
            error: error,
            passwordValid: passwordValid
        })
        return formIsValid;
    }

    render() {

        const { showPassword, password, error, passwordValid, valid } = this.state

        return (
            <div className={classes.ResetpasswordContainer}>
                <Card className={classes.ResetpasswordCard} variant="outlined">
                    <img className={classes.Logo} src={bookstorelogo} alt="book-store-logo" />
                    <div className={classes.Reset}>Reset Password</div>
                    <div className={classes.Form}>
                        <TextField
                            style={{ marginBottom: "7px" }}
                            size="small"
                            variant="outlined"
                            className="margin"
                            label="Password"
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={password}
                            error={passwordValid}
                            helperText={passwordValid ? error : 'Password'}
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
                    <Backdrop className={classes.ZIndex} open={this.state.loader}>
                        <Loader />
                    </Backdrop>
                </Card>
            </div>
        )
    }
}

export default ResetPassword
