import React, { Component } from 'react';
import { Dialog, Slide, Link, Button, InputAdornment, IconButton, Backdrop } from '@material-ui/core';
import classes from '../scss_styles/LoginInDashboard.module.scss';
import TextField from '../elements/CssTextField';
import EmailIcon from '@material-ui/icons/Email';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Loader from '../UI/Loader';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

class LoginInDashboard extends Component {

    state = {
        open: true,
        loader: false,
        fields: {},
        errors: {},
        valid: {
            emailAddress: false,
            password: false
        },
        showPassword: false,
        isValid: false,
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
        this.setState({ open: false })
    }

    loginHandler = () => {
        this.setState({ loader: true })
        setTimeout(() => {
            this.setState({ loader: false })
            setTimeout(() => {
                localStorage.setItem('UserToken', JSON.stringify('eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiZXhwIjoxNTg4NzU5NDQ2fQ.BGJkdNKnsOCIW_61hM3eDhHuJPb7MYTDF0sWv0D-OzGKQPEFeeTwFGCSGPK6ebb00OGojFgDrIMwxbY8NqyRPA'));
                // this.props.history.push('/bookstore/user')
                this.handleClose()
            }, 2000)
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

        const { fields, errors, valid, showPassword, open } = this.state

        return (
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                maxWidth='lg'
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description">
                <div className={classes.LoginCard}>
                    <div className={classes.Login}>Login</div>
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
                            <Button disabled={!this.state.isValid} className={classes.LoginButton} onClick={this.loginHandler} variant='contained'>Login</Button>
                        </div>
                    </div>
                    <Backdrop className={classes.ZIndex} open={this.state.loader}>
                        <Loader />
                    </Backdrop>
                </div>
            </Dialog>
        )
    }
}

export default LoginInDashboard
