import React, { useState } from "react";
import "./portfolio.css";
import { Data } from "./Data";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  return (
    <section className="testimonial container section" id="portfolio">
      <h2 className="section__title">Portafolio</h2>
      <span className="section__subtitle">Mis trabajos recientes</span>
      <div className="list__buttons">
        <button onClick={() => setActiveCategory("Todos")}>Todos</button>
        <button onClick={() => setActiveCategory("web")}>Web</button>
        <button onClick={() => setActiveCategory("cms")}>CMS</button>
        <button onClick={() => setActiveCategory("diseño")}>Diseño</button>
      </div>

      <section className="portfolio__container">
        {Data.filter(
          (item) =>
            activeCategory === "Todos" || item.categoria === activeCategory
        ).map(({ id, categoria, image, title, description, enlace }) => {
          return (
            <article className="portfolio__card" key={id}>
              <img
                src={image}
                alt=""
                className="portfolio__img"
                onClick={() => handleImageClick(image)}
              />
              <h3 className="portfolio__name">{title}</h3>
              {categoria !== "diseño" && ( // Condición para mostrar el botón solo si la categoría no es "diseño"
                <a
                  href={enlace}
                  target="_blank"
                  rel="noreferrer"
                  className="portfolio__button"
                >
                  Ver proyecto{" "}
                  <i className="bx bx-right-arrow-alt portfolio__button-icon"></i>
                </a>
              )}
              <p className="portfolio__description">{description}</p>
            </article>
          );
        })}
      </section>

      {modalVisible && (
        <div className="modal">
          <span className="modal__close" onClick={() => setModalVisible(false)}>
            &times;
          </span>
          <img src={selectedImage} alt="" className="modal__image" />
        </div>
      )}
    </section>
  );
};

export default Portfolio;
