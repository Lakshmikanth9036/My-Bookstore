import React, { Component, Fragment } from 'react';
import classes from '../scss_styles/AddBook.module.scss';
import { Fab, Tooltip, Slide, Dialog, DialogContent, DialogActions, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import TextField from '../elements/CssTextField';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export class AddBook extends Component {

    state = {
        open: false,
        book: {}
    }

    handleOpen = () => {
        this.setState({ open: true })
    }

    handleClose = () => {
        this.setState({ open: false })
    }

    addBookHandler = () => {
        console.log(this.state.book)
        let book = {
            bookName: '',
            authorName: '',
            bookPrice: '',
            noOfBooks: '',
            description: ''
        }
        this.setState({ book: book })
        this.handleClose();
    }

    changeHandler = event => {
        let book = { ...this.state.book }
        book[event.target.name] = event.target.value
        this.setState({
            book: book
        })
    }

    render() {

        const { open, book } = this.state

        return (
            <Fragment>
                <div className={classes.AddBookDiv}>
                    <Tooltip title="Add New Book">
                        <Fab onClick={this.handleOpen} size="medium" color='primary' aria-label="add" className={classes.margin}>
                            <AddIcon />
                        </Fab>
                    </Tooltip>
                </div>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    className={classes.UpdateBookCont}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <div className={classes.AddBookHeader}>
                        <div className={classes.AddBookTitle}>Add Book</div>
                    </div>
                    <DialogContent>
                        <div className={classes.BookInfo}>
                            <div className={classes.Book_Name_Div}>
                                <TextField required name="bookName" variant="outlined" onChange={this.changeHandler} id="bookName" fullWidth label="Book Name" value={book.bookName} />
                            </div>
                            <div className={classes.Author_Name_Div}>
                                <TextField required name="authorName" variant="outlined" onChange={this.changeHandler} id="authorName" fullWidth label="Author Name" value={book.authorName} />
                            </div>
                            <div className={classes.Book_Price_And_Count}>
                                <TextField required style={{ marginRight: "5px" }} size="small" name="bookPrice" variant="outlined" onChange={this.changeHandler} id="bookPrice" fullWidth label="Book Price" value={book.bookPrice} />
                                <TextField required style={{ marginLeft: "5px" }} size="small" name="noOfBooks" variant="outlined" onChange={this.changeHandler} id="noOfBooks" fullWidth label="No. of books" value={book.noOfBooks} />
                            </div>
                            <div className={classes.Description}>
                                <TextField required name="description" variant="outlined" onChange={this.changeHandler} id="description" multiline rows={5} fullWidth label="Description" value={book.description} />
                            </div>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <div className={classes.Done_Button}>
                            <Button onClick={this.addBookHandler} variant="contained">Done</Button>
                        </div>
                    </DialogActions>
                </Dialog>
            </Fragment>
        )
    }
}

export default AddBook
