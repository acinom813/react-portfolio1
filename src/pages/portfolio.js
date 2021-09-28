import React, {Component} from 'react';
import Header from "../components/Header";
import Project from "../components/Project";
import Footer from "../components/Footer";


class Portfolio extends Component{
    render() {
        return(
            <>
            <Header />
            <Project />
            <Footer />
            </>
        )
    }
}

export default Portfolio;