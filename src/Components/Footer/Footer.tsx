import { motion as m } from "framer-motion";
import React from "react";

import "./Footer.css";
function Footer() {
     return (
          <>
               <m.footer
                    className="footer-container"
                    exit={{ opacity: 1.5 }}
                    initial={{ x: "100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 1.5, ease: "easeIn" }}
               >
                    <div>
                         <a
                              href="https://github.com/Anslem1"
                              target="_blank"
                              rel="noreferrer"
                              title="Github.code"
                         >
                              <i className="fa-brands fa-github"></i>
                         </a>
                         <a
                              href="https://www.linkedin.com/in/chidiebube-anyanwu-0b8643232/"
                              target="_blank"
                              title="LinkedIn.connect"
                              rel="noreferrer"
                         >
                              <i className="fa-brands fa-linkedin-in"></i>
                         </a>
                         <a
                              title="Email.me"
                              href="mailto:andrewanslem1@gmail.com"
                              target="_blank"
                              rel="noreferrer"
                         >
                              <i className="fa-solid fa-envelope"></i>
                         </a>
                    </div>
               </m.footer>
          </>
     );
}

export default Footer;
