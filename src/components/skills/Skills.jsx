import React from "react";
import "./skill.css";
import Frontend from "./Fontend";
import Backend from "./Diseño";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Habilidades</h2>
      <span className="section__subtitle">Mi Nivel Técnico</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
