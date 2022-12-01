import React from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { motion } from "framer-motion";
import ContactContent from "./ContactContent";

function scrollToContent() {
  var elem = document.getElementById("ContentStart");
  elem.scrollIntoView();
}

export default function Contact() {
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
        x: "-100vw",
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
        x: "100vw",
        transition: { duration: 1, delay: 0.5 },
        opacity: 0,
        position: "fixed",
      }}
      transition={{
        delay: 0.5,
        default: { ease: "linear" },
      }}
    >
      <div className="PageBlockLong" id="PageBlockLong">
        <div className="LinkNameDiv">
          <div className="Link">
            Contact
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
              to="/about"
              className="PageBlockLinks GradientHover"
              onClick={() => {
                var elem = document.getElementById("Content");
                elem.scrollIntoView();
              }}
            >
              About
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
      </div>
      <ContactContent />
    </motion.div>
  );
}
