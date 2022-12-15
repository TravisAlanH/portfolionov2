import React from "react";
// import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import data from "../Resume";

export default function PageHeader(props) {
  function scrollToContent() {
    var elem = document.getElementById("Start");
    elem.scrollIntoView();
  }
  return (
    <div>
      <div className="PageBlockLong" id="PageBlockLong">
        <div className="LinkNameDiv">
          <div className="Link">
            {data.HeaderLines[0].Name}
            <FaAngleDown
              className="ArrowDown bounce-3"
              onClick={() => {
                scrollToContent();
              }}
            />
          </div>
          <div className="PageBlockLinkBox">
            {data.HeaderLines[props].map}

            {/* as;dlfkj */}
            {/* <Link
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
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
