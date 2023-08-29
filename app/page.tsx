import React from "react";
import NavBar from "./components/NavBar";
import HeroBanner from "./components/HeroBanner";
import ProjetsRecents from "./components/ProjetsRecents";
import Competences from "./components/Competences";
import Contact from "./components/Contact";

// traduire les alt des images en anglais
export default function Home() {
  return (
    <React.Fragment>
      <NavBar />
      <main>
        <HeroBanner />
        <ProjetsRecents />
        <Competences />
        <Contact/>
      </main>  
    </React.Fragment>
  );
}
