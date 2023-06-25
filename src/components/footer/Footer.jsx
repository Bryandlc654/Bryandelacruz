import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h2 className="footer__title">Bryan</h2>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              Sobre mi
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#testimonial" className="footer__link">
              Testimonios
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.facebook.com/bryandlcs"
            className="footer__social-link"
            title="Facebook"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-facebook" aria-label="Facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/bryan_dlc99/"
            className="footer__social-link"
            title="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-instagram" aria-label="Instagram"></i>
          </a>
          <a
            href="https://twitter.com/de_la37852"
            className="footer__social-link"
            title="Twitter"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-twitter" aria-label="Twitter"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Bryan De la Cruz. Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
