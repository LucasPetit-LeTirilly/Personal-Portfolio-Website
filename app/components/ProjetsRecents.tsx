"use client";

import React from "react";
import Image from "next/image";
import BlackEllipseMobile from "../../public/black-ellipse-mobile-projets-recents.svg";
import BlackEllipseDesktop from "../../public/black-ellipse-desktop-projets-recents.svg";
import RectangleGris from "../../public/rectangle-gris.png";
import { useWindowSize } from "../lib/customHooks";

// Le titre Projets Recents n'apparait pas bien de 620 à 790px

export default function ProjetsRecents() {
  const { windowSize } = useWindowSize();
  return (
    <section>
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
          <div className="relative mb-[7rem]">
            <Image
              className="relative max-[790px]:hidden top-[0] left-[49.7%] -translate-x-[50%] w-[34%]"
              src={BlackEllipseDesktop}
              alt="Demi-cercle noir"
            />
            <h2
              className="absolute top-[15px] left-[50%] -translate-x-[50%] whitespace-nowrap 
              font-heading font-bold max-[790px]:text-black 
              max-[790px]:mt-[1rem]  text-[3rem] min-[790px]:text-[3.8vw] min-[1260px]:text-[3rem]
              min-[790px]:top-[20px] min-[1350px]:top-[30px] min-[1350px]:top-[40px]
              text-white w-fit"
            >
              Projets Récents
            </h2>
          </div>
        </React.Fragment>
      )}
      <div className="relative mt-[2rem] min-[790px]:mt-[5rem]">
      <Image
            className="mx-auto w-[83%]"
            src={RectangleGris}
            alt="Demi-cercle noir"
          />
      </div>
    </section>
  );
}
