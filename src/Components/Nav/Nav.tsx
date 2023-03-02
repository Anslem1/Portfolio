import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
     return (
          <>
               <nav className="navbar-container">
                    <div>
                         <div>
                              <Link to="">
                                   <p className="nav-name">
                                        <span>
                                             <i className="fa-solid fa-code"></i>
                                        </span>
                                        Chidiebube
                                   </p>
                              </Link>
                         </div>

                         <div className="about-container">
                              <Link to={"/projects"}>
                                   <p>Projects</p>
                              </Link>
                              <Link to={"/stack"}>
                                   <p>Stacks</p>
                              </Link>
                              <Link to={"/about.who"}>
                                   <p>About</p>
                              </Link>
                         </div>
                    </div>
               </nav>
          </>
     );
}

export default Nav;
