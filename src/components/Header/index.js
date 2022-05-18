import React from "react";

function Header(props) {
  const {
    // categories = [],
    // setCurrentCategory,
    aboutSelected,
    // currentCategory,
    setAboutSelected,
    portfolioSelected,
    setPortfolioSelected,
    contactSelected,
    setContactSelected,
    resumeSelected,
    setResumeSelected,
  } = props;

  return (
    <header>
      <h1>
        <a href="/">Amir Shariat</a>
      </h1>
      <nav>
        <ul>
          <li className={`nav-items ${aboutSelected && "nav-active"}`}>
            <span onClick={() => setAboutSelected(true)}>About Me</span>
          </li>
          <li className={`nav-items ${portfolioSelected && "nav-active"}`}>
            <span onClick={() => setPortfolioSelected(true)}>Portfolio</span>
          </li>
          <li className={`nav-items ${contactSelected && "nav-active"}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          <li className={`nav-items ${resumeSelected && "nav-active"}`}>
            <span onClick={() => setResumeSelected(true)}>Resume</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
