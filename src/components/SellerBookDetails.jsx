import React, { Component, Fragment } from 'react';
import { Card, Button, Tooltip } from '@material-ui/core';
import classes from '../scss_styles/SellerDashboard.module.scss';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import UpdateBook from './UpdateBook';

class BookDetails extends Component {

    state = {
        editBook: false,
    }

    editBookHandler = () => {
        this.setState(prevState => {
            return { editBook: !prevState.editBook }
        })
    }

    fileSelectHandler = e => {
        console.log(e.target.files)
        const formData = new FormData();
        formData.append('file', e.target.files[0])
        console.log(e.target.files[0])
    }

    render() {
        const { book } = this.props
        return (
            <Card className={classes.BookDetailsCard} variant="outlined">
                <div className={classes.BookDetailsCont}>
                    <div className={classes.BookImageCont}>
                        <input onChange={this.fileSelectHandler} style={{ display: "none" }} id="icon-button-file" type="file" />
                        {book.bookImage ?
                            <Tooltip title="Click on Image to Upload Image">
                                <label htmlFor="icon-button-file">
                                    <img component="span" className={classes.Book_Image} src={require(`../assets/images/${book.bookImage}`)} alt="book" />
                                </label>
                            </Tooltip>
                            :
                            <Fragment>
                                <label htmlFor="icon-button-file">
                                    <Button
                                        variant="contained"
                                        color="default"
                                        component="span"
                                        startIcon={<CloudUploadIcon />}
                                    >Upload</Button>
                                </label>
                            </Fragment>
                        }
                    </div>
                    <div className={classes.BookDetail}>
                        <div className={classes.Book_Name}><strong>Book Name: </strong>{book.bookName}</div>
                        <div className={classes.Author_Name}><strong>Author Name: </strong>{book.authorName}</div>
                        <div className={classes.Book_Price}><strong>Book Price: </strong>{book.bookPrice}</div>
                        <div className={classes.No_of_books}><strong>No of books: </strong>{book.noOfBooks}</div>
                        <div className={classes.DescriptionText}><strong>Description:</strong></div>
                        <div className={classes.Description}>{book.description}</div>
                        <div className={classes.Edit}>
                            <Button className={classes.Edit_Button} onClick={this.editBookHandler} variant="outlined" color="default" >Edit</Button>
                            <Button className={classes.Remove_Button} variant="outlined">Remove</Button>
                        </div>
                    </div>
                </div>
                {this.state.editBook ? <UpdateBook book={book} /> : null}
            </Card>
        )
    }
}

export default BookDetails
