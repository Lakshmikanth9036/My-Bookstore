import React, { Component } from 'react';
import classes from '../scss_styles/Verify.module.scss';
import { Button } from '@material-ui/core';

class Verify extends Component {
    render() {
        return (
            <div className={classes.VerifyUserCont}>
                <div className={classes.VerifyUserDiv}>
                    <Button className={classes.VerifyButton} variant='contained'>Verify</Button>
                </div>
            </div>
        )
    }
}

export default Verify
