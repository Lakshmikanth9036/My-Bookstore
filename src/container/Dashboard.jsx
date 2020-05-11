import React, { Component, Fragment } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Books from '../components/Books';

class Dashboard extends Component {

    render() {
        return (
            <Fragment>
                <NavBar />
                <Books/>
                <Footer />
            </Fragment>
        )
    }
}

export default Dashboard
