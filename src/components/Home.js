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
        src="https://avatars.githubusercontent.com/u/114416320?v=4"
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
            <span>ReactJS, Redux, HTML, CSS, BootStrap, TailwindCSS,</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MySQL, MongoDB, AWS, SQL,
            Back-End Development & APIs, IAM, AWS
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python, TypeSCript </span>
          </li>
        </ol>
      </div>


    </div>
  );
}
