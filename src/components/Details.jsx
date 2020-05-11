import React, { Component } from 'react';
import classes from '../scss_styles/Details.module.scss';
import { withRouter } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import { Divider } from '@material-ui/core';

class Details extends Component {
    render() {
        const { book } = this.props.location.state
        return (
            <div className={classes.DetailsContainer}>
                <div className={classes.DetailsCard}>
                    <img className={classes.BookImage} src={require(`../assets/images/${book.bookImage}`)} alt="book" />
                    <div className={classes.BookDetailsCard}>
                        <div className={classes.BookDetails}>
                            <div className={classes.BookName}>{book.bookName}</div>
                            <div className={classes.AuthorName}>{book.authorName}</div>
                            <Rating
                                name="simple-controlled"
                                value={4}
                                readOnly
                                style={{marginBottom:"15px"}}
                            />
                            <Divider/>
                            <div className={classes.BookPrice}>
                               <div className={classes.Paperback}>Paperback</div>
                               <div className={classes.Price}>Rs. {book.bookPrice}</div>
                            </div>
                            <div className={classes.Description}>
                                <div className={classes.Title}>Description:</div>
                                <div className={classes.Text}>{book.description}</div>           
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Details)
