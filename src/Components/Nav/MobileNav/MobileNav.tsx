import React, { useState } from "react";
import { Link } from "react-router-dom";

function MobileNav() {
     const [overlay, setOverlay] = useState(false);
     return (
          <>
               <nav className="mobile-nav-container">
                    <div>
                         <div>
                              <Link to="/">
                                   <p className="nav-name">
                                        <span>
                                             <i className="fa-solid fa-code"></i>
                                        </span>
                                        Chidiebube
                                   </p>
                              </Link>
                         </div>

                         <div
                              className="mobile-about-container"
                              onClick={() => setOverlay((prev) => !prev)}
                         >
                              <div></div>
                              <div></div>
                              <div></div>
                         </div>
                         {overlay && (
                              <div className="overlay-div">
                                   <div>
                                        <div
                                             className="cancel-overlay"
                                             onClick={() =>
                                                  setOverlay((prev) => !prev)
                                             }
                                        >
                                             <div></div>
                                             <div></div>
                                        </div>
                                        <div>
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
                              </div>
                         )}
                    </div>
               </nav>
          </>
     );
}

export default MobileNav;
