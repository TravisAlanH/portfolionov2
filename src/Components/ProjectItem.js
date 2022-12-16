import React from "react";

export default function ProjectItem({
  Name,
  Description,
  Image,
  GitHubLink,
  LiveLink,
}) {
  return (
    <div className="ProjectItemBox">
      <div className="ProjectItemImage">
        <img src={Image} alt="Amazon Clone" className="ProjectImage" />
        <div className="ProjectItemImageTextBox">
          <h3 className="ProjectItemImageText">{Name}</h3>
        </div>
      </div>

      <div className="ProjectItemAboutTextBox">
        <div className="ProjectItemAboutText">
          <span className="ProjectItemText">{Description}</span>
        </div>
        <div className="ProjectItemButtonsBox">
          <a
            className="ProjectItemButton"
            href={GitHubLink}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="ProjectItemButton"
            href={LiveLink}
            target="_blank"
            rel="noreferrer"
          >
            Live
          </a>
        </div>
      </div>
    </div>
  );
}
