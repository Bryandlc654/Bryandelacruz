import React from "react";
import "./testimonials.css";
import { Data } from "./Data";
/* 2.17 */

const Testimonials = () => {
  return (
    <section className="testimonial container section">
      <h2 className="section__title">Mis Clientes</h2>
      <span className="section__subtitle">Testiomonios</span>

      <div className="testimonials__container">
        {Data.map(({ id, image, title, description }) => {
          return (
            <div className="testiomonial__card" key={id}>
              <img src={image} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
