import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <a href="https://github.com/AShariat" target="_blank" rel="noreferrer">
        <h6>
          <FaGithub />
        </h6>
      </a>
      <a
        href="https://www.linkedin.com/in/amirshariat"
        target="_blank"
        rel="noreferrer"
      >
        <h6>
          <FaLinkedin />
        </h6>
      </a>
      <a
        href="https://www.facebook.com/amirshariat1987"
        target="_blank"
        rel="noreferrer"
      >
        <h6>
          <FaFacebook />
        </h6>
      </a>
    </footer>
  );
}

export default Footer;
