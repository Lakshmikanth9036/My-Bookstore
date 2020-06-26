import React, { Component, Fragment } from 'react';
import classes from '../scss_styles/AddBook.module.scss';
import { Fab, Tooltip, Slide, Dialog, DialogContent, Button, withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import TextField from '../elements/CssTextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const DarkTooltip = withStyles((theme) => ({
    tooltip: {
        boxShadow: theme.shadows[1],
        fontSize: 12,
    },
}))(Tooltip);

export class AddBook extends Component {

    state = {
        open: false,
        book: {
            bookName: '',
            authorName: '',
            bookPrice: '',
            noOfBooks: '',
            description: ''
        },
        fileName: 'No File Choosen',
        snackOpen: false,
        snackMessage: '',
        imageSizeLimit: '',
        blank: false,
        formData: new FormData(),
        loader: false
    }

    fileSelectHandler = e => {
        if (e.target.files[0].size < 2000000) {
            const formData = new FormData();
            formData.append('file', e.target.files[0])
            this.setState({ fileName: e.target.files[0].name, imageSizeLimit: '', formData: formData })
        }
        else {
            this.setState({ imageSizeLimit: 'Image size should be less than 2MB', fileName: 'No File Choosen' })
        }
    }

    handleOpen = () => {
        this.setState({ open: true });
    }

    handleClose = () => {
        this.setState({ open: false, imageSizeLimit: '' })
    }

    handleSnackClose = () => {
        this.setState({ snackOpen: false })
    }

    addBookHandler = () => {
        // let book = {
        //     bookName: '',
        //     authorName: '',
        //     bookPrice: 0,
        //     noOfBooks: 0,
        //     description: ''
        // }
        // let newBook = {
        //     bookName: this.state.book.bookName,
        //     bookAuthor: this.state.book.authorName,
        //     bookPrice: this.state.book.bookPrice,
        //     bookDescription: this.state.book.description,
        //     noOfBooks: this.state.book.noOfBooks
        // }
        this.handleClose();
    }

    changeHandler = event => {
        let book = { ...this.state.book }
        book[event.target.name] = event.target.value
        let blank = this.isBlank(book);
        this.setState({
            book: book,
            blank: blank
        })
    }

    isBlank = (book) => {
        let isBlank = true;
        if (!book["bookName"] || typeof book["bookName"] === "undefined") {
            isBlank = false;
        }
        if (!book["authorName"] || typeof book["authorName"] === "undefined"
        ) {
            isBlank = false;
        }
        if (!book["bookPrice"] || book["bookPrice"] < 0 || typeof book["bookPrice"] === "undefined") {
            isBlank = false;
        }
        if (!book["noOfBooks"] || book["noOfBooks"] < 0 || typeof book["noOfBooks"] === "undefined") {
            isBlank = false;
        }
        if (!book["description"] || typeof book["description"] === "undefined") {
            isBlank = false;
        }
        return isBlank;
    };

    render() {

        const { open, book } = this.state

        return (
            <Fragment>
                <div className={classes.AddBookDiv}>
                    <DarkTooltip title="Add New Book">
                        <Fab onClick={this.handleOpen} size="medium" style={{ backgroundColor: "#a03037" }} color="primary" aria-label="add" className={classes.margin}>
                            <AddIcon />
                        </Fab>
                    </DarkTooltip>
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
                                <TextField type='number' required style={{ marginRight: "5px" }} size="small" name="bookPrice" variant="outlined" onChange={this.changeHandler} id="bookPrice" fullWidth label="Book Price" value={book.bookPrice} />
                                <TextField type='number' required style={{ marginLeft: "5px" }} size="small" name="noOfBooks" variant="outlined" onChange={this.changeHandler} id="noOfBooks" fullWidth label="No. of books" value={book.noOfBooks} />
                            </div>
                            <div className={classes.Description}>
                                <TextField required name="description" variant="outlined" onChange={this.changeHandler} id="description" multiline rows={5} fullWidth label="Description" value={book.description} />
                            </div>
                        </div>
                    </DialogContent>
                    <div className={classes.Upload}>
                        <div className={classes.UploadBookImage}>
                            <input onChange={this.fileSelectHandler} style={{ display: "none" }} id="upload-book-image" type="file" />
                            <label htmlFor="upload-book-image">
                                <Button
                                    variant="contained"
                                    color="default"
                                    component="span"
                                    startIcon={<CloudUploadIcon />}
                                >Upload</Button>
                            </label>
                            <div className={classes.FileName}>{this.state.fileName}</div>
                        </div>
                    </div>
                    <div className={classes.CardActionArea}>
                        <div className={classes.ImgSizeLimit}>{this.state.imageSizeLimit}</div>
                        <Button disabled={!this.state.blank || this.state.fileName === 'No File Choosen'} className={classes.DoneBtn} onClick={this.addBookHandler} style={{ marginRight: "15px", marginBottom: "15px" }}>Done</Button>
                    </div>
                </Dialog>
            </Fragment>
        )
    }
}

export default AddBook
