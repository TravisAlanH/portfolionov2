import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import data from "../Resume";

export default function Home(props) {
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
        <div className="Name">{data.Name}</div>
        <div className="Info">{data.HomeQuote}</div>
      </div>
      <div className="HomeLinksList">
        {data.Links.map((item, index) => (
          <Link to={item.URL} key={index} className="PageLink GradientHover">
            {item.Name}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
