import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import jwt from 'jsonwebtoken';

const UserToken = JSON.parse(localStorage.getItem('UserToken'))

const verify = () => {
    return jwt.decode(UserToken, { complete: true })
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <div>
        <Route {...rest} render={(props) => (
            UserToken == null || typeof UserToken === "undefined"
                ? <Fragment>
                    <Redirect to='/bookstore/user' />
                </Fragment>
                : 
                verify() ? <Component {...props} />
                    : <Fragment>
                        {localStorage.clear()}
                        <Redirect to='/bookstore/user' />
                    </Fragment>
        )} />
    </div>
)

export default PrivateRoute;