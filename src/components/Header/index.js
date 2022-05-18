import React from "react";

function Header(props) {
  const {
    aboutSelected,
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
        <ul className="nav-items">
          <li className={`nav-item ${aboutSelected && "nav-active"}`}>
            <h4
              onClick={() => {
                setAboutSelected(true);
                setPortfolioSelected(false);
                setContactSelected(false);
                setResumeSelected(false);
              }}
            >
              About Me
            </h4>
          </li>
          <li className={`nav-item ${portfolioSelected && "nav-active"}`}>
            <h4
              onClick={() => {
                setAboutSelected(false);
                setPortfolioSelected(true);
                setContactSelected(false);
                setResumeSelected(false);
              }}
            >
              Portfolio
            </h4>
          </li>
          <li className={`nav-item ${contactSelected && "nav-active"}`}>
            <h4
              onClick={() => {
                setAboutSelected(false);
                setPortfolioSelected(false);
                setContactSelected(true);
                setResumeSelected(false);
              }}
            >
              Contact
            </h4>
          </li>
          <li className={`nav-item ${resumeSelected && "nav-active"}`}>
            <h4
              onClick={() => {
                setAboutSelected(false);
                setPortfolioSelected(false);
                setContactSelected(false);
                setResumeSelected(true);
              }}
            >
              Resume
            </h4>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
