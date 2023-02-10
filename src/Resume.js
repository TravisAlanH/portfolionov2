import { FaCss3Alt, FaHtml5, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import DSU from "./Images/DSU_Logo.png";
import UC from "./Images/UC_Logo.png";
// import Amazon from "./Images/AmazonCloneImg.jpg";
import Navy from "./Images/NavyPage.jpg";
// import GitImg from "./Images/GitHelp.jpg";
// import Game from "./Images/IndexGame.jpg";
import Todo from "./Images/TodoScreen.jpg";
import WeatherIMG from "./Images/WeatherPage.jpg";
import TicketMaster from "./Images/TicketMaster.jpg";

let data = {
  "Name": "Travis Heidelberger",
  "HomeQuote": "Web Developer, Data Structures, Object Oriented",
  "Email": "Travis.H.Dev@gmail.com",
  "Links": [
    {
      "Name": "About",
      "URL": "/about",
    },
    {
      "Name": "Projects",
      "URL": "/projects",
    },
    {
      "Name": "Contact",
      "URL": "/contact",
    },
  ],
  "Link": {
    "LinkedIn": "//www.linkedin.com/in/TravisHDev",
    "GitHub": "https://github.com/TravisAlanH",
  },
  "ExternalLinks": [
    {
      "Name": "Linked In",
      "Url": "//www.linkedin.com/in/TravisHDev",
    },
    {
      "Name": "Git Hub",
      "Url": "https://github.com/TravisAlanH",
    },
    {
      "Name": "resume",
      "Url": "https://main--meek-licorice-6882a8.netlify.app",
    },
  ],
  "AboutText":
    "My Name is Travis Heidelberger. I am a Software Developer that understands the importance of well built data structures. For the past 14 years I was Active duty with the United States Navy as a Financial and Logistics Specialist where I maintained the assets of my command. I have a passion for learning, and drive to create new, responsive, things for the web.",

  "HeaderLines": [
    {
      "Name": "About",
      "Link1": "Home",
      "Link1URL": "/home",
      "Link2": "Contact",
      "Link2URL": "/contact",
      "Link3": "Projects",
      "Link3URL": "/projects",
    },
  ],
  "Collage": [
    {
      "Image": DSU,
      "School": "Dakota State University SD",
      "Degree": "Computer Science (BS)",
      "GradYear": "Graduated 2022",
    },
    {
      "Image": UC,
      "School": "University of Charleston WV",
      "Degree": "Business Admin (BA)",
      "GradYear": "Graduated 2019",
    },
  ],
  "TalentName": "Team",
  "TalentSkills": [{ "Skill": "Agile Development" }, { "Skill": "Object Oriented Design" }, { "Skill": "Data Structures" }, { "Skill": "Mentorship" }, { "Skill": "Financial Management" }],
  "SkillsName": "Programing",
  "Skills": [
    {
      "Icon": <FaReact className="Icon" />,
      "Name": "React",
    },
    {
      "Icon": <FaNodeJs className="Icon" />,
      "Name": "Node",
    },
    {
      "Icon": <FaJsSquare className="Icon" />,
      "Name": "JavaScript",
    },
    {
      "Icon": <FaHtml5 className="Icon" />,
      "Name": "HTML",
    },
    {
      "Icon": <SiTailwindcss className="Icon" />,
      "Name": "Tailwind",
    },
    {
      "Icon": <FaCss3Alt className="Icon" />,
      "Name": "CSS",
    },
  ],
  "ContactHeader": "Start the conversation here,",
  "ContactInput": [
    {
      "Label": "Name*",
      "Name": "name",
      "ID": "name",
      "Type": "text",
      "Required": "required",
      "HTMLFor": "Name",
    },
    {
      "Label": "Email*",
      "Name": "email",
      "ID": "email",
      "Type": "text",
      "Required": "required",
      "HTMLFor": "email",
    },
    {
      "Label": "Phone",
      "Name": "phone",
      "ID": "phone",
      "Type": "text",
      "Required": "",
      "HTMLFor": "phone",
    },
  ],
  "TextArea": (
    <div className="FormLine">
      <textarea type="text" className="FormInputTextArea ChangeLabel" name="comments" id="comments" rows={6}></textarea>
      <label htmlFor="Phone" className="FormLabel ">
        Comments
      </label>
    </div>
  ),
  "SubmitButton": {
    "SubmitText": "Submit",
    "Type": "submit",
  },
  "Projects": [
    {
      "Name": "WeatherWind.net",
      "Description": "Weather App using National Weather Service API, ReactJS Axios HTML Tailwind CSS Responsive",
      "Image": WeatherIMG,
      "GitHubLink": "https://github.com/TravisAlanH/weather",
      "LiveLink": "http://weatherwind.net/",
    },
    // {
    //   "Name": "Git Command Helper",
    //   "Description": "Began Jan 8, 23: WORKING PROJECT: Common Git Commands that are used frequently as well as description of use: Mobile First, React, Tailwind, Data Base",
    //   "Image": GitImg,
    //   "GitHubLink": "https://github.com/TravisAlanH/githelp",
    //   "LiveLink": "https://voluble-liger-1d24bd.netlify.app/",
    // },
    {
      "Name": "EventMaster",
      "Description": "Responsive Ticket Search using Ticket Master API, React, Axios, Cors, Tailwind, Location Data, Time Data",
      "Image": TicketMaster,
      "GitHubLink": "https://github.com/TravisAlanH/ticketmaster",
      "LiveLink": "https://main--rainbow-starlight-b9b707.netlify.app/home",
    },
    {
      "Name": "U.S. Navy Logistics",
      "Description": "US Navy Logistics Specialist assistance page, Todo Calender, Document Creation, Personnel Management, Vender Management",
      "Image": Navy,
      "GitHubLink": "https://github.com/TravisAlanH/Navy-Page",
      "LiveLink": "https://main--luxury-conkies-c0db37.netlify.app",
    },
    // {
    //   "Name": "Amazon Clone",
    //   "Description": "This is a clone of the Amazon website. It is built using React, HTML and CSS",
    //   "Image": Amazon,
    //   "GitHubLink": "https://github.com/TravisAlanH/AmazonClone",
    //   "LiveLink": "https://stately-melba-346208.netlify.app",
    // },
    {
      "Name": "Calender Events",
      "Description": "WORKING PROJECT: Responsive Mobile First: Event App with Daily View: React, Tailwind",
      "Image": Todo,
      "GitHubLink": "https://github.com/TravisAlanH/calender_events",
      "LiveLink": "https://musical-otter-c1a269.netlify.app/",
    },
  ],
};

export default data;
