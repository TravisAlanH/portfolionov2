import React from "react";
import { Link } from "react-router-dom";
import { FaAngleDown, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaMailBulk } from "react-icons/fa";

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
      <div className="PageIconDiv">
        <FaMailBulk className="PageIcon GradientNoHover" />
      </div>
      <div className="CenterCol" id="ContentStart">
        <h1 className="ContactHeader">Start the conversation here</h1>
        <div className="ContactBox">
          <div className="ContactInfoBox">
            <h5>Email</h5>
            <h3>Travis.H.Dev@gmail.com</h3>
            <div className="ContactIconLinks">
              <FaLinkedin className="PageIconSmall GradientNoHover" />
              <FaGithubSquare className="PageIconSmall GradientNoHover" />
            </div>
          </div>
          <form className="FormBase">
            <div className="FormLine">
              <input
                type="text"
                className="FormInputText ChangeLabel"
                name="name"
                id="name"
                required
              ></input>
              <label htmlFor="Name" className="FormLabel">
                Name*
              </label>
            </div>
            <div className="FormLine">
              <input
                type="text"
                className="FormInputText ChangeLabel"
                name="email"
                id="email"
                required
              ></input>
              <label htmlFor="email" className="FormLabel">
                Email*
              </label>
            </div>
            <div className="FormLine">
              <input
                type="text"
                className="FormInputText ChangeLabel"
                name="phone"
                id="phone"
              ></input>
              <label htmlFor="Phone" className="FormLabel">
                Phone
              </label>
            </div>
            <div className="FormLine">
              <textarea
                type="text"
                className="FormInputTextArea ChangeLabel"
                name="comments"
                id="comments"
                rows={6}
              ></textarea>
              <label htmlFor="Phone" className="FormLabel ">
                Comments
              </label>
            </div>
            <div className="FormLineSubmit">
              <button type="submit" className="SubmitButton GradientHover">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
