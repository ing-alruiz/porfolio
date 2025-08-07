import React from "react";
import Hero from "../components/HomePage/Hero";
import Companies from "../components/HomePage/Companies";
import About from "../components/HomePage/About";
import Portfolio from "../components/HomePage/Portfolio";
import Experience from "../components/HomePage/Experience";
import Aptitudes from "../components/HomePage/Aptitudes";

export default function Home() {
  return (
    <>
      <Hero />
      <Aptitudes />
      <Companies />
      <About />
      <Experience />
      <Portfolio />
    </>
  );
}
