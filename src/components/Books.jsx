import React, { Component } from 'react';
import classes from '../scss_styles/Books.module.scss';
import Book from './Book';
// import Pagination from '@material-ui/lab/Pagination';
import Pagination from '../elements/CssPagination';

class Books extends Component {

    state = {
        books: [
          {
            bookId: 1,
            bookImage: "Image1.png",
            bookName: "Don't Make Me Think",
            authorName: "by Steve Krug",
            bookPrice: 1400,
            isCart: false,
            noOfBooks: 10,
            description:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            rating_review: [
              {
                ratingId: 1,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
              {
                ratingId: 2,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
              {
                ratingId: 3,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
              {
                ratingId: 4,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
              {
                ratingId: 5,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
            ],
          },
          {
            bookId: 2,
            bookImage: "Image2.png",
            bookName: "The Alchemist",
            authorName: "by Paulo Coelho",
            bookPrice: 1500,
            isCart: false,
            noOfBooks: 0,
            description:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            rating_review: [
              {
                ratingId: 6,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
              {
                ratingId:7,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
              {
                ratingId:8,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
              {
                ratingId:9,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
              {
                ratingId:10,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
            ],
          },
          {
            bookId: 3,
            bookImage: "Image3.png",
            bookName: "UX For Dummies",
            authorName: "by Kevin P.Nichols",
            bookPrice: 1500,
            isCart: true,
            noOfBooks: 4,
            description:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            rating_review: [
              {
                ratingId:11,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
              {
                ratingId:12,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
              {
                ratingId:13,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
              {
                ratingId:14,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
              {
                ratingId:15,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
            ],
          },
          {
            bookId: 4,
            bookImage: "Image4.png",
            bookName: "UX Design",
            authorName: "by Carolyn Chandler",
            bookPrice: 1500,
            isCart: false,
            noOfBooks: 10,
            description:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            rating_review: [
              {
                ratingId:16,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
              {
                ratingId:17,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
              {
                ratingId:18,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
              {
                ratingId:19,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
              {
                ratingId:20,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
            ],
          },
          {
            bookId: 5,
            bookImage: "Image5.png",
            bookName: "The Design of EveryDay Things",
            authorName: "by Don Norman",
            bookPrice: 1500,
            isCart: true,
            noOfBooks: 3,
            description:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            rating_review: [
              {
                ratingId:21,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
              {
                ratingId:22,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
              {
                ratingId:23,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
              {
                ratingId:24,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
              {
                ratingId:25,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
            ],
          },
          {
            bookId: 6,
            bookImage: "Image6.png",
            bookName: "Lean UX",
            authorName: "by O`Relly",
            bookPrice: 1500,
            isCart: true,
            noOfBooks: 10,
            description:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            rating_review: [
              {
                ratingId:26,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
              {
                ratingId:27,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
              {
                ratingId:28,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
              {
                ratingId:29,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
              {
                ratingId:30,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
            ],
          },
          {
            bookId: 7,
            bookImage: "Image7.png",
            bookName: "SharePoint Framework",
            authorName: "by Nanddeep Nachan",
            bookPrice: 1500,
            isCart: true,
            noOfBooks: 10,
            description:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            rating_review: [
              {
                ratingId:31,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
              {
                ratingId:32,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
              {
                ratingId:33,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
              {
                ratingId:34,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
              {
                ratingId:35,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
            ],
          },
          {
            bookId: 8,
            bookImage: "Image8.png",
            bookName: "Group Discussion",
            authorName: "by Prof.Sharfen",
            bookPrice: 1500,
            isCart: true,
            noOfBooks: 10,
            description:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            rating_review: [
              {
                ratingId:36,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
              {
                ratingId:37,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
              {
                ratingId:38,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
              {
                ratingId:39,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
              {
                ratingId:40,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
            ],
          },
          {
            bookId: 9,
            bookImage: "Image9.png",
            bookName: "React Material-UI",
            authorName: "by Afren Badesh",
            bookPrice: 1500,
            isCart: true,
            noOfBooks: 10,
            description:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            rating_review: [
              {
                ratingId: 41,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
              {
                ratingId:42,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
              {
                ratingId:43,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
              {
                ratingId:44,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
              {
                ratingId:45,
                rating: 4,
                review:
                  "Thank you so much M. Ahava for this diary!!!!! I write my everyday goals. 3 days from now I have matched 2 of them regarding my plan for success. I will continue and add my love life as well as my feelings. This is just a beginning! I will make it.",
              },
            ],
          },
        ],
      };

    // addToCart = (bookId) => {
    //     let 
    // } 

    render() {

        const { books } = this.state;

        return (
            <div className={classes.BooksContainer}>
                <div className={classes.BooksHeader}>
                    <div className={classes.BookCount}>
                        <div className={classes.BookText}>Books</div>
                        <div className={classes.BookItemCount}>(128 Items)</div>
                    </div>
                    <div className={classes.SelectWrapper}>
                        <select>
                            <option defaultValue="none" hidden>Sort by relevance</option>
                            <option value="option-2">Price: Low to High</option>
                            <option value="option-3">Price: High to Low</option>
                            <option value="option-3">Newest Arrivals</option>
                        </select>
                    </div>
                </div>
                <div className={classes.Books}>
                    {
                        books.map(book =>
                            <Book book={book} key={book.bookImage}/>
                        )
                    }
                </div>
                <div className={classes.Pagination}>
                <Pagination count={5} color="primary"/>
                </div>
            </div>
        )
    }
}

export default Books
