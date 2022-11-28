import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="NavBar" id="NavBar">
      <Link to="/" className="NavTextOrientation GradientHover">
        Home
      </Link>
      <span className="NavTextOrientation">------</span>
      <a
        href={"//www.linkedin.com/in/TravisHDev"}
        className="NavTextOrientation GradientHover"
        rel="noreferrer"
        target={"_blank"}
      >
        Linked In
      </a>
      <a href=" " className="NavTextOrientation">
        Git Hub
      </a>
      <a href=" " className="NavTextOrientation">
        resume
      </a>
    </div>
  );
}
