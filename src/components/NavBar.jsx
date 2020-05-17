import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { IconButton, InputBase, Avatar, MenuItem, Popper, Grow, Paper, ClickAwayListener, MenuList, Badge, withStyles } from '@material-ui/core';
import classes from '../scss_styles/NavBar.module.scss';
import book from '../assets/images/education@2x.png';
import cart from '../assets/images/supermarket@2x.png';
import profile from '../assets/images/ichigo.jpg';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import LoginInDashboard from './LoginInDashboard';

const StyledBadge = withStyles((theme) => ({
    badge: {
        
        borderRadius: '50%',
        fontSize: '9px',
        color: '#A03037',
        right: -3,
        border: `2px solid #A03037`,
        padding: '0 4px',
        backgroundColor: '#ffffff'
    },
}))(Badge);

class NavBar extends Component {

    state = {
        anchorEl: null,
        login: false
    }

    menuOpenToggle = e => {
        this.setState({ anchorEl: e.currentTarget })
    }

    menuClose = () => {
        this.setState({ anchorEl: null })
    }

    isUserLoggedIn = () => {
        return JSON.parse(localStorage.getItem('UserToken'))
    }

    goToCart = () => {
        if (!this.isUserLoggedIn()) {
            this.setState(prevState => {
                return { login: !prevState.login }
            })
        }
        else {
            this.props.history.push('/bookstore/user/cart');
        }
    }

    login = () => {
        this.setState(prevState => {
            return { login: !prevState.login }
        })
    }

    logout = () => {
        localStorage.removeItem('UserToken');
        this.props.history.push('/bookstore/user');
    }

    goToBookStore = () => {
        this.props.history.push('/bookstore/user');
    }

    render() {
        return (
            <Fragment>
                <header className={classes.NavBar} >
                    <div className={classes.BookSearch}>
                        <div className={classes.BookLogoText}>
                            <img onClick={this.goToBookStore} className={classes.Logo} src={book} alt="book-logo" />
                            <div className={classes.BookStore}>bookstore</div>
                        </div>
                    </div>
                    <div className={classes.Search}>
                        <div className={classes.SearchIcon}>
                            <SearchIcon fontSize="small" />
                        </div>
                        <InputBase
                            placeholder="Search..."
                            className={classes.Input} />
                    </div>

                    <div className={classes.Cart}>
                        <div className={classes.CartName}>Cart</div>
                        <IconButton onClick={this.goToCart}>
                            <StyledBadge badgeContent={0} showZero>
                                <img className={classes.CartLogo} src={cart} alt="cart-logo" />
                            </StyledBadge>
                        </IconButton>
                        <IconButton
                            aria-label="show more"
                            aria-haspopup="true"
                            onClick={this.menuOpenToggle}
                            color="inherit">
                            <Avatar src={profile} />
                        </IconButton>
                        <Popper open={Boolean(this.state.anchorEl)} anchorEl={this.state.anchorEl} role={undefined} transition disablePortal>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
                                    <Paper>
                                        <ClickAwayListener onClickAway={this.menuClose}>
                                            <MenuList autoFocusItem={Boolean(this.state.anchorEl)} id="menu-list-grow">
                                                <MenuItem>Profile</MenuItem>
                                                <MenuItem>My Whishlist</MenuItem>
                                                {!this.isUserLoggedIn() ? <MenuItem onClick={this.login}>Login</MenuItem> : <MenuItem onClick={this.logout}>Logout</MenuItem>}
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </div>

                    <div className={classes.Menu}>
                        <IconButton
                            aria-label="show more"
                            aria-haspopup="true"
                            onClick={this.menuOpenToggle}
                            color="inherit">
                            <MoreIcon style={{ color: "white" }} />
                        </IconButton>
                        <Popper open={Boolean(this.state.anchorEl)} anchorEl={this.state.anchorEl} role={undefined} transition disablePortal>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
                                    <Paper>
                                        <ClickAwayListener onClickAway={this.menuClose}>
                                            <MenuList autoFocusItem={Boolean(this.state.anchorEl)} id="menu-list-grow">
                                                <MenuItem>Profile</MenuItem>
                                                <MenuItem onClick={this.goToCart}>My Cart</MenuItem>
                                                <MenuItem>My Whishlist</MenuItem>
                                                <MenuItem onClick={this.login}>Login</MenuItem>
                                                <MenuItem>Logout</MenuItem>
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </div>
                </header>
                {this.state.login ? <LoginInDashboard /> : null}
            </Fragment>
        )
    }
}

export default withRouter(NavBar)
