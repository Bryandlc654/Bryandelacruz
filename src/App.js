import React from "react";
import "./App.css";
import smoothscroll from "smoothscroll-polyfill";
import Header from "./components/header/Headers";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualificaion/Qualification";
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
      </main>
    </>
  );
}

export default App;
