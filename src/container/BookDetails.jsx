import React, { Component, Fragment } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Details from '../components/Details';

class BookDetails extends Component {
    render() {
        return (
            <Fragment>
                <NavBar />
                <Details/>
                <Footer />
            </Fragment>
        )
    }
}

export default BookDetails
