import React from "react";

function Resume() {
  return (
    <div className="parent">
      <h3>Resume</h3>
      <a
        href={require("../../assets/resume.docx")}
        download={"Amir Shariat.docx"}
        className="resume-detail"
      >
        Click here to download my full resume
      </a>
      <div id="resume">
        <div className="resume-items">
          <h4>Work Experiences:</h4>
          <ul>
            <li className="resume-detail">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </li>
            <li className="resume-detail">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </li>
            <li className="resume-detail">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </li>
            <li className="resume-detail">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </li>
            <li className="resume-detail">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </li>
          </ul>
        </div>
        <div className="resume-items">
          <h4>Education:</h4>
          <ul>
            <li className="resume-detail">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </li>
            <li className="resume-detail">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </li>
            <li className="resume-detail">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </li>
            <li className="resume-detail">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </li>
            <li className="resume-detail">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
