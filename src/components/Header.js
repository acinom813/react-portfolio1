import React from 'react';
 import { Link } from 'react-router-dom';


function Header() {

    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">

      <div className="container">
        <a className="navbar-brand logo" href="index.html">Monica R. Hill</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <div className="navbar-nav ml-auto mt-2 mt-lg-0">
            <Link to="/" className="links nav-link active" href="index.html">Home <span class="sr-only">(current)</span> </Link>
            <Link to="/portfolio"  className="links nav-link" href="portfolio.html">Portfolio</Link>
            <Link to="/contact"  className="links nav-link" href="contact.html">Contact</Link>
            <a className="nav-item nav-link dropdown dropdown-toggle " href="/resume.pdf" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Resume</a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item"  href="/resume.pdf"> Monica Hill: Jr. Web Developer</a>
           
          </div>
        </div>
      </div>
      </div>
    </nav>
   
    )
    }
  export default Header;