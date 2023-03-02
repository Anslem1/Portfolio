import React, { useState } from "react";
import "./Body.css";
import { motion as m } from "framer-motion";
import Overlay from "../Overlay/Overlay";

function Body() {
     const [overFlow, setOverFlow] = useState(true);
     return (
          <>
               <Overlay text="In the beginning.." setOverFlow={setOverFlow} />
               {!overFlow && (
                  <m.div
                         className={`body-container`}
                         exit={{ opacity: 1 }}
                         animate={{ y: "0%" }}
                         initial={{ y: "100%" }}
                         transition={{ duration: 1, ease: "easeIn" }}
                    >
                         <div>
                              <m.h1
                                   className="body-intro"
                                   exit={{ opacity: 1 }}
                                   initial={{ y: "100%" }}
                                   animate={{ y: "0%" }}
                                   transition={{
                                        delay: 0.9,
                                        duration: 1,
                                        ease: "easeOut",
                                   }}
                              >
                                   YO! I'm <span>Chidiebube</span>. A{" "}
                                   <span>fullstack</span> developer who{" "}
                                   <span>transforms</span> ideas into digital
                                   <span> realities</span> with{" "}
                                   <span>code</span>, because <span>I</span>{" "}
                                   can. Welcome to my <span> portfolio</span>.
                              </m.h1>
                         </div>
                    </m.div>
               )}{" "}
          </>
     );
}

export default Body;
