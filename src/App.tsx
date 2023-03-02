import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import { HTMLMotionProps, AnimatePresence, motion as m } from "framer-motion";
import { AnyAction } from "redux";
import "./App.css";
import RenderNav from "./Components/Nav/RenderNav";
import Body from "./Components/Body/Body";

import { getProjects, SigninUser } from "./Redux/Actions";
import Footer from "./Components/Footer/Footer";
import Stack from "./Components/Stack/Stack";
import Project from "./Components/Project/Project";
import About from "./Components/About/About";
import Singleproject from "./Components/SingleProject/Singleproject";

type Props = HTMLMotionProps<"div">;

function App() {
     const dispatch = useDispatch();




     const user = {
          email: process.env.REACT_APP_THEFLOW_EMAIL,
          password: process.env.REACT_APP_THEFLOW_PASSWORD,
     };
     useEffect(() => {
          dispatch(SigninUser(user) as unknown as AnyAction);
          dispatch(getProjects() as unknown as AnyAction);
     }, []);
     const locate = useLocation();

     return (
          <>
               <AnimatePresence mode="wait" key={locate.pathname}>
                    <main className="app-container">
                         <RenderNav />

                         <Footer />

                         <Routes>
                              <Route
                                   path="/"
                                   element={<Body key={locate.pathname} />}
                              />

                              <Route
                                   path="/stack"
                                   element={<Stack key={locate.pathname} />}
                              />
                              <Route
                                   path="/projects"
                                   element={<Project key={locate.pathname} />}
                              />
                              <Route
                                   path="/project/:name"
                                   element={<Singleproject key={locate.pathname} />}
                              />
                              <Route
                                   path="/about.who"
                                   element={<About key={locate.pathname} />}
                              />
                         </Routes>
                    </main>
               </AnimatePresence>
          </>
     );
}

export default App;
