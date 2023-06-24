import React from "react";
/* 2.32 */

function Contact() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contáctame</h2>
      <span className="section__subtitle">Potenciemos tu proyecto</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Escríbeme</h3>
          <div className="contac__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Correo</h3>
              <span className="contact__card-data">bdelacruz654@gmail.com</span>
              <a
                href="mailto:bdelacruz654@gmail.com"
                className="contact__button"
              >
                Escríbeme
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+51-948-521-905</span>
              <a href="https://wa.link/oon7i8" className="contact__button">
                Escríbeme
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <i className="bx bxl-messenger contact__card-icon"></i>
              <h3 className="contact__card-title">Messenger</h3>
              <span className="contact__card-data">Bryan de la Cruz</span>
              <a
                href="https://www.facebook.com/messages/t/100046518585291"
                className="contact__button"
              >
                Escríbeme
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Cuentame tu Proyecto</h3>
        </div>
      </div>
    </section>
  );
}

export default Contact;
