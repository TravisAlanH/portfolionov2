import React from "react";
import {
  FaAngleUp,
  // FaQuoteLeft,
  // FaQuoteRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

// import Amazon from "../Images/AmazonCloneImg.jpg";
import AboutContent from "./AboutContent";
import ContactContent from "./ContactContent";
import ProjectsContent from "./ProjectsContent";

function scrollToContent() {
  var elem = document.getElementById("Contact");
  elem.scrollIntoView();
}

export default function HomeMobile() {
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
      <div className="ToContactDiv">
        <button
          onClick={() => {
            scrollToContent();
          }}
        >
          Contact Me
        </button>
      </div>
      <AboutContent />

      {/* Projects */}
      {/* <div className="PageIconDiv">
        <div className="Start" id="Start"></div>
        <FaRegWindowRestore className="PageIcon GradientNoHover" />
      </div> */}

      <ProjectsContent />

      {/* QUOTE */}
      {/*  */}
      {/* <div className="QuoteBlock">
        <div className="QuoteMark">
          <FaQuoteLeft className="PageIconQuote GradientNoHover" />
        </div>
        <div className="QuoteText">
          <div className="QuoteTop">
            <h3>
              Projects sections keep visitors engaged and navigating from page
              to page, lengthening your opportunity to capture the eye of the
              prospect.
            </h3>
          </div>
          <div className="QuoteBottom"></div>
        </div>
        <div className="QuoteMark">
          <FaQuoteRight className="PageIconQuote GradientNoHover" />
        </div>
      </div> */}

      {/* CONTENT */}

      {/* <div className="ProjectsBox">
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
      </div> */}

      {/* Contact */}

      <ContactContent />
      <div id="Contact"></div>

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
