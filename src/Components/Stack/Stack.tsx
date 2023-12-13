import { HTMLMotionProps, motion as m } from "framer-motion";
import { useState } from "react";
import TechStack from "../../TechStack";
import Overlay from "../Overlay/Overlay";
import { item } from "./animation";
import "./Stack.css";

interface StackProp {
     tech: string;
     image: string;
     axis: string;
}

function Stack() {
     const [overFlow, setOverFlow] = useState(true);
     return (
          <>
               <Overlay text="Tech I use.." setOverFlow={setOverFlow} />
               {!overFlow && (
                    <m.div
                         className={`stack-container ${
                              overFlow && "div-overflow"
                         }`}
                         exit={{ opacity: 1 }}
                    >
                         <h1>Stack:</h1>
                         <m.div initial={"hidden"} animate="show">
                              {TechStack.map((stack: StackProp) => {
                                   return (
                                        <>
                                             <div
                                                  className="stack-content"
                                                  key={stack.tech}
                                             >
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
