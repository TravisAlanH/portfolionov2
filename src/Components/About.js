import React from "react";
import { Link } from "react-router-dom";
import {
  FaAngleDown,
  FaGraduationCap,
  FaCode,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaAngleUp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import DSU from "../Images/DSU_Logo.png";
import UC from "../Images/UC_Logo.png";
import Photo from "../Images/ProfilePhoto.jpg";

function scrollToContent() {
  var elem = document.getElementById("Start");
  elem.scrollIntoView();
}

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
      <div className="PageBlockLong" id="PageBlockLong">
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
      </div>
      <div className="Start" id="Start"></div>
      <div className="CenterCol" id="ContentStart">
        <div className="AboutHeaderSplit">
          <div className="Hello">
            <h1 className="HelloText GradientNoHover">Hello</h1>
            <h5 className="FromTravis">./ Travis</h5>
          </div>
          <div className="FaceImage">
            <img className="ProfilePhoto" src={Photo} alt="ProfilePhoto" />
          </div>
        </div>
      </div>
      <div className="AboutNotesDiv">
        <div className="AboutText">
          <p>
            My Name is Travis Heidelberger. I am a front in web developer that
            understands the importance of well built data structures. For the
            past 14 years I was Active duty with the United States Navy as a
            Government Credit Card Holder and Logistics Specialist where I
            maintained the financial assets of my command. I have a passion for
            learning, and drive to create new, responsive, things for the web.
          </p>
        </div>
      </div>
      <div className="PageIconDiv">
        <FaGraduationCap className="PageIcon GradientNoHover" />
      </div>
      <div className="SchoolDiv">
        <div className="SchoolBox">
          <div className="ShoolContent">
            <div>
              <img src={DSU} alt="dsu" className="SchoolIcon" />
            </div>
            <div className="SchoolText">
              <h4 className="School">Dakota State University SD</h4>
              <h2 className="Degree">Computer Science (BS)</h2>
              <h5 className="GradYear">Graduated 2022</h5>
            </div>
          </div>
        </div>
        <div className="SchoolBox">
          <div className="ShoolContent">
            <div>
              <img src={UC} alt="UC" className="SchoolIcon" />
            </div>
            <div className="SchoolText">
              <h4 className="School">University of Charleston WV</h4>
              <h2 className="Degree">Business Admin (BA)</h2>
              <h5 className="GradYear">Graduated 2019</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="PageIconDiv">
        <FaCode className="PageIcon GradientNoHover" />
      </div>
      <div className="SkillsDiv">
        <div className="SkillsLeftDiv">
          <div className="SkillsDisplay">
            <div className="SkillsTitle">
              <h2 className="SkillsTitleText">Programing</h2>
            </div>
            <div className="ProgramingSkills ">
              <div className="ProgramingSkillContent">
                <FaReact className="Icon" />
              </div>
              <div className="ProgramingSkillText">
                <h3 className="SkillsText">React</h3>
              </div>
            </div>
            <div className="ProgramingSkills ">
              <div className="ProgramingSkillContent">
                <FaJsSquare className="Icon" />
              </div>
              <div className="ProgramingSkillText">
                <h3 className="SkillsText">JavaScript</h3>
              </div>
            </div>
            <div className="ProgramingSkills ">
              <div className="ProgramingSkillContent">
                <FaHtml5 className="Icon" />
              </div>
              <div className="ProgramingSkillText">
                <h3 className="SkillsText">HTML</h3>
              </div>
            </div>
            <div className="ProgramingSkills ">
              <div className="ProgramingSkillContent">
                <FaCss3Alt className="Icon" />
              </div>
              <div className="ProgramingSkillText">
                <h3 className="SkillsText">CSS</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="SkillsRightDiv">
          <div className="TeamDisplay">
            <div className="SkillsTitle">
              <h2 className="SkillsTitleText">Team</h2>
            </div>
            <div className="ProgramingSkills ">
              <div className="ProgramingSkillText">
                <h3 className="TeamText">Agile Development</h3>
              </div>
            </div>
            <div className="ProgramingSkills ">
              <div className="ProgramingSkillText">
                <h3 className="TeamText">Object Oriented Design</h3>
              </div>
            </div>
            <div className="ProgramingSkills ">
              <div className="ProgramingSkillText">
                <h3 className="TeamText">Data Structures</h3>
              </div>
            </div>
            <div className="ProgramingSkills ">
              <div className="ProgramingSkillText">
                <h3 className="TeamText">Mentorship</h3>
              </div>
            </div>
            <div className="ProgramingSkills ">
              <div className="ProgramingSkillText">
                <h3 className="TeamText">Financial Management</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="CenterCol"
        style={{ "padding-bottom": "1rem", "padding-top": "2rem" }}
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
