import React from "react";
import "../styles/Home.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import KannoResume from "../assets/KannoResume.pdf"

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> My name is Nick Kanno </h2>
   
        <div>
          
          <h1>
            I love basketball and golf. I'm learning to love coding. 
            </h1>
		<p className="download">
            <FaLinkedin />
            <FaGithub />
            <br></br>
            Download my resume.
            <br></br>
            <button className="button">
    <a className="button" href={KannoResume} download = "KannoResume.pdf">
      <b>Nick Kanno Resume</b>
    </a>
</button>
<br></br>

          </p>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>React, HTML, CSS, BootStrap</span>
          </li>
          <li>
            <h2>Back-End</h2>
            <span>
              Node, Express, GraphQL, MySQL, MongoDB
            </span>
          </li>
          <li>
            <h2>Languages</h2>
            <span>Javascript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
