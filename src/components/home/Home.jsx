import React, { useState } from "react";
import "./home.css";
import Social from './Social';
import Data from './Data';
import ScrollDown from "./ScrollDown";


const Home = () => {
  const [showImage, setShowImage] = useState(true); // Mostrar imagen inmediatamente

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div
            className={`home__img ${showImage ? "show" : ""}`}
            loading="lazy"
          ></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;