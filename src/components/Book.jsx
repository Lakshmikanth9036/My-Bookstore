import React, { Component } from 'react';
import classes from '../scss_styles/Books.module.scss';
import { Card, Button, 
    // Popover
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';

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
        const params = { book : book}
        this.props.history.push('/bookstore/user/bookdetails',params)
    }

    render() {
        // const { open } = this.state
        // const open = Boolean(this.state.anchorEl);
        const { book } = this.props
        return (
            <Card
                className={classes.Book}
                // variant="outlined"
                // aria-owns={open ? 'mouse-over-popover' : undefined}
                // buttonRef={node => { this.anchorEl = node }}
                // aria-haspopup="true"
                // onMouseEnter={this.handleBookDescriptionOpen}
                // onMouseLeave={this.handleBookDescriptionClose}
                >

                {/* <Popover
                    id="mouse-over-popover"
                    open={open}
                    anchorEl={this.anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    onClose={this.handleBookDescriptionClose}
                    disableRestoreFocus
                >
                    <div style={{
                         border: "1px solid #9d9d9d",
                         color: "#9d9d9d",
                         fontSize: "11px",
                         width: "456px",
                         height: "318px",
                    }}>{book.description}</div>
                </Popover> */}

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
        )
    }
}

export default withRouter(Book)
