import React, { useEffect, useState } from "react";

import "./Overlay.css";
type TextProps = {
     text: string;
     setOverFlow: Function;
};

function Overlay(props: TextProps) {
     const [showOverlay, setShowOverlay] = useState(true);

     useEffect(() => {
          const timer = setTimeout(() => {
               setShowOverlay(false);
               props.setOverFlow(false);
          }, 1000); // set the timeout to 1 seconds

          return () => {
               clearTimeout(timer);
          };
     }, []);

 
     return (
          <>
               {showOverlay && (
                    <div className={`overlay ${showOverlay ? "show" : ""}`}>
                         <h1>{props.text}</h1>
                    </div>
               )}
          </>
     );
}

export default Overlay;
