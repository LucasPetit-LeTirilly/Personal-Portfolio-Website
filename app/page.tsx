import React from "react";
import NavBar from "./components/NavBar";

// mettre la navbar en sticky
// verifier que le scroll du drawer sur les liens est bon
export default function Home() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div id="projets-recents" className="mt-80">
        projets recents
      </div>
      <div id="competences" className="mt-80">
        competences
      </div>
      <div id="contact" className="mt-80">
        contact
      </div>
    </React.Fragment>
  );
}
