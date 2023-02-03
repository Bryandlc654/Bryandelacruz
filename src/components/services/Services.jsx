import React from "react";
import "./services.css";
/* 1:29 */

const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Servicios</h2>
      <span className="section__subtitle">Lo que ofrezco</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Diseñador <br/>de Producto</h3>
          </div>
          <span className="services__button">
            Ver más
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className="services__modal">
            <div className="services__modal-content">
              <i className="ul uil-times services__modal-close"></i>
              <h3 className="services__modal-title">Diseñador de Producto</h3>
              <p className="services__modal-description">
                Servicio con mas de 1 año de experiencia. Brindando un trabajo
                de calidad a clientes y empresas.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Diseño y desarrollo de interfaces de usuario.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Diseño y desarrollo de páginas web.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Diseño de flyers y anuncios publicitarios.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Diseño de letreros publicitarios.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">Diseñador <br/> Ui / Ux</h3>
          </div>
          <span className="services__button">
            Ver más
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className="services__modal">
            <div className="services__modal-content">
              <i className="ul uil-times services__modal-close"></i>
              <h3 className="services__modal-title">Diseñador  Ui / Ux</h3>
              <p className="services__modal-description">
                servicio con mas de 1 añoa de experiencia. Brindando un trabajo
                de calidad a clientes y empresas.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Diseño y desarrollo de interfaces de usuario.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Diseño y desarrollo de páginas web.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Diseño de flyers y anuncios publicitarios.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Diseño de letreros publicitarios.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">Diseñador<br/>Visual</h3>
          </div>
          <span className="services__button">
            Ver más
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className="services__modal">
            <div className="services__modal-content">
              <i className="ul uil-times services__modal-close"></i>
              <h3 className="services__modal-title">Diseñador Visual</h3>
              <p className="services__modal-description">
                servicio con mas de 1 añoa de experiencia. Brindando un trabajo
                de calidad a clientes y empresas.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Diseño y desarrollo de interfaces de usuario.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Diseño y desarrollo de páginas web.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Diseño de flyers y anuncios publicitarios.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Diseño de letreros publicitarios.
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
