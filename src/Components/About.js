import React from "react";
// import { Link } from "react-router-dom";
// import { FaAngleDown } from "react-icons/fa"
import { FaAngleUp } from "react-icons/fa";
import { motion } from "framer-motion";
import AboutContent from "./AboutContent";
import PageHeader from "./PageHeader";

// function scrollToContent() {
//   var elem = document.getElementById("Start");
//   elem.scrollIntoView();
// }

export default function About() {
  return (
    <motion.div
      //   initial={{
      //     x: "100vw",
      //     transition: { duration: 1, delay: 0 },
      //     opacity: 0,
      //   }}
      //   animate={{ x: 0, transition: { duration: 1, delay: 0 }, opacity: 1 }}
      //   exit={{ x: "100vw", transition: { duration: 1, delay: 0.5 }, opacity: 0 }}
      //   transition={{
      //     default: { ease: "linear" },
      //   }}
      initial={{
        x: "100vw",
        transition: { duration: 1, delay: 0.5 },
        opacity: 0,
        position: "fixed",
      }}
      animate={{
        x: 0,
        transition: { duration: 1, delay: 0.5 },
        opacity: 1,
        position: "relative",
      }}
      exit={{
        x: "-100vw",
        transition: { duration: 1, delay: 0.5 },
        opacity: 0,
        position: "fixed",
      }}
      transition={{
        delay: 0.5,
        default: { ease: "linear" },
      }}
    >
      {/*  */}
      <PageHeader page={0} />

      {/* <div className="PageBlockLong" id="PageBlockLong">
        <div className="LinkNameDiv">
          <div className="Link">
            About
            <FaAngleDown
              className="ArrowDown bounce-3"
              onClick={() => {
                scrollToContent();
              }}
            />
          </div>
          <div className="PageBlockLinkBox">
            <Link
              to="/home"
              className="PageBlockLinks GradientHover"
              onClick={() => {
                var elem = document.getElementById("Content");
                elem.scrollIntoView();
              }}
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="PageBlockLinks GradientHover"
              onClick={() => {
                var elem = document.getElementById("Content");
                elem.scrollIntoView();
              }}
            >
              contact
            </Link>
            <Link
              to="/projects"
              className="PageBlockLinks GradientHover"
              onClick={() => {
                var elem = document.getElementById("Content");
                elem.scrollIntoView();
              }}
            >
              Projects
            </Link>
          </div>
        </div>
      </div> */}

      {/*  */}
      <AboutContent />
      <div
        className="CenterCol"
        style={{ "paddingBottom": "1rem", "paddingTop": "2rem" }}
      >
        <FaAngleUp
          onClick={() => {
            var elem = document.getElementById("Content");
            elem.scrollIntoView();
          }}
          className="Icon ToTopButton"
        />
      </div>
    </motion.div>
  );
}
