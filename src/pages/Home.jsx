import React from "react";
import Hero from "../components/Hero";
import Companies from "../components/Companies";
import About from "../components/About";
import Portfolio from "../components/Portfolio";

export default function Home() {
  return (
    <>
      <Hero />
      <Companies />
      <About />
      <Portfolio />
    </>
  );
}
