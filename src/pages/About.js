import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <img src={require("../me.png").default} alt="admin" />
      <div className="about-me">
        <Link to="/" style={{ textDecoration: "none" }}>
          <p className="logo">← Back</p>
        </Link>
        <p>
          Hi, I am <span>Sagar Paul</span>. I am a fullstack developer based in
          Kolkata, India.
        </p>
        <p>
          I made this webapp as a fun project. I do not promote piracy of any
          kind.
        </p>
        <p>
          Technologies used : React, Node (npm packages like axios, cheerio etc)
        </p>
      </div>
    </div>
  );
};

export default About;
