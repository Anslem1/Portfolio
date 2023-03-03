import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Overlay from "../Overlay/Overlay";
import { TextProps } from "../../types/environment";
import { HTMLMotionProps, motion as m } from "framer-motion";
import "./Project.css";
import { item } from "../Stack/animation";
import { Link } from "react-router-dom";
import RenderLoading from "../LoadingPage/RenderLoading";


function Project() {
     const projects = useSelector((state: any) => state.projects);
     const [overFlow, setOverFlow] = useState(true);
     const [showImg, setShowImg] = useState(false)
     const [screenWidth, setScreenWidth] = useState(window.innerWidth);
     const [hoveredProject, setHoveredProject] = useState(null);


     function saveProjectToStorage(projectObject: Object) {
          localStorage.setItem("projectObject", JSON.stringify(projectObject))
     }


     useEffect(() => {
          function handleResize() {
               setScreenWidth(window.innerWidth);
          }

          window.addEventListener('resize', handleResize);

          // Clean up event listener on unmount
          return () => window.removeEventListener('resize', handleResize);
     }, []);




     return (
          <>
               <Overlay
                    text="Somethings I've worked on?"
                    setOverFlow={setOverFlow}
               />
               <RenderLoading />
               <h1 className="project-txt">Projects:</h1>
               <m.div exit={{ opacity: 1 }}>
                    {!overFlow && projects && (

                         <div className="all-project-container">
                              <m.div initial={"hidden"}
                                   animate="show">
                                   {projects.projects &&
                                        projects.projects.map(
                                             (project: any, index: number) => {
                                                  const imgNum = Math.floor(
                                                       Math.random() *
                                                       project
                                                            .projectImages.length
                                                  );

                                                  return (
                                                       <Link to={`/project/${project.projectName}`} key={project._id}>
                                                            <div className="project-content" onClick={() => saveProjectToStorage({
                                                                 ...project
                                                            })} onMouseOver={() => setHoveredProject(project._id)} onMouseOut={() => setHoveredProject(null)}
                                                            >

                                                                 <m.div variants={item}>
                                                                      {(hoveredProject === project._id || screenWidth <= 540) && <img
                                                                           src={project.projectImages.length > 0 && project.projectImages[imgNum].image}
                                                                           alt=""
                                                                      />}
                                                                      <h1>{project.projectName}</h1>
                                                                      <p>{project.projectDescription}</p>
                                                                 </m.div>
                                                            </div>
                                                       </Link>
                                                  );
                                             }
                                        )}
                              </m.div>
                         </div>
                    )}
               </m.div>
          </>
     );
}

export default Project;
