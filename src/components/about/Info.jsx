import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon" aria-hidden="true"></i>
        <h3 className="about__title">Experiencia</h3>
        <span className="about__subtitle">1 año de experiencia laboral</span>
      </div>
      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon" aria-hidden="true"></i>
        <h3 className="about__title">Proyectos</h3>
        <span className="about__subtitle">Más de 8 proyectos completados</span>
      </div>
      <div className="about__box">
        <i className="bx bx-support about__icon" aria-hidden="true"></i>
        <h3 className="about__title">Soporte</h3>
        <span className="about__subtitle">Soporte en línea 24/7</span>
      </div>
    </div>
  );
};

export default Info;
