import React, { Component } from 'react';
import { Card, Button } from '@material-ui/core';
import classes from '../scss_styles/AuthenticateBook.module.scss';

class AuthenticateBook extends Component {

    render() {
        const { book } = this.props
        return (
            <Card variant="outlined" className={classes.AuthenticateBookCard}>
                <div className={classes.Authenticate_BookDetails_Div}>
                    <div className={classes.Authenticate_Book_Item}>
                        <img className={classes.Authenticate_Book_Image} src={require(`../assets/images/${book.bookImage}`)} alt="book" />
                        <div className={classes.Book_Details}>
                            <div className={classes.Book_Name}>{book.bookName}</div>
                            <div className={classes.Author_Name}>{book.authorName}</div>
                            <div className={classes.Book_Price}><strong>Rs. {book.bookPrice}</strong></div>
                        </div>
                    </div>
                    <div className={classes.Authenticate_Book_Description}>
                        <div className={classes.Description_Text}>Description:</div>
                        <div className={classes.Description}>{book.description}</div>
                    </div>
                    <div className={classes.Authenticate_Div}>
                        <Button className={classes.Authenticate_Button} onClick={this.placeOrderHandler} variant="contained" color="primary">Authenticate</Button>
                    </div>
                </div>
            </Card>
        )
    }
}

export default AuthenticateBook
