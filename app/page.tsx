import React from "react";
import NavBar from "./components/NavBar";
import HeroBanner from "./components/HeroBanner";

// verifier que le scroll du drawer sur les liens est bon
// traduire les alt des images en anglais
export default function Home() {
  return (
    <React.Fragment>
      <NavBar />
      <main>
        <HeroBanner />
        <div id="projets-recents" className="bg-red-500">
          projets recents
        </div>
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
