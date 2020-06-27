import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { IconButton, InputBase, Avatar, MenuItem, Badge, withStyles, Menu, Divider } from '@material-ui/core';
import classes from '../scss_styles/NavBar.module.scss';
import book from '../assets/images/education@2x.png';
import cart from '../assets/images/supermarket@2x.png';
import profile from '../assets/images/ichigo.jpg';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import LoginInDashboard from './LoginInDashboard';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShopIcon from "@material-ui/icons/Shop";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StoreIcon from '@material-ui/icons/Store';

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

    goToAdminDashboard = () => {
        this.props.history.push('/bookstore/admin');
    }

    goToSellerDashboard = () => {
        this.props.history.push('/bookstore/seller');
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

    goToWishlist = () => {
        this.props.history.push('/bookstore/user/wishlist');
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
                            <StyledBadge badgeContent={22} showZero>
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
                        <Menu
                            id={classes.SimpleMenu}
                            anchorEl={this.state.anchorEl}
                            getContentAnchorEl={null}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center",
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                            keepMounted
                            open={Boolean(this.state.anchorEl)}
                            onClose={this.menuClose}>
                            <MenuItem>
                                <div className={classes.ProfileImgDiv}>
                                    <img
                                        src={profile}
                                        alt="avatar"
                                        style={{
                                            height: "2cm",
                                            width: "2cm",
                                            borderRadius: "50%",
                                            border: "2px solid grey",
                                        }}
                                    />
                                </div>
                            </MenuItem>
                            <MenuItem>
                                <div className={classes.Profilemenu}>
                                    <div className={classes.ProfilemenuNewcustomer}>
                                        New Customer?
                                         </div>
                                    <a href="/register" className={classes.ProfilemenuSignup}>
                                        Sign Up
                                        </a>
                                </div>
                            </MenuItem>
                            <MenuItem onClick={this.goToAdminDashboard}> 
                                <div className={classes.AccountMenu}>
                                    <div className={classes.AccountIcon}>
                                        <AccountCircleIcon />
                                    </div>
                                    <div className={classes.ProfileHeading}>Admin</div>
                                </div>
                            </MenuItem>
                            <MenuItem onClick={this.goToSellerDashboard}>
                                <div className={classes.AccountMenu}>
                                    <div className={classes.AccountIcon}>
                                        <StoreIcon />
                                    </div>
                                    <div className={classes.ProfileHeading}>Seller</div>
                                </div>
                            </MenuItem>
                            <MenuItem onClick={this.goToWishlist}>
                                <div className={classes.WishlistMenu}>
                                    <div className={classes.WishlistIcon}>
                                        <FavoriteIcon />
                                    </div>
                                    <div className={classes.WishlistHeading}>Wishlist</div>
                                </div>
                            </MenuItem>
                            <MenuItem onClick={this.goToCart}>
                                <div className={classes.OrderMenu}>
                                    <div className={classes.ShoppingIcon}>
                                        <ShoppingCartIcon />
                                    </div>
                                    <div className={classes.OrdersHeading}>Cart</div>
                                </div>
                            </MenuItem>
                            <Divider/>
                            <MenuItem>
                                <div className={classes.SignoutMenu}>
                                    <div className={classes.Signout}>Sign Out</div>
                                </div>
                            </MenuItem>
                         
                        {/* {!this.isUserLoggedIn() ? <MenuItem onClick={this.login}>Login</MenuItem> : <MenuItem onClick={this.logout}>Logout</MenuItem>} */}
                        </Menu>
                    </div>

                <div className={classes.Menu}>
                    <IconButton
                        aria-label="show more"
                        aria-haspopup="true"
                        onClick={this.menuOpenToggle}
                        color="inherit">
                        <MoreIcon style={{ color: "white" }} />
                    </IconButton>
                    {/* <Menu
                            id={classes.SimpleMenu}
                            anchorEl={this.state.anchorEl}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center",
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                            keepMounted
                            open={Boolean(this.state.anchorEl)}
                            onClose={this.menuClose}>
                            <MenuItem>
                                <div className={classes.ProfileDiv}>
                                    <img
                                        src={profile}
                                        alt="avatar"
                                        style={{
                                            height: "2cm",
                                            width: "2cm",
                                            borderRadius: "50%",
                                            border: "2px solid grey",
                                        }}
                                    />
                                </div>
                            </MenuItem>
                            <MenuItem>
                                <div className={classes.Profilemenu}>
                                    <div className={classes.ProfilemenuNewcustomer}>
                                        New Customer?
                                         </div>
                                    <a href="/register" className={classes.ProfilemenuSignup}>
                                        Sign Up
                                        </a>
                                </div>
                            </MenuItem>
                            <MenuItem>
                                <div className={classes.AccountMenu}>
                                    <div className={classes.AccountIcon}>
                                        <AccountCircleIcon />
                                    </div>
                                    <div className={classes.ProfileHeading}>Profile</div>
                                </div>
                            </MenuItem>
                            <MenuItem>
                                <div className={classes.WishlistMenu}>
                                    <div className={classes.WishlistIcon}>
                                        <FavoriteIcon />
                                    </div>
                                    <div className={classes.WishlistHeading}>Wishlist</div>
                                </div>
                            </MenuItem>
                            <MenuItem>
                                <div className={classes.OrderMenu}>
                                    <div className={classes.ShoppingIcon}>
                                        <ShopIcon />
                                    </div>
                                    <div className={classes.OrdersHeading}>Orders</div>
                                </div>
                            </MenuItem>
                        {!this.isUserLoggedIn() ? <MenuItem onClick={this.login}>Login</MenuItem> : <MenuItem onClick={this.logout}>Logout</MenuItem>}
                        </Menu> */}
                </div>
                </header >
                { this.state.login ? <LoginInDashboard /> : null }
            </Fragment >
        )
    }
}

export default withRouter(NavBar)
