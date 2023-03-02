import { HTMLMotionProps, motion as m } from "framer-motion";
import React, { useState } from "react";
import TechStack from "../../TechStack";
import Overlay from "../Overlay/Overlay";
import { container, item } from "./animation";
import "./Stack.css";

function Stack() {
     type Props = HTMLMotionProps<"div">;
     const [overFlow, setOverFlow] = useState(true);
     return (
          <>
               <Overlay text="Tech I use.." setOverFlow={setOverFlow} />
               {!overFlow && (
                    <m.div
                         className={`stack-container ${overFlow && "div-overflow"
                              }`}
                         exit={{ opacity: 1 }}
                    >
                         <h1>Stack:</h1>
                         <m.div

                              initial={"hidden"}
                              animate="show"
                         >
                              {TechStack.map((stack) => {
                                   return (
                                        <>
                                             <div className="stack-content" key={stack.tech}>
                                                  <m.div variants={item}>

                                                       <img
                                                            src={stack.image}
                                                            alt={stack.tech}

                                                       />
                                                       <p>{stack.tech}</p>

                                                  </m.div>
                                             </div>
                                        </>
                                   );
                              })}
                         </m.div>
                    </m.div>
               )}
          </>
     );
}

export default Stack;
