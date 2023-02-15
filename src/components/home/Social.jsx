import React from "react";
import "./home.css";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/bryan_dlc99/"
        className="home__social-icon"
      >
        <i className="uil uil-instagram"></i>
      </a>
      <a href="https://github.com/Bryandlc654" className="home__social-icon">
        <i className="uil uil-github-alt"></i>
      </a>
      <a href="https://wa.link/953urh" className="home__social-icon">
        <i className="uil uil-whatsapp"></i>
      </a>
    </div>
  );
};

export default Social;
