import { motion as m } from "framer-motion";
import React, { useState } from "react";
import Overlay from "../Overlay/Overlay";
import "./About.css";

function About() {
     const [overFlow, setOverFlow] = useState(true);
     const [showJpg, setShowJpg] = useState(false);
     return (
          <>
               <Overlay
                    text="Curious? lol, Alright..."
                    setOverFlow={setOverFlow}
               />
               <m.div
                    className="about-me-container"
                    exit={{ opacity: 1 }}
                    animate={{ y: "0%" }}
                    initial={{ y: "100%" }}
                    transition={{ duration: 1, ease: "easeIn" }}
               >
                    <h1>Story time:</h1>
                    <div>
                         <m.p
                              exit={{ opacity: 1 }}
                              initial={{ y: "100%" }}
                              animate={{ y: "0%" }}
                              transition={{
                                   delay: 0.9,
                                   duration: 1,
                                   ease: "easeOut",
                              }}
                         >
                              Hello visitor! I'm Chidiebube, a MERN{" "}
                              <span>(Mongo, Express, React, NodeJs) </span> and{" "}
                              <span>TypeScript</span> stack developer who
                              started learning to code during june of 2022 where I finished a Udemy course by Colt Steele and kicked off my career as a web developer. As an entry level developer I am like a baby deer
                              trying to learn how to walk because I am very fresh into the industry. But don't worry, I'm
                              not afraid of falling <span>(or failing)</span>!
                              I'm determined to become a coding wizard and make
                              magic happen with my keyboard{" "}
                              <span>(cringe much?)</span>. When I'm not coding,
                              you can find me binge-watching Rick and Morty for
                              the millionth time or playing video games. I eat,
                              alot!{" "}
                              <span>
                                   {" "}
                                   (I still wonder why I haven't gained weight){" "}
                              </span>
                              . I'm excited to join the coding community and
                              meet fellow developers who share my passion for
                              creating awesome things. Let's make some code
                              magic together! <span>(I guess?)</span>
                         </m.p>
                    </div>
               </m.div>
          </>
     );
}

export default About;
