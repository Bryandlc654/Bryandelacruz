import React from "react";
import "./qualification.css";
/* 1.56 */

function Qualification() {
  return (
    <section className="qualification section">
      <h2 className="section__title">Calificación</h2>
      <span className="section__subtitle">Mi viaje personal</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active  button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Educación
          </div>
          <div className="qualification__button button--flex">
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experiencia
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualification__content">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Diseño y Programación Web
                </h3>
                <span className="qualification__subtitle">
                  ISTP Tecnosur Chincha - III Ciclo
                </span>
                <div className="qualification__calender">
                  <i className="uil-calendar-alt"></i> Abril 2022 - Actualidad
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Bootcamp Desarrollo Web Fullstack
                </h3>
                <span className="qualification__subtitle">Codigo - Tecsup</span>
                <div className="qualification__calender">
                  <i className="uil-calendar-alt"></i> Octubre 2022 - Mayo 2023
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Ingeniería de Sistemas Computacionales
                </h3>
                <span className="qualification__subtitle">Utel - I Ciclo</span>
                <div className="qualification__calender">
                  <i className="uil-calendar-alt"></i> Marzo 2023 - Actualidad
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Diseño Web</h3>
                <span className="qualification__subtitle">
                  ISTP Tecnosur - II Ciclo
                </span>
                <div className="qualification__calender">
                  <i className="uil-calendar-alt"></i> Abril 2022 - Actualidad
                </div>
              </div>
            </div>
          </div>

          <div className="qualification__content">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Escuela Desarrollo Web</h3>
                <span className="qualification__subtitle">Platzi</span>
                <div className="qualification__calender">
                  <i className="uil-calendar-alt"></i> Junio 2023 - Actualidad
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
