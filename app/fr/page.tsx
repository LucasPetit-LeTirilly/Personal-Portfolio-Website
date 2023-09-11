import React from "react";
import NavBar from "./components/NavBar";
import HeroBanner from "./components/HeroBanner";
import ProjetsRecents from "./components/ProjetsRecents";
import Competences from "./components/Competences";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <React.Fragment>
      <NavBar />
      <main>
        <HeroBanner />
        <ProjetsRecents />
        <Competences />
        <Contact />
      </main>
      <Footer />
    </React.Fragment>
  );
}
