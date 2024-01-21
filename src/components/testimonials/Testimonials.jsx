import React from "react";
import "./testimonials.css";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay,Pagination } from "swiper";

const Testimonials = () => {
  return (
    <section className="testimonial container section" id="testimonial">
      <h2 className="section__title">Mis Clientes</h2>
      <br />

      <Swiper
        className="testimonials__container mySwiper"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 48,
          },
        }}
        modules={[Autoplay,Pagination]}
      >
        {Data.map(({ id, image }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={image} alt="" className="testimonial__img" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
