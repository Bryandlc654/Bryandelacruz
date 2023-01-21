import React from "react";
import "./skill.css";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Diseño Gráfico</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Illustrator</h3>
              <span className="skills__level">Intermedio</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Photoshop</h3>
              <span className="skills__level">Básico</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Corel Draw</h3>
              <span className="skills__level">Intermedio</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Figma</h3>
              <span className="skills__level">Intermedio</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
