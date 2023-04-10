import React from "react";

export default function Home() {
  return (
    <div className="container">

      <div className="nameBox">
        <h1 className="nameTitle">Luis Ramirez</h1>
      </div>

      <div className="imgBox">
      <img
        style={{ width: "30%", borderRadius: "100px", justifyContent: "center"}}
        src="https://repository-images.githubusercontent.com/260096455/47f1b200-8b2e-11ea-8fa1-ab106189aeb0"
      />      
      </div>
      
      <div className="description">
        <p>
          I'am a Software Developer and I enjoy building websites from front-end
          to back-end!
        </p>
      </div>

      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>ReactJS, Redux, HTML, CSS, NPM, BootStrap, TailwindCSS,</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MySQL, MongoDB, AWS, SQL,
            Back-End Development & APIs 
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python </span>
          </li>
        </ol>
      </div>


    </div>
  );
}
