import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import HomeMobile from "./HomeMobile";
import { AnimatePresence } from "framer-motion";
import About from "./About";
import Projects from "./Projects";
import data from "../Resume";

export default function RoutesPath() {
  let w = 0;
  let pageType;

  function displayWindowSize() {
    w = document.documentElement.clientWidth;
    if (w <= 770) {
      pageType = <HomeMobile data={data} />;
    } else {
      pageType = <Home data={data} />;
    }
  }
  window.addEventListener("resize", displayWindowSize);
  displayWindowSize();

  let location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route exact path="/home" element={pageType}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
      </Routes>
    </AnimatePresence>
  );
}
