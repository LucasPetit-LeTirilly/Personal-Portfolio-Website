"use client";

import React from "react";
import Image from "next/image";
import BlackEllipseMobile from "../../public/black-ellipse-mobile-projets-recents.svg";
import BlackEllipseDesktop from "../../public/black-ellipse-desktop-projets-recents.svg";
import ModalProjets from "./ModalProjets";
import { descriptionsProjets } from "../descriptionsProjets";
import { useWindowSize } from "../lib/customHooks";

// ajouter carousel images ?

export default function ProjetsRecents() {
  const { windowSize } = useWindowSize();
  return (
    <section id="projets-recents">
      {(windowSize.width ?? 0) < 620 ? (
        <React.Fragment>
          <Image
            className="relative top-[0] left-[49.7%] -translate-x-[50%] w-[204px]"
            src={BlackEllipseMobile}
            alt="Demi-cercle noir"
          />
          <h2
            className="relative bottom-[125px] left-[50%] -translate-x-[50%] font-heading font-bold text-[1.5rem] text-white
      min-[620px]:bottom-[95px] min-[620px]:text-[1.75rem] w-fit"
          >
            Projets Récents
          </h2>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="relative mb-[7rem] max-[790px]:absolute max-[790px]:left-[50%] max-[790px]:top-[104%]">
            <Image
              className="relative max-[790px]:hidden top-[0] left-[49.7%] -translate-x-[50%] w-[34%]"
              src={BlackEllipseDesktop}
              alt="Demi-cercle noir"
            />
            <h2
              className="absolute left-[50%] -translate-x-[50%] whitespace-nowrap 
              font-heading font-bold min-[620px]:mt-[1rem] max-[790px]:text-black 
              text-[3rem] min-[790px]:text-[3.8vw] min-[1260px]:text-[3rem]
              min-[790px]:top-[5px] min-[1440px]:top-[30px]
              text-white w-fit"
            >
              Projets Récents
            </h2>
          </div>
        </React.Fragment>
      )}
      <div className=" mt-[2rem] max-[620px]:mt-[1rem] max-[790px]:mt-[9rem] min-[790px]:mt-[5rem]">
        <ModalProjets
          data={descriptionsProjets[0]}
        />
        <ModalProjets data={descriptionsProjets[1]} />
        <ModalProjets data={descriptionsProjets[2]} />
      </div>
    </section>
  );
}
