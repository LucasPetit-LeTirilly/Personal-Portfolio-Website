"use client";
import React from "react";
import Image from "next/image";
import BlackEllipsisMobile from "../../../public/black-ellipse-mobile-competences.svg";
import BlackEllipsisDesktop from "../../../public/black-ellipse-desktop-competences.svg";
import SkillsMobile from "../../../public/skills-mobile.svg";
import SkillsDesktop from "../../../public/skills-desktop.svg";
import Formations from "./Formations";
import { useWindowSize } from "../../lib/customHooks";

export default function Competences() {
  const { windowSize } = useWindowSize();
  return (
    <React.Fragment>
      <section
        id="competences"
        className="relative bg-beige pt-[150px] min-[620px]:pt-[50px] lg:pt-[0px]"
      >
        {(windowSize.width ?? 0) < 620 ? (
          <React.Fragment>
            <Image
              src={BlackEllipsisMobile}
              alt="Demi-cercle noir"
              className="absolute top-0 left-[50%] -translate-x-[50%] w-[232px]"
            />
            <h2 className="font-heading text-[1.8rem] text-white absolute top-6 left-[50%] -translate-x-[50%]">
              Compétences
            </h2>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Image
              src={BlackEllipsisDesktop}
              alt="Demi-cercle noir"
              className="absolute top-0 left-[50%] -translate-x-[50%] w-[300px] lg:w-[400px]"
            />
            <h2
              className="font-heading font-bold text-[2rem] lg:text-[3rem] text-white absolute top-9 left-[50%] -translate-x-[50%] 
          min-[620px]:top-[24px] lg:mt-[10px]
          "
            >
              Compétences
            </h2>
          </React.Fragment>
        )}
        {(windowSize.width ?? 0) < 620 ? (
          <React.Fragment>
            <div className="w-[80%] mx-auto pb-7">
              <Image
                src={SkillsMobile}
                className="w-full"
                alt="Compétences"
              ></Image>
            </div>
            <Formations />
          </React.Fragment>
        ) : (
          <div className="lg:grid  lg:grid-cols-[1fr_80vw_1fr]">
            <div className="max-lg:hidden margin"></div>

            <div className="mx-auto mt-[80px] lg:mt-[150px] w-[90%] lg:w-[800px] xl:w-[1000px]">
              <Image src={SkillsDesktop} alt="Compétences" />
              <Formations />
            </div>
            <div className="max-lg:hidden rotate-180 margin"></div>
          </div>
        )}
      </section>
    </React.Fragment>
  );
}
