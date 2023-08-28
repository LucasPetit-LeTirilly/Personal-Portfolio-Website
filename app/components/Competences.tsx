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
import { useWindowSize } from "../lib/customHooks";

export default function Competences() {
  const { windowSize } = useWindowSize();
  return (
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
          <h2 className="font-heading text-2xl text-white absolute top-6 left-[50%] -translate-x-[50%]">
            Compétences
          </h2>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Image
            src={BlackEllipsisDesktop}
            alt="Demi-cercle noir"
            className="absolute top-0 left-[50%] -translate-x-[50%] w-[33%]"
          />
          <h2
            className="font-heading font-bold text-2xl text-white absolute top-9 left-[50%] -translate-x-[50%] 
            min-[620px]:text-[3.8vw] min-[1260px]:text-[3rem]
          min-[620px]:top-[24px] min-[790px]:top-[40px] min-[1120px]:top-[50px] min-[1260px]:top-[60px] min-[1440px]:top-[80px]"
          >
            Compétences
          </h2>
        </React.Fragment>
      )}
      {(windowSize.width ?? 0) < 620 ? (
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
            className="absolute top-[22.5%] left-[7%] border-b-[6px] border-l-[6px]  border-black w-[60vw] h-[60vw] rotate-45 z-0
      drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
          ></div>
          <div
            className="absolute top-[59%] left-[7%] border-t-[6px] border-r-[6px] border-black w-[60vw] h-[60vw] rotate-45 z-0
              
      drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
          ></div>
        </div>
      ) : (
        <div className="lg:grid lg:grid-cols-3">
          <Image
            src={Margin}
            alt="Marge décorative"
            className="max-lg:hidden w-[10vw]"
          />
          <div className="relative w-full h-[115vw] lg:w-[80vw]">
            <article>
              <Image
                src={FrontendCompetencesMobile}
                alt="Compétences Frontend"
                className="w-[35%] absolute top-[8%] left-10 z-10"
              />
            </article>
            <article>
              <Image
                src={BackendCompetencesMobile}
                alt="Compétences Backend"
                className="w-[30%] absolute top-5 right-10 z-10"
              />
            </article>
            <div></div>
            <article>
              <Image
                src={OutilsCompetencesDesktop}
                alt="Compétences liées aux outils"
                className="w-[55%] absolute top-[35%] left-[57%] -translate-x-[50%] z-10"
              />
            </article>
            <div
              className="absolute top-[5%] left-[50%] border-l-[6px]  border-black w-[10vw] h-[50vw] rotate-[78deg] z-0
      drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
            ></div>
            <div
              className="absolute top-[18%] left-[65%] border-l-[6px]  border-black w-[10vw] h-[50vw] rotate-[58deg] z-0
      drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
            ></div>
            <div
              className="absolute top-[20.5%] left-[27%] border-l-[6px]  border-black w-[10vw] h-[50vw] rotate-[115deg] z-0
      drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
            ></div>
          </div>
          <Image
            src={Margin}
            alt="Marge décorative"
            className="max-lg:hidden w-[10vw] rotate-180"
          />
        </div>
      )}
    </section>
  );
}
