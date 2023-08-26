import React from "react";
import NavBar from "./components/NavBar";
import HeroBanner from "./components/HeroBanner";
import ProjetsRecents from "./components/ProjetsRecents";
import Competences from "./components/Competences";

// traduire les alt des images en anglais
export default function Home() {
  return (
    <React.Fragment>
      <NavBar />
      <main>
        <HeroBanner />
        <ProjetsRecents/>
        <Competences/>
        <div id="contact" className="mt-80">
          contact
        </div>
      </main>
    </React.Fragment>
  );
}
