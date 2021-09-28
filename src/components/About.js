import React from 'react';
import portrait from "../images/IMG_5415.jpg";
import portrait2 from "../images/IMG_5412.jpg";

function About(props) {
    return (
        <main className="container">
            <section>
                <div className="background">
                    <img src={portrait} className="img-fluid" alt="" />
                </div>
                <div className="heading-content text-center">
                    <h4>Explore.Design.Create</h4>
                    <h1>Monica Hill</h1>
                    <p>Experience My Creativity</p>
                </div>
                <div id="about" className="container mt-3 mb-5">
                    <div className="post-heading text-center">
                        <h3 className="display-4 font-weight-bold">About Me</h3>
                        <hr className="w-50 mx-auto pb-5" />
                            </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-12">
                                <img src={portrait2} className="img-fluid" alt=""  />
                                    </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                        <h2>Explore. </h2>
                                        <hr />
                                        <p>Full-Stack Web Developer with an innate sense of organization, appreciation of aesthetics, and passion for the art of storytelling. Through the University of North Carolina, Chapel Hill Full-Stack Development program, I’ve come to embrace the value of creating products that focus on the user’s experience while bringing together brilliant minds who share the goal of creating a dynamic web experience. For example, in a recent group project that I contributed front-end skills towards, we were able to collaboratively build a Role Playing Games Management application that provides a universal storehouse allowing players access to characters and inventories across games.  Throughout my career as an educator, and in my acquisition into web development, I’ve managed to merge my strengths in creativity, attention to details, and working with tight time constraints. The HTML, CSS and JavaScript skills I’ve acquired and continue to refine, all reflect this. As a result, I’m confident that I’m well aligned to serve in a Web Development position that offers opportunities for me to express my talents while advancing my skill sets.
                                            </p>
                                                 
                                             </div>
                                        </div>
                                     </div>
    
                        </section>
                </main>
    )
}

export default About;