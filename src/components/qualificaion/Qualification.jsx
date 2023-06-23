import React, { useState } from "react";
import "./qualification.css";

function Qualification() {
  const [toogleState, setToogleState] = useState(1);

  const toogleTab = (index) => {
    setToogleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Calificación</h2>
      <span className="section__subtitle">Mi viaje personal</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toogleState === 1
                ? "qualification__button qualification__active  button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toogleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Educación
          </div>
          <div
            className={
              toogleState === 2
                ? "qualification__button qualification__active  button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toogleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experiencia
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toogleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
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
                <h3 className="qualification__title">Escuela Desarrollo Web</h3>
                <span className="qualification__subtitle">Platzi</span>
                <div className="qualification__calender">
                  <i className="uil-calendar-alt"></i>Junio 2023 - Actualidad
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toogleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Asesor de Ventas</h3>
                <span className="qualification__subtitle">
                  Conecta Retail - La Curacao
                </span>
                <div className="qualification__calender">
                  <i className="uil-calendar-alt"></i> Octubre 2018 - Abril 2022
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
                <h3 className="qualification__title">Diseño Gráfico</h3>
                <span className="qualification__subtitle">Vision Urbana</span>
                <div className="qualification__calender">
                  <i className="uil-calendar-alt"></i> Mayo 2022 - Octubre 2022
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Diseño y Desarrollo Web
                </h3>
                <span className="qualification__subtitle">
                  Peruvian Science
                </span>
                <div className="qualification__calender">
                  <i className="uil-calendar-alt"></i> Noviembre 2022 -
                  Actualidad
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
