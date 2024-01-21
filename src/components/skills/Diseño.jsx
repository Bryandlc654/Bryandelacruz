import React from "react";
import "./skill.css";

const Diseño = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Diseño Gráfico y CMS</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check" aria-hidden="true"></i>
            <div>
              <h3 className="skills_name">Adobe Illustrator</h3>
              <span className="skills__level">Intermedio</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check" aria-hidden="true"></i>
            <div>
              <h3 className="skills_name">Adobe Photoshop</h3>
              <span className="skills__level"> Básico</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check" aria-hidden="true"></i>
            <div>
              <h3 className="skills_name">Corel Draw</h3>
              <span className="skills__level">Intermedio</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check" aria-hidden="true"></i>
            <div>
              <h3 className="skills_name">Figma</h3>
              <span className="skills__level"> Intermedio</span>
            </div>
          </div>
        </div>
        <div className="skills__group">

          <div className="skills__data">
            <i className="bx bx-badge-check" aria-hidden="true"></i>
            <div>
              <h3 className="skills_name">WordPress</h3>
              <span className="skills__level">Intermedio</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check" aria-hidden="true"></i>
            <div>
              <h3 className="skills_name">Elementor</h3>
              <span className="skills__level">Intermedio</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check" aria-hidden="true"></i>
            <div>
              <h3 className="skills_name">Moodle</h3>
              <span className="skills__level">Intermedio</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diseño;
