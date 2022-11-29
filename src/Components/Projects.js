import React from "react";
import { Link } from "react-router-dom";
import { FaAngleDown, FaRegWindowRestore, FaAngleUp } from "react-icons/fa";
import { motion } from "framer-motion";
import Amazon from "../Images/AmazonCloneImg.jpg";

function scrollToContent() {
  var elem = document.getElementById("Start");
  elem.scrollIntoView();
}

export default function Projects() {
  //   let top = window.scrollY;

  //   window.addEventListener("drag", (e) => {
  //     console.log(e.clientY);
  //     top = e.pageYOffset;
  //   });

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
      <div className="PageBlockLong" id="PageBlockLong">
        <div className="LinkNameDiv">
          <div className="Link">
            Projects
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
              about
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
          </div>
        </div>
      </div>
      {/* CONTENT */}
      <div className="PageIconDiv">
        <div className="Start" id="Start"></div>
        <FaRegWindowRestore className="PageIcon GradientNoHover" />
      </div>
      <div className="ProjectsBox">
        <div className="ProjectsLayoutBox">
          <div className="ProjectItemBox">
            <div className="ProjectItemImage">
              <img src={Amazon} alt="Amazon Clone" className="ProjectImage" />
              <div className="ProjectItemImageTextBox">
                <h3 className="ProjectItemImageText">Amazon Clone</h3>
              </div>
            </div>

            <div className="ProjectItemAboutTextBox">
              <div className="ProjectItemAboutText">
                <span className="ProjectItemText">Text Here</span>
              </div>
              <div className="ProjectItemButtonsBox">
                <a className="ProjectItemButton" href=" ">
                  GitHub
                </a>
                <a className="ProjectItemButton" href=" ">
                  Live
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* TO TOP BUTTON */}

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
