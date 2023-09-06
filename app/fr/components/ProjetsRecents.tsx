"use client";

import React from "react";
import Image from "next/image";
import BlackEllipseMobile from "../../../public/black-ellipse-mobile-projets-recents.svg";
import BlackEllipseDesktop from "../../../public/black-ellipse-desktop-projets-recents.svg";
import ModalProjets from "./ModalProjets";
import { descriptionsProjets } from "../descriptionsProjets";
import { useWindowSize } from "../../lib/customHooks";

export default function ProjetsRecents() {
  const { windowSize } = useWindowSize();
  return (
    <section className="relative">
      {(windowSize.width ?? 0) < 620 ? (
        <React.Fragment>
          <Image
            className="relative top-[0] left-[49.7%] -translate-x-[50%] w-[200px]"
            src={BlackEllipseMobile}
            alt="Demi-cercle noir"
          />
          <h2
            id="projets-recents"
            className="relative bottom-[125px] left-[50%] -translate-x-[50%] font-heading font-bold text-[1.5rem] text-white
      min-[620px]:bottom-[95px] min-[620px]:text-[1.75rem] w-fit z-20"
          >
            Projets Récents
          </h2>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="relative mb-[7rem] max-[790px]:absolute max-[790px]:left-[50%] max-[790px]:bottom-[105%] lg:mb-5 z-10">
            <Image
              className="relative max-[790px]:hidden top-[0] left-[49.7%] -translate-x-[50%] w-[28%]"
              src={BlackEllipseDesktop}
              alt="Demi-cercle noir"
            />
            <h2
              id="projets-recents"
              className="absolute left-[50%] -translate-x-[50%] whitespace-nowrap 
              font-heading font-bold min-[620px]:mt-[1rem] max-[790px]:text-black 
              text-[3rem]
              min-[790px]:top-[5px] min-[1440px]:top-[15px]
              text-white w-fit"
            >
              Projets Récents
            </h2>
          </div>
        </React.Fragment>
      )}
      <div className=" mt-[2rem] max-[620px]:mt-[1rem] max-[790px]:mt-[9rem] min-[790px]:mt-[-3rem] lg:mt-3">
        <div className="lg:flex lg:flex-wrap">
          <ModalProjets data={descriptionsProjets[0]} />
          <ModalProjets data={descriptionsProjets[1]} />
          <ModalProjets data={descriptionsProjets[2]} />
        </div>
      </div>
      <div
        className="w-[40vw] h-[40vw] border-[7px] border-black absolute top-[20%] left-[50%] -translate-x-[50%] rotate-45 z-0
      max-lg:hidden"
      ></div>
    </section>
  );
}
