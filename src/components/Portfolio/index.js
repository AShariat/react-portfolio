import React from "react";

function Portfolio() {
  return (
    <div className="parent">
      <h3>Portfolio</h3>
      <div id="portfolio">
        <div className="portfolio-items">
          <img
            src={require("../../assets/images/robot-gladiators.jpg")}
            alt="Robot Gladiators"
            className="portfolio-image"
          />
          <h5>Robot Gladiators</h5>
          <a
            href="https://ashariat.github.io/robot-gladiators"
            title="Robot Gladiators"
            target="_blank"
            rel="noreferrer"
          >
            Deployed Application
          </a>
          <a
            href="https://github.com/AShariat/robot-gladiators"
            title="Robot Gladiators"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repository
          </a>
        </div>
        <div className="portfolio-items">
          <img
            src={require("../../assets/images/password-generator.jpg")}
            alt="Password Generator"
            className="portfolio-image"
          />
          <h5>Password Generator</h5>
          <a
            href="https://ashariat.github.io/password-generator"
            title="Password Generator"
            target="_blank"
            rel="noreferrer"
          >
            Deployed Application
          </a>
          <a
            href="https://github.com/AShariat/password-generator"
            title="Password Generator"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repository
          </a>
        </div>
        <div className="portfolio-items">
          <img
            src={require("../../assets/images/taskinator.jpg")}
            alt="Taskinator"
            className="portfolio-image"
          />
          <h5>Taskinator</h5>
          <a
            href="https://ashariat.github.io/taskinator"
            title="Taskinator"
            target="_blank"
            rel="noreferrer"
          >
            Deployed Application
          </a>
          <a
            href="https://github.com/AShariat/taskinator"
            title="Taskinator"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repository
          </a>
        </div>
        <div className="portfolio-items">
          <img
            src={require("../../assets/images/code-quiz.jpg")}
            alt="Code Quiz"
            className="portfolio-image"
          />
          <h5>Code Quiz</h5>
          <a
            href="https://ashariat.github.io/code-quiz"
            title="Code Quiz"
            target="_blank"
            rel="noreferrer"
          >
            Deployed Application
          </a>
          <a
            href="https://github.com/AShariat/code-quiz"
            title="Code Quiz"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repository
          </a>
        </div>
        <div className="portfolio-items">
          <img
            src={require("../../assets/images/uhoo.jpg")}
            alt="Uhoo"
            className="portfolio-image"
          />
          <h5>Uhoo</h5>
          <a
            href="https://ashariat.github.io/Uhoo"
            title="Uhoo"
            target="_blank"
            rel="noreferrer"
          >
            Deployed Application
          </a>
          <a
            href="https://github.com/AShariat/Uhoo"
            title="Uhoo"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repository
          </a>
        </div>
        <div className="portfolio-items">
          <img
            src={require("../../assets/images/copy-cat-games.png")}
            alt="Copy Cat Games"
            className="portfolio-image"
          />
          <h5>Copy Cat Games</h5>
          <a
            href="https://morning-spire-87893.herokuapp.com"
            title="Copy Cat Games"
            target="_blank"
            rel="noreferrer"
          >
            Deployed Application
          </a>
          <a
            href="https://github.com/JohnKnee3/Copy-Cat-Games"
            title="Copy Cat Games"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repository
          </a>
        </div>
        <div className="portfolio-items">
          <img
            src={require("../../assets/images/my-budget.jpg")}
            alt="My Budget"
            className="portfolio-image"
          />
          <h5>My Budget</h5>
          <a
            href="https://amir-mybudget.herokuapp.com/"
            title="My Budget"
            target="_blank"
            rel="noreferrer"
          >
            Deployed Application
          </a>
          <a
            href="https://github.com/AShariat/my-budget"
            title="My Budget"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
