import React, { Component } from 'react';
import { Card, InputAdornment, IconButton, Button } from '@material-ui/core';
import TextField from '../elements/CssTextField';
import EmailIcon from '@material-ui/icons/Email';
import Visibility from '@material-ui/icons/Visibility';
import bookstorelogo from '../assets/images/bookstore.png';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ContactPhoneRoundedIcon from '@material-ui/icons/ContactPhoneRounded';
import classes from '../scss_styles/Registration.module.scss'

class Registration extends Component {

    state = {
        fields: {},
        errors: {},
        valid: {
            name: false,
            emailAddress: false,
            mobile: false,
            password: false
        },
        showPassword: false,
        isValid: false
    }

    changeHandler = (e) => {
        let fields = {...this.state.fields}
        fields[e.target.name] = e.target.value
        let isValid = this.isValidForm(fields);
        this.setState({
            fields:fields,
            isValid: isValid
        })
    }

    handleClickShowPassword = () => {
        let showPassword = !this.state.showPassword
        this.setState({ showPassword })
    }

    isValidForm = (fields) => {

        let valid = {...this.state.valid};
        let errors = {...this.state.errors};
        let formIsValid = true;

        if (!fields["name"]) {
            formIsValid = false;
        }

        if (typeof fields["name"] !== "undefined") {
            if (!fields["name"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                valid["name"]=true;
                errors["name"] = "*Please enter alphabet characters only.";
            }
            else{
                valid["name"]=false;
            }
        }
   
        if (!fields["emailAddress"]) {
            formIsValid = false;
            errors["emailAddress"] = "*Please enter your email-ID.";
        }

        if (typeof fields["emailAddress"] !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["emailAddress"])) {
               valid["emailAddress"]=true;
                formIsValid = false;
                errors["emailAddress"] = "*Please enter valid email-ID.";
            }
            else{
                valid["emailAddress"]=false
            }
        }
    
        if (!fields["mobile"]) {
            formIsValid = false;
            errors["mobile"] = "*Please enter your mobile no.";
        }

        if (typeof fields["mobile"] !== "undefined") {
            if (!fields["mobile"].match(/^[0-9]{10}$/)) {
              formIsValid = false;
                valid["mobile"]=true
                errors["mobile"] = "*Please enter valid mobile no.";
            }
            else{
                valid["mobile"]=false
            }
        }
    
        if (!fields["password"]) {
           formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }

        if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                valid["password"]=true
                errors["password"] = "*Please enter secure and strong password.";
            }
            else{
                valid["password"]=false
            }
        }

        this.setState({
            errors: errors,
            valid: valid
        })
        return formIsValid
    }

    render() {
        const { fields, errors, valid, showPassword } = this.state
        return (
            <div className={classes.RegistrationContainer}>
                <Card className={classes.RegisterCard} variant="outlined">
                    <img className={classes.Logo} src={bookstorelogo} alt="book-store-logo" />
                    <div className={classes.Signup}>Sign up</div>
                    <div className={classes.Form}>
                        <TextField
                        style={{ marginBottom: "7px" }}
                            name="name"
                            id="name"
                            value={fields.name}
                            error={valid.name}
                            helperText={valid.name ? errors.name : 'Name'}
                            onChange={this.changeHandler}
                            label="Name"
                            variant="outlined"
                            size="small"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
                            }} />
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
                                        <EmailIcon/>
                                    </InputAdornment>
                                ),
                            }} />
                        <TextField
                        style={{ marginBottom: "7px" }}
                            name="mobile"
                            id="mobile"
                            value={fields.mobile}
                            error={valid.mobile}
                            helperText={valid.mobile ? errors.mobile : 'Mobile No.'}
                            onChange={this.changeHandler}
                            label="Mobile No."
                            variant="outlined"
                            size="small"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <ContactPhoneRoundedIcon />
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
                                                <Visibility style={{ color: "black" }} />
                                                : <VisibilityOff style={{ color: "black" }} />}
                                        </IconButton>
                                    </InputAdornment>)
                            }}
                        />
                        <div className={classes.Buttons}>
                            <Button className={classes.SigninButton} href='/login'>Sign in</Button>
                            <Button disabled={!this.state.isValid} className={classes.SignupButton} variant='contained'>Sign up</Button>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}

export default Registration
