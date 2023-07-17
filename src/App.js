import React from "react";
import "./App.css";
import smoothscroll from "smoothscroll-polyfill";
import Header from "./components/header/Headers";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualificaion/Qualification";
/* import Testimonials from "./components/testimonials/Testimonials"; */
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Portfolio from "./components/portfolio/Portfolio";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Portfolio />
    {/*     <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
