"use client";
import React from "react";
import Image from "next/image";
import BlackEllipsisMobile from "../../public/black-ellipse-mobile-competences.svg";
import BlackEllipsisDesktop from "../../public/black-ellipse-desktop-competences.svg";
import FrontendCompetencesMobile from "../../public/frontend-competence-circle-mobile.svg";
import BackendCompetencesMobile from "../../public/backend-competence-circle-mobile.svg";
import OutilsCompetencesMobile from "../../public/outils-competence-circle-mobile.svg";
import OutilsCompetencesDesktop from "../../public/outils-competence-circle-desktop.svg";
import Margin from "../../public/margin-extra-long-edited4k.png";
import Formations from "./Formations";
import { useWindowSize } from "../lib/customHooks";

export default function Competences() {
  const { windowSize } = useWindowSize();
  return (
    <React.Fragment>
      <section
        id="competences"
        className="relative bg-beige pt-[150px] min-[620px]:pt-[50px]"
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
              className="absolute top-0 left-[50%] -translate-x-[50%] w-[33%] lg:w-[25%]"
            />
            <h2
              className="font-heading font-bold text-2xl text-white absolute top-9 left-[50%] -translate-x-[50%] 
            min-[620px]:text-[3.8vw] lg:text-[3vw]
          min-[620px]:top-[24px] min-[790px]:top-[40px] lg:mt-[-15px] min-[1150px]:mt-[10px]
          min-[1930px]:mt-[3vw]
          "
            >
              Compétences
            </h2>
          </React.Fragment>
        )}
        {(windowSize.width ?? 0) < 620 ? (
          <React.Fragment>
            <div className="relative flex flex-col gap-5 w-[70%] items-stretch ml-[15%] pb-7">
              <article>
                <Image
                  src={FrontendCompetencesMobile}
                  alt="Compétences Frontend"
                  className="relative w-full z-10"
                />
              </article>
              <article>
                <Image
                  src={BackendCompetencesMobile}
                  alt="Compétences Backend"
                  className="relative w-full z-10"
                />
              </article>
              <article>
                <Image
                  src={OutilsCompetencesMobile}
                  alt="Compétences liées aux outils"
                  className="relative w-full z-10"
                />
              </article>
              <div
                className="absolute top-[22.5%] left-[7%] border-b-[6px] border-l-[6px]  border-black w-[60vw] h-[60vw] 
                rotate-45 z-0 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
              ></div>
              <div
                className="absolute top-[59%] left-[7%] border-t-[6px] border-r-[6px] border-black w-[60vw] h-[60vw] 
                rotate-45 z-0 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
              ></div>
            </div>
            <Formations />
          </React.Fragment>
        ) : (
          <div className="lg:grid lg:grid-cols-[1fr_1fr_1fr] lg:grid-rows-[97vw] overflow-y-hidden">
            <Image
              src={Margin}
              alt="Marge décorative"
              className="max-lg:hidden w-[10vw] mt-[-50px]"
            />
            <div>
              <div className="relative w-full h-[60vw] lg:h-[42vw] lg:w-[80vw] mt-[-25px] ">
                <article>
                  <Image
                    src={FrontendCompetencesMobile}
                    alt="Compétences Frontend"
                    className="w-[25vw] lg:w-[22vw] absolute top-[20%] lg:top-[14%] left-12 z-10"
                  />
                </article>
                <article>
                  <Image
                    src={BackendCompetencesMobile}
                    alt="Compétences Backend"
                    className="w-[25vw] lg:w-[22vw] absolute top-5 right-12 z-10"
                  />
                </article>
                <div></div>
                <article>
                  <Image
                    src={OutilsCompetencesDesktop}
                    alt="Compétences liées aux outils"
                    className="w-[40vw] lg:w-[30vw] absolute top-[60%] lg:top-[55%] left-[52%] lg:left-[50%] -translate-x-[50%] z-10"
                  />
                </article>
                <div
                  className="absolute top-[2%] lg:top-[-8%] left-[47%] border-l-[5px]  border-black w-[10vw] h-[50vw] 
                  rotate-[79deg] lg:rotate-[86deg] z-0 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                ></div>
                <div
                  className="absolute top-[13%] lg:top-[22%] left-[62%] border-l-[5px]  border-black w-[10vw] h-[45vw] lg:h-[30vw]
                  rotate-[42deg] lg:rotate-[55deg] z-0 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                ></div>
                <div
                  className="absolute top-[16%] lg:top-[38%] left-[29%] border-l-[5px]  border-black w-[10vw] h-[52vw] lg:h-[25vw] 
                  rotate-[117deg] lg:rotate-[120deg] 
                    z-0 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                ></div>
              </div>
              <Formations />
            </div>
            <Image
              src={Margin}
              alt="Marge décorative"
              className="max-lg:hidden w-[10vw] rotate-180 mt-[-50px]"
            />
          </div>
        )}
      </section>
    </React.Fragment>
  );
}
