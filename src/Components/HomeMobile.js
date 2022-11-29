import React from "react";
import {
  FaGraduationCap,
  FaCode,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaAngleUp,
  FaRegWindowRestore,
  FaQuoteLeft,
  FaQuoteRight,
  FaLinkedin,
  FaGithubSquare,
  FaMailBulk,
} from "react-icons/fa";
import { motion } from "framer-motion";
import DSU from "../Images/DSU_Logo.png";
import UC from "../Images/UC_Logo.png";
import Photo from "../Images/ProfilePhoto.jpg";
import Amazon from "../Images/AmazonCloneImg.jpg";

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
            <div className="SchoolLogoBox">
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
            <div className="SchoolLogoBox">
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

      {/* Projects */}
      <div className="PageIconDiv">
        <div className="Start" id="Start"></div>
        <FaRegWindowRestore className="PageIcon GradientNoHover" />
      </div>

      {/* QUOTE */}

      <div className="QuoteBlock">
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
      </div>

      {/* CONTENT */}

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

      {/* Contact */}

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
