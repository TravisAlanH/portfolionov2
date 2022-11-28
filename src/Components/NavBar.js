import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="NavBar" id="NavBar">
      <Link to="/home" className="NavTextOrientation GradientHover">
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
      <a
        href="https://indd.adobe.com/view/a02a1e3e-d989-459d-9ae4-7c4e97f834c1"
        target={"_blank"}
        rel="noreferrer"
        className="NavTextOrientation GradientHover"
      >
        resume
      </a>
    </div>
  );
}
