import React, { Component } from 'react';
import classes from '../scss_styles/Books.module.scss';
import { Card, Button, Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

const LightTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: theme.palette.common.white,
        color: '#9D9D9D',
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}))(Tooltip);

class Book extends Component {

    state = {
        anchorEl: null
    }

    handleBookDescriptionOpen = event => {
        this.setState({ anchorEl: event.currentTarget })
    }

    handleBookDescriptionClose = () => {
        this.setState({ anchorEl: null })
    }

    handleBookDetails = (book) => {
        console.log(book)
        const params = { book: book }
        this.props.history.push('/bookstore/user/bookdetails', params)
    }

    render() {

        const { book } = this.props
        return (

            <LightTooltip title={
                <div className={classes.BookDetails}>
                    <div className={classes.BookDetail}>Book Detail</div>
                    <div className={classes.BookDescription}>{book.description}</div>
                </div>
            } placement="right">
                <Card className={classes.Book}>
                    <div className={classes.BookImageCont}>
                        <img className={classes.BookImage} onClick={() => this.handleBookDetails(book)} src={require(`../assets/images/${book.bookImage}`)} alt="book" />
                    </div>
                    <div className={classes.BookDetails}>
                        <div className={classes.BookName}>{book.bookName}</div>
                        <div className={classes.AuthorName}>{book.authorName}</div>
                        <div className={classes.BookPrice}><strong>Rs. {book.bookPrice}</strong></div>
                    </div>

                    {
                        book.noOfBooks === 0 ? <div className={classes.WishlistOnly} style={book.noOfBooks === 0 || book.noOfBooks < 5 ? { marginBottom: "-26px" } : null}>
                            <Button className={classes.WishlistOnlyButton} variant="outlined">Wishlist</Button>
                        </div> :
                            book.isCart ? <div className={classes.GoToBag} style={book.noOfBooks === 0 || book.noOfBooks < 5 ? { marginBottom: "-26px" } : null}>
                                <Button className={classes.GoToBagButton} variant="contained" color="primary">Added to bag</Button>
                            </div>
                                :
                                <div className={classes.CartWishlist} style={book.noOfBooks === 0 || book.noOfBooks < 5 ? { marginBottom: "-26px" } : null}>
                                    <Button className={classes.BagButton} variant="contained" color="primary">Add to bag</Button>
                                    <Button className={classes.WishlistButton} variant="outlined">Wishlist</Button>
                                </div>
                    }

                    {
                        book.noOfBooks === 0 ? <div className={classes.Outofstock}>out of stock</div> :
                            book.noOfBooks < 5 ? <div className={classes.Outofstock}>Only {book.noOfBooks} books left</div> : null
                    }
                </Card>
            </LightTooltip>
        )
    }
}

export default withRouter(Book)
