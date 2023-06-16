import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toogleState, setToogleState] = useState(0);

  const toogleTab = (index) => {
    setToogleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Servicios</h2>
      <span className="section__subtitle">
        Soluciones personalizadas para potenciar tu éxito
      </span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>

            <h3 className="services__title">
              Productos <br />
              Digitales
            </h3>
          </div>
          <span className="services__button" onClick={() => toogleTab(1)}>
            Ver más
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toogleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toogleTab(0)}
                className="ul uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Productos Digitales</h3>
              <p className="services__modal-description">
                Diseñadas para satisfacer tus necesidades empresariales con
                creatividad y eficacia.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Sitios web responsivos.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Sitios web corporativos.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Landing Pages.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Blogs y publicaciones en línea.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Portafolios en línea.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Aplicaciones móviles web.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Productos <br /> CMS
            </h3>
          </div>
          <span className="services__button" onClick={() => toogleTab(2)}>
            Ver más
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toogleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toogleTab(0)}
                className="ul uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Productos CMS</h3>
              <p className="services__modal-description">
                Impulsa tu presencia en línea con nuestros productos CMS.
                Potentes. Personalizados. Éxito asegurado.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Ecommerce.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Sitios web responsivos.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Landing Page.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Aula virtual.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Diseñador
              <br />
              Visual
            </h3>
          </div>
          <span className="services__button" onClick={() => toogleTab(3)}>
            Ver más
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toogleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toogleTab(0)}
                className="ul uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Diseñador Visual</h3>
              <p className="services__modal-description">
                Trabajaré contigo para crear diseños que reflejen tu marca y se
                ajusten a tus necesidades comerciales únicas.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Diseño de Banners Publicitarios.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Diseño de Flyers para redes sociales
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Diseño de Logos corporativos.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Diseño de Piezas gráficas para sitio web.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
