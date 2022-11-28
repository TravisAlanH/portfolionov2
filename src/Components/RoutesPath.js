import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import { AnimatePresence } from "framer-motion";
import About from "./About";
import Projects from "./Projects";

export default function RoutesPath() {
  let location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
      </Routes>
    </AnimatePresence>
  );
}
