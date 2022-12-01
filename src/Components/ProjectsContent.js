import React from "react";
import Amazon from "../Images/AmazonCloneImg.jpg";
import { FaRegWindowRestore, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function ProjectsContent() {
  return (
    <div>
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
    </div>
  );
}
