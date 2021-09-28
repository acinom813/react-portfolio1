import React from "react";
import project1 from "../images/work.png";
import project2 from "../images/rpg mgr.png";
import project3 from "../images/web-dev.png";
import project4 from "../images/quiz.png";
import project5 from "../images/online-offline-budget-tracker.png";
import project6 from "../images/employeedirectory.png"

function Project(props) {
  return (
    <div id="portfolio" className="container mt-3 mb-5">
      <div className="post-heading text-center">
        <h4 className="display-4 font-weight-bold">Design.</h4>
        <hr className="w-50 mx-auto pb-5" />
      </div>

      <div className="row">
        <div className="col-lg-4 col-md-6 col-12 pb-5">
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={project1} alt="" />
            <div className="card-body">
              <h5 className="card-title">Work Day Scheduler</h5>
              <p className="card-text"></p>

              <a
                href="https://github.com/acinom813/homework-5"
                className="btn btn-dark"
              >
                Repository
              </a>
              <a
                href="https://acinom813.github.io/homework-5/"
                className="btn btn-dark"
              >
                Deployment
              </a>
            </div>
          </div>
        </div><div className="col-lg-4 col-md-6 col-12 pb-5">
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={project2} alt="" />
            <div className="card-body">
              <h5 className="card-title">RPG Manager</h5>
              <p className="card-text"></p>
              <a
                href="https://github.com/malenchite/rpg-manager"
                className="btn btn-dark"
              >
               Repository
              </a>
              <a
                href="http://p2-rpg-manager.herokuapp.com"
                className="btn btn-dark"
              >
                Deployment
              </a>

            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 pb-5">
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={project3} alt="" />
            <div className="card-body">
              <h5 className="card-title">Web-Dev-Game</h5>
              <p className="card-text"></p>
              <a
                href="https://github.com/malenchite/web-dev-game"
                className="btn btn-dark"
              >
                Repository
              </a>
              <a
                href="https://the-web-dev-game.herokuapp.com/"
                className="btn btn-dark"
              >
                Deployment
              </a>
            </div>
          </div>
        </div> <div className="col-lg-4 col-md-6 col-12 pb-5">
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={project4} alt="" />
            <div className="card-body">
              <h5 className="card-title">Coding Quiz</h5>
              <p className="card-text"></p>
              <a
                href="https://github.com/acinom813/homework-4"
                className="btn btn-dark"
              >
                Repository
              </a>
              <a
                href="https://acinom813.github.io/homework-4"
                className="btn btn-dark"
              >
                Deployment
              </a>
            </div>
          </div>
        </div><div className="col-lg-4 col-md-6 col-12 pb-5">
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={project5} alt="" />
            <div className="card-body">
              <h5 className="card-title">Online/Offline Budget Tracker</h5>
              <p className="card-text"></p>
              <a
                href="https://github.com/acinom813/online-offline-budget-tracker"
                className="btn btn-dark"
              >
                Repository
              </a>
              <a
                href="https://online-offline-budget-24717.herokuapp.com/"
                className="btn btn-dark"
              >
                Deployment
              </a>
            </div>
          </div>
        </div>  <div className="col-lg-4 col-md-6 col-12 pb-5">
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={project6} alt="" />
            <div className="card-body">
              <h5 className="card-title">
                Employee Directory: Built Using React
              </h5>
              <p className="card-text"></p>
              <a
                href="https://github.com/acinom813/react-employee-directory"
                className="btn btn-dark"
              >
                Repository
              </a>
              <a
                href="https://react-employee-directory-38894.herokuapp.com/"
                className="btn btn-dark"
              >
                Deployment
              </a>
            </div>
                       
        </div>
            </div>
          </div>
        </div>

     
  )}

export default Project;
