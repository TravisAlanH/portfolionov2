import React from "react";
import Photo from "../Images/ProfilePhoto.jpg";
import data from "../Resume";
import { FaGraduationCap, FaCode } from "react-icons/fa";

export default function AboutContent() {
  return (
    <div>
      <div className="Start" id="Start"></div>
      <div className="CenterCol" id="ContentStart">
        <div className="AboutHeaderSplit">
          <div className="Hello">
            <h1 className="HelloText GradientNoHover">Hello</h1>
            <h5 className="FromTravis">./Travis</h5>
          </div>
          <div className="FaceImage">
            <img className="ProfilePhoto" src={Photo} alt="ProfilePhoto" />
          </div>
        </div>
      </div>
      <div className="AboutNotesDiv">
        <div className="AboutText">
          <p>{data.AboutText}</p>
        </div>
      </div>
      <div className="PageIconDiv">
        <FaGraduationCap className="PageIcon GradientNoHover" />
      </div>
      <div className="SchoolDiv">
        {data.Collage.map((item, index) => (
          <div className="SchoolBox" key={index}>
            <div className="ShoolContent">
              <div>
                <img src={item.Image} alt="dsu" className="SchoolIcon" />
              </div>
              <div className="SchoolText">
                <h4 className="School">{item.School}</h4>
                <h2 className="Degree">{item.Degree}</h2>
                <h5 className="GradYear">{item.GradYear}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="PageIconDiv">
        <FaCode className="PageIcon GradientNoHover" />
      </div>
      <div className="SkillsDiv">
        <div className="SkillsLeftDiv">
          <div className="SkillsDisplay">
            <div className="SkillsTitle">
              <h2 className="SkillsTitleText">{data.SkillsName}</h2>
            </div>
            {data.Skills.map((item, index) => (
              <div className="ProgramingSkills " key={index}>
                <div className="ProgramingSkillContent">{item.Icon}</div>
                <div className="ProgramingSkillText">
                  <h3 className="SkillsText">{item.Name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="SkillsRightDiv">
          <div className="TeamDisplay">
            <div className="SkillsTitle">
              <h2 className="SkillsTitleText">{data.TalentName}</h2>
            </div>
            {data.TalentSkills.map((item, index) => (
              <div className="ProgramingSkills " key={index}>
                <div className="ProgramingSkillText">
                  <h3 className="TeamText">{item.Skill}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
