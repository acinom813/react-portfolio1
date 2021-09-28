import React, {Component} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";



class Home extends Component {
    render() {
        return (
            <>
            <Header />
            <About />
            <Footer />
            </>
        )
    }
}

export default Home;