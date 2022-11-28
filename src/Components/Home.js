import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="PageBlock"
      initial={{
        x: "-100vw",
        transition: { duration: 1, delay: 0.5 },
        opacity: 0,
      }}
      animate={{ x: 0, transition: { duration: 1, delay: 0.5 }, opacity: 1 }}
      exit={{
        x: "-100vw",
        transition: { duration: 1, delay: 0.5 },
        opacity: 0,
      }}
      transition={{
        delay: 0.5,
        default: { ease: "linear" },
      }}
    >
      <div className="NameAndInfo">
        <div className="Name">Travis Heidelberger</div>
        <div className="Info">
          Web Developer, Data Structures, Object Oriented
        </div>
      </div>
      <div className="HomeLinksList">
        <Link to="/about" className="PageLink GradientHover">
          About
        </Link>
        <Link to="/projects" className="PageLink GradientHover">
          Projects
        </Link>
        <Link to="/contact" className="PageLink GradientHover">
          Contact
        </Link>
      </div>
    </motion.div>
  );
}
