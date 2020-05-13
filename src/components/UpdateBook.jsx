import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import classes from '../scss_styles/UpdateBook.module.scss';
import { Slide, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';
import TextField from '../elements/CssTextField';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

class UpdateBook extends Component {

    state = {
        open: true,
        book: {}

    }

    componentDidMount() {
        this.setState({
          book: this.props.book
        })
    }

    handleClose = () => {
        this.setState({ open: false })
    }

    udateBookHandler = () => {
        console.log(this.state.book)
        this.handleClose();
    }

    changeHandler = event => {
        let book = {...this.state.book}
        book[event.target.name] = event.target.value
        this.setState({
            book: book
        })
    }

    render() {
        const { open,book } = this.state
        return (
            <Dialog
                open={open}
                TransitionComponent={Transition}
                className={classes.UpdateBookCont}
                keepMounted
                // fullWidth={true}
                // maxWidth='sm'
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Edit Book"}</DialogTitle>
                <DialogContent style={{ width: "320px" }}>
                    <div className={classes.BookInfo}>
                        <div className={classes.Book_Name_Div}>
                            <TextField required name="bookName" onChange={this.changeHandler} id="bookName" fullWidth label="Book Name" value={book.bookName} />
                        </div>
                        <div className={classes.Author_Name_Div}>
                            <TextField required name="authorName" onChange={this.changeHandler} id="authorName" fullWidth label="Author Name" value={book.authorName} />
                        </div>
                        <div className={classes.Book_Price_Div}>
                            <TextField required name="bookPrice" onChange={this.changeHandler} id="bookPrice" fullWidth label="Book Price" value={book.bookPrice} />
                        </div>
                        <div className={classes.No_of_Book_Div}>
                            <TextField required name="noOfBooks" onChange={this.changeHandler} id="noOfBooks" fullWidth label="No. of books" value={book.noOfBooks} />
                        </div>
                        <div className={classes.Description}>
                            <TextField required name="description" onChange={this.changeHandler} id="description" multiline rows={3} fullWidth label="Description" value={book.description} />
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <div className={classes.Done_Button}>
                        <Button onClick={this.udateBookHandler} variant="contained">Done</Button>
                    </div>
                </DialogActions>
            </Dialog>
        )
    }
}

export default UpdateBook
