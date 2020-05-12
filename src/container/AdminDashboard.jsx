import React, { Component, Fragment } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import AuthenticateBook from '../components/AuthenticateBook';
import classes from '../scss_styles/AuthenticateBook.module.scss';

class AdminDashboard extends Component {

    state = {
        books: [
            {
                bookImage: 'Image1.png',
                bookName: "Don't Make Me Think",
                authorName: "by Steve Krug",
                bookPrice: 1400,
                isVerified: false,
                noOfBooks: 10,
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
            },
            {
                bookImage: 'Image2.png',
                bookName: "The Alchemist",
                authorName: "by Paulo Coelho",
                bookPrice: 1500,
                isVerified: false,
                noOfBooks: 0,
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
            },
            {
                bookImage: 'Image3.png',
                bookName: "UX For Dummies",
                authorName: "by Kevin P.Nichols",
                bookPrice: 1500,
                isVerified: true,
                noOfBooks: 4,
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
            },
            {
                bookImage: 'Image4.png',
                bookName: "UX Design",
                authorName: "by Carolyn Chandler",
                bookPrice: 1500,
                isVerified: false,
                noOfBooks: 10,
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
            },
            {
                bookImage: 'Image5.png',
                bookName: "The Design of EveryDay Things",
                authorName: "by Don Norman",
                bookPrice: 1500,
                isVerified: true,
                noOfBooks: 3,
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
            },
            {
                bookImage: 'Image6.png',
                bookName: "Lean UX",
                authorName: "by O`Relly",
                bookPrice: 1500,
                isVerified: true,
                noOfBooks: 10,
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
            },
            {
                bookImage: 'Image7.png',
                bookName: "SharePoint Framework",
                authorName: "by Nanddeep Nachan",
                bookPrice: 1500,
                isVerified: true,
                noOfBooks: 10,
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
            },
            {
                bookImage: 'Image8.png',
                bookName: "Group Discussion",
                authorName: "by Prof.Sharfen",
                bookPrice: 1500,
                isVerified: true,
                noOfBooks: 10,
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
            },
            {
                bookImage: 'Image9.png',
                bookName: "React Material-UI",
                authorName: "by Afren Badesh",
                bookPrice: 1500,
                isVerified: true,
                noOfBooks: 10,
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
            }
        ]
    }

    render() {

        const { books } = this.state
        return (
            <Fragment>
                <NavBar />
                <div className={classes.AuthenticateBookCont}>
                    {
                        books.map(book =>
                            <AuthenticateBook book={book} key={book.bookImage}/>
                        )
                    }
                </div>
                <Footer />
            </Fragment>
        )
    }
}

export default AdminDashboard
