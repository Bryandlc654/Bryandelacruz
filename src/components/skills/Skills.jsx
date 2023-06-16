import React from "react";
import "./skill.css";
import Frontend from "./Fontend";
import Diseño from "./Diseño";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Habilidades</h2>
      <span className="section__subtitle">
        Experiencia y habilidades que marcan la diferencia
      </span>

      <div className="skills__container container grid">
        <Frontend />
        <Diseño />
      </div>
    </section>
  );
};

export default Skills;
