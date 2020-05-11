import React, { Component } from 'react';
import classes from '../scss_styles/Books.module.scss';
import { Card, Button } from '@material-ui/core';
// import img from '';

class Book extends Component {

    render() {
        const { book } = this.props
        return (
            <Card className={classes.Book} variant="outlined">
                <div className={classes.BookImageCont}>
                    <img className={classes.BookImage} src={require(`../assets/images/${book.bookImage}`)} alt="book" />

                </div>
                <div className={classes.BookDetails}>
                    <div className={classes.BookName}>{book.bookName}</div>
                    <div className={classes.AuthorName}>{book.authorName}</div>
                    <div className={classes.BookPrice}><strong>Rs. {book.bookPrice}</strong></div>
                </div>

                {
                    book.noOfBooks === 0 ? <div className={classes.WishlistOnly} style={book.noOfBooks === 0 || book.noOfBooks < 5 ? {marginBottom:"-26px"} : null}>
                        <Button className={classes.WishlistOnlyButton} variant="outlined">Wishlist</Button>
                    </div> :
                    book.isCart ? <div className={classes.GoToBag} style={book.noOfBooks === 0 || book.noOfBooks < 5 ? {marginBottom:"-26px"} : null}>
                        <Button className={classes.GoToBagButton} variant="contained" color="primary">Added to bag</Button>
                    </div>
                        :
                        <div className={classes.CartWishlist} style={book.noOfBooks === 0 || book.noOfBooks < 5 ? {marginBottom:"-26px"} : null}>
                            <Button className={classes.BagButton} variant="contained" color="primary">Add to bag</Button>
                            <Button className={classes.WishlistButton} variant="outlined">Wishlist</Button>
                        </div>
                }

                {
                    book.noOfBooks === 0 ? <div className={classes.Outofstock}>out of stock</div> :
                        book.noOfBooks < 5 ? <div className={classes.Outofstock}>Only {book.noOfBooks} books left</div> : null
                }
            </Card>
        )
    }
}

export default Book
