import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { IconButton, InputBase, Avatar, MenuItem, Popper, Grow, Paper, ClickAwayListener, MenuList } from '@material-ui/core';
import classes from '../scss_styles/NavBar.module.scss';
import book from '../assets/images/education@2x.png';
import cart from '../assets/images/supermarket@2x.png';
import profile from '../assets/images/ichigo.jpg';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

class NavBar extends Component {

    state = {
        menuOpen: false
    }

    menuOpenToggle = () => {
        this.setState(
            prevState => { return { menuOpen: !prevState.menuOpen } }
        )
    }

    menuClose = e => {
        if (this.anchorEl.contains(e.target)) {
            return;
        }
        this.setState({ menuOpen: false })
    }

    goToCart = () => {
        this.props.history.push('/bookstore/user/cart');
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
                        <div className={classes.Search}>
                            <div className={classes.SearchIcon}>
                                <SearchIcon fontSize="small" />
                            </div>
                            <InputBase
                                placeholder="Search..."
                                className={classes.Input} />
                        </div>
                    </div>

                    <div className={classes.Cart}>
                        <div className={classes.CartName}>Cart</div>
                        <IconButton onClick={this.goToCart}>
                            <img className={classes.CartLogo} src={cart} alt="cart-logo" />
                        </IconButton>
                        <IconButton>
                            <Avatar src={profile} />
                        </IconButton>
                    </div>

                    <div className={classes.Menu}>
                        <IconButton
                            aria-label="show more"
                            buttonRef={node => { this.anchorEl = node }}
                            aria-haspopup="true"
                            onClick={this.menuOpenToggle}
                            color="inherit">
                            <MoreIcon style={{ color: "white" }} />
                        </IconButton>
                        <Popper open={this.state.menuOpen} anchorEl={this.anchorEl} role={undefined} transition disablePortal>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
                                    <Paper>
                                        <ClickAwayListener onClickAway={this.menuClose}>
                                            <MenuList autoFocusItem={this.state.menuOpen} id="menu-list-grow">
                                                <MenuItem>Profile</MenuItem>
                                                <MenuItem onClick={this.goToCart}>My Cart</MenuItem>
                                                <MenuItem>Logout</MenuItem>
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </div>

                </header>
            </Fragment>
        )
    }
}

export default withRouter(NavBar)
