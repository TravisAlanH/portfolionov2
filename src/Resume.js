import { FaCss3Alt, FaHtml5, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiRedux } from "react-icons/si";
import DSU from "./Images/DSU_Logo.png";
import UC from "./Images/UC_Logo.png";
// import Amazon from "./Images/AmazonCloneImg.jpg";
// import Navy from "./Images/NavyPage.jpg";
// import GitImg from "./Images/GitHelp.jpg";
// import Game from "./Images/IndexGame.jpg";
// import Todo from "./Images/TodoScreen.jpg";
import WeatherIMG from "./Images/WeatherPage.jpg";
import TicketMaster from "./Images/TicketMaster.jpg";
import AuditIMG from "./Images/AuditPage.png";

let data = {
  Name: "Travis Heidelberger",
  HomeQuote: "Web Developer, Data Structures, Object Oriented",
  Email: "Travis.H.Dev@gmail.com",
  Links: [
    {
      Name: "About",
      URL: "/about",
    },
    {
      Name: "Projects",
      URL: "/projects",
    },
    {
      Name: "Contact",
      URL: "/contact",
    },
  ],
  Link: {
    LinkedIn: "//www.linkedin.com/in/TravisHDev",
    GitHub: "https://github.com/TravisAlanH",
  },
  ExternalLinks: [
    {
      Name: "Linked In",
      Url: "//www.linkedin.com/in/TravisHDev",
    },
    {
      Name: "Git Hub",
      Url: "https://github.com/TravisAlanH",
    },
    {
      Name: "resume",
      Url: "https://raw.githubusercontent.com/TravisAlanH/PulseV6/main/Heidelberger_Resume and Cover.pdf",
    },
  ],
  AboutText:
    "My name is Travis Heidelberger, and I am a Software Developer with a strong foundation in well-built data structures. With 14 years of experience in the United States Navy as a Financial and Logistics Specialist, I meticulously managed my command's assets. My journey also led me to the realm of Data Center Infrastructure Management, where I honed my skills as a specialist. In this capacity, I developed automation tools tailored for streamlined data center asset management. Beyond my military service, I have contributed significantly to my company's success by creating a robust full-stack web application. Using technologies such as Redux, Firebase, and React, I designed an innovative solution that not only showcased my technical prowess but also opened new avenues for business opportunities. I am passionate about continuous learning and am driven to craft responsive and inventive solutions for the web. My diverse experiences have equipped me with a unique perspective, allowing me to approach software development with creativity and precision.",
  AboutTextSM:
    "I'm Travis Heidelberger, a Software Developer rooted in robust data structures. During my 14-year tenure as a US Navy Financial and Logistics Specialist, I managed assets meticulously. Venturing into Data Center Infrastructure Management, I honed my skills, creating streamlined automation tools. My contributions extend to a thriving career, shaping a full-stack web app with Redux, Firebase, and React. This innovative solution not only showcased my skills but also created new business avenues. Driven by a passion for learning, I craft inventive, responsive web solutions. My diverse experiences grant me a unique perspective, allowing me to approach software development with creativity and precision.",
  HeaderLines: [
    {
      Name: "About",
      Link1: "Home",
      Link1URL: "/home",
      Link2: "Contact",
      Link2URL: "/contact",
      Link3: "Projects",
      Link3URL: "/projects",
    },
  ],
  Collage: [
    {
      Image: DSU,
      School: "Dakota State University SD",
      Degree: "Computer Science (BS)",
      GradYear: "Graduated 2022",
    },
    {
      Image: UC,
      School: "University of Charleston WV",
      Degree: "Business Admin (BA)",
      GradYear: "Graduated 2019",
    },
  ],
  TalentName: "Team",
  TalentSkills: [
    { Skill: "Agile Development" },
    { Skill: "Security Concepts" },
    { Skill: "Data Structures" },
    { Skill: "Object Oriented Design" },
    { Skill: "Problem Solving" },
    { Skill: "Project Management" },
    { Skill: "Team Building" },
    { Skill: "Mentorship" },
  ],
  SkillsName: "Programing",
  Skills: [
    {
      Icon: <FaReact className="Icon" />,
      Name: "React",
    },
    {
      Icon: <SiFirebase className="Icon" />,
      Name: "Firebase",
    },
    {
      Icon: <SiRedux className="Icon" />,
      Name: "Redux",
    },

    {
      Icon: <FaNodeJs className="Icon" />,
      Name: "Node",
    },
    {
      Icon: <FaJsSquare className="Icon" />,
      Name: "JavaScript",
    },
    {
      Icon: <FaHtml5 className="Icon" />,
      Name: "HTML",
    },
    {
      Icon: <SiTailwindcss className="Icon" />,
      Name: "Tailwind",
    },
    {
      Icon: <FaCss3Alt className="Icon" />,
      Name: "CSS",
    },
  ],
  ContactHeader: "Start the conversation here,",
  ContactInput: [
    {
      Label: "Name*",
      Name: "name",
      ID: "name",
      Type: "text",
      Required: "required",
      HTMLFor: "Name",
    },
    {
      Label: "Email*",
      Name: "email",
      ID: "email",
      Type: "text",
      Required: "required",
      HTMLFor: "email",
    },
    {
      Label: "Phone",
      Name: "phone",
      ID: "phone",
      Type: "text",
      Required: "",
      HTMLFor: "phone",
    },
  ],
  TextArea: (
    <div className="FormLine">
      <textarea type="text" className="FormInputTextArea ChangeLabel" name="comments" id="comments" rows={6}></textarea>
      <label htmlFor="Phone" className="FormLabel ">
        Comments
      </label>
    </div>
  ),
  SubmitButton: {
    SubmitText: "Submit",
    Type: "submit",
  },
  Projects: [
    {
      Name: "Data Center Audit Tool",
      Description:
        "Prioritize user validation for access. Our Data Center Audit tool meticulously surveys DC Locations, Assets, Power & Data Connections, Security, Fire Protection, Maintainability. Built with cutting-edge tech: React, Firebase, Redux, Tailwind, Axios, Node, ensuring a secure, precise, and efficient experience for comprehensive data center assessment.",
      Image: AuditIMG,
      GitHubLink: "https://github.com/TravisAlanH/PulseV6",
      LiveLink: "https://startling-arithmetic-d3b021.netlify.app",
    },
    {
      Name: "WeatherWind.net",
      Description:
        "Weather App powered by the National Weather Service API. Built with ReactJS, Axios, and HTML, styled using Tailwind CSS for a responsive design. Stay informed with accurate weather data, seamless navigation, and intuitive interface. ",
      Image: WeatherIMG,
      GitHubLink: "https://github.com/TravisAlanH/weather",
      LiveLink: "http://weatherwind.net/",
    },
    // {
    //   "Name": "Git Command Helper",
    //   "Description": "Began Jan 8, 23: WORKING PROJECT: Common Git Commands that are used frequently as well as description of use: Mobile First, React, Tailwind, Data Base",
    //   "Image": GitImg,
    //   "GitHubLink": "https://github.com/TravisAlanH/githelp",
    //   "LiveLink": "https://voluble-liger-1d24bd.netlify.app/",
    // },
    {
      Name: "EventMaster",
      Description:
        "Responsive Ticket Search powered by the Ticket Master API. Crafted using React, Axios, and Cors, designed with Tailwind for responsiveness. Utilizes Location and Time Data for precise results.",
      Image: TicketMaster,
      GitHubLink: "https://github.com/TravisAlanH/ticketmaster",
      LiveLink: "https://main--rainbow-starlight-b9b707.netlify.app/home",
    },
    // {
    //   Name: "U.S. Navy Logistics",
    //   Description:
    //     "US Navy Logistics Specialist assistance page, Todo Calender, Document Creation, Personnel Management, Vender Management",
    //   Image: Navy,
    //   GitHubLink: "https://github.com/TravisAlanH/Navy-Page",
    //   LiveLink: "https://main--luxury-conkies-c0db37.netlify.app",
    // },
    // {
    //   "Name": "Amazon Clone",
    //   "Description": "This is a clone of the Amazon website. It is built using React, HTML and CSS",
    //   "Image": Amazon,
    //   "GitHubLink": "https://github.com/TravisAlanH/AmazonClone",
    //   "LiveLink": "https://stately-melba-346208.netlify.app",
    // },
    // {
    //   Name: "Calender Events",
    //   Description: "WORKING PROJECT: Responsive Mobile First: Event App with Daily View: React, Tailwind",
    //   Image: Todo,
    //   GitHubLink: "https://github.com/TravisAlanH/calender_events",
    //   LiveLink: "https://musical-otter-c1a269.netlify.app/",
    // },
  ],
};

export default data;
