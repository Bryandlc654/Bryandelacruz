import React from "react";
import "./home.css";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/bryandelacruzsoto/"
        className="home__social-icon"
        title="Instagram"
      >
        <i className="uil uil-linkedin" aria-label="Linkedin"></i>
      </a>
      <a
        href="https://github.com/Bryandlc654"
        className="home__social-icon"
        title="GitHub"
      >
        <i className="uil uil-github-alt" aria-label="GitHub"></i>
      </a>
      <a
        href="https://wa.link/953urh"
        className="home__social-icon"
        title="WhatsApp"
      >
        <i className="uil uil-whatsapp" aria-label="WhatsApp"></i>
      </a>
    </div>
  );
};

export default Social;
