import React from "react";
import NavBar from "./components/NavBar";
import HeroBanner from "./components/HeroBanner";
import ProjetsRecents from "./components/ProjetsRecents";
import { useWindowSize } from "./lib/customHooks";

// verifier que le scroll du drawer sur les liens est bon
// traduire les alt des images en anglais
export default function Home() {
  return (
    <React.Fragment>
      <NavBar />
      <main>
        <HeroBanner />
        <ProjetsRecents/>
        <div id="competences" className="mt-80">
          competences
        </div>
        <div id="contact" className="mt-80">
          contact
        </div>
      </main>
    </React.Fragment>
  );
}
