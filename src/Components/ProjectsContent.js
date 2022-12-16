import React from "react";
import { FaRegWindowRestore, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import data from "../Resume";
import ProjectItem from "./ProjectItem";

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

      <div className="ProjectsBox">
        <div className="ProjectsLayoutBox">
          <h3 className="MobileProjectMessage">
            select image to Expand Content
          </h3>
          {data.Projects.map((item, index) => {
            return <ProjectItem {...item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
