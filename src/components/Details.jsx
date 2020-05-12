import React, { Component } from 'react';
import classes from '../scss_styles/Details.module.scss';
import { withRouter } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import { Divider, Button, Avatar } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import RoomIcon from '@material-ui/icons/Room';
import profile from '../assets/images/ichigo.jpg';

class Details extends Component {
    render() {
        const { book } = this.props.location.state
        return (
            <div className={classes.OuterContainer}>
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
                                    style={{ marginBottom: "15px" }}
                                />
                                <Divider />
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
                        <div className={classes.BuyNow}>
                            <div className={classes.BuyNowCont}>
                                <div className={classes.Row_1}>
                                    <div className={classes.Row_1_Column_1}>
                                        <div className={classes.Row_1_Column_1_Text}>
                                            Buy Now
                                        </div>
                                        <select>
                                            <option defaultValue="none" hidden>Qty: 1</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                    <div className={classes.Row_1_Column_2}>
                                        <div className={classes.Row_1_Column_2_Price}>Rs. {book.bookPrice}</div>
                                        <div className={classes.Row_1_Column_2_List_Price}>List Price: <div style={{ textDecoration: "line-through" }}>  {book.bookPrice + 100}</div> </div>
                                        <div className={classes.Row_1_Column_2_Save_Price}>Save: Rs. 100 (10%)</div>
                                    </div>
                                </div>
                                <div className={classes.Row_2}>
                                    <div className={classes.Row_2_1}>Usually ships within 6 days.</div>
                                    <div className={classes.Row_2_2}>Ships from and sold by bookstore.com</div>
                                    <Button variant="contained" color="secondary" className={classes.Row_2_3} startIcon={<ShoppingCartIcon style={{ marginTop: "-50%", position: "relative", left: "-220%", top: "8px", color: "#ffff", backgroundColor: "#111", width: "20px", height: "20px", padding: "5px", borderRadius: "5px", boxShadow: "1px 0 7px rgba(0,0,0,0.4)" }} />}>Add to cart</Button>
                                    <Button variant="contained" color="secondary" className={classes.Row_2_3} startIcon={<PlayArrowIcon style={{ marginTop: "-50%", position: "relative", left: "-277%", top: "8px", color: "#ffff", backgroundColor: "#111", width: "20px", height: "20px", padding: "5px", borderRadius: "5px", boxShadow: "1px 0 7px rgba(0,0,0,0.4)" }} />}>By Now</Button>
                                    <div className={classes.Row_2_4}>This item's shipper are in {<strong>India</strong>}. Please check other sellers who may ship internationally. Learn more</div>
                                    <Divider />
                                    <div className={classes.Row_2_5}>
                                        <RoomIcon fontSize="small" /> <div className={classes.Row_2_5_1}>Deliviery to India</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.Rating_Review_Cont}>
                    <div className={classes.Customer_Reviews}>Customer Reviews</div>
                    {
                        book.rating_review.map(rr =>
                            <div className={classes.Customer_Rating_Review}>
                                <div className={classes.Customer}>
                                    <Avatar src={profile} />
                                    <div className={classes.Customer_Name}>Lorem ipsum</div>
                                </div>
                                <div className={classes.Customer_Rating}>
                                    <Rating
                                        name="simple-controlled"
                                        value={rr.rating}
                                        readOnly
                                        size="small"
                                    />
                                    <div className={classes.Customer_Rating_Description}>This diary changed my life!!!!</div>
                                </div>
                                <div className={classes.Reviewed_At}>Reviewed in the India on April 23, 2020</div>
                                <div className={classes.Review}>{rr.review}</div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(Details)
