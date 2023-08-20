"use client";

import React from "react";
import Image from "next/image";
import BannerImageMobile from "../../public/hero-banner-mobile-final4k.png";
import BannerImageDesktop from "../../public/hero-banner-final4k.png";
import { useWindowSize } from "../lib/customHooks";

export default function HeroBanner() {
  const { windowSize } = useWindowSize();

  return (
    <section className="relative h-[92vh] sm:h-[93.3vh]">
      {(windowSize.width ?? 0) < 1024 ? (
        <React.Fragment>
          <Image
            className="object-cover w-full h-full min-[790px]:object-top"
            src={BannerImageMobile}
            alt="Dessin d'un soleil noir rayonnant"
          />
          <div
            className="absolute top-[10%] left-[50%] -translate-x-[50%] z-10 font-mainTitle font-bold text-[2.5rem] whitespace-nowrap
          max-[420px]:text-[9.4vw] min-[790px]:text-[3rem] min-[880px]:text-[4rem]"
          >
            <p>Lucas Petit - Le Tirilly</p>
            <div className="w-[108%] h-[3px] bg-black -translate-x-[4%]"></div>
            <p>Développeur Fullstack</p>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Image
            className="object-cover object-right w-full h-full"
            src={BannerImageDesktop}
            alt="Dessin d'un soleil noir rayonnant"
          />
          <div
            className="absolute top-[50.15%] left-[15%] -translate-y-[50%] z-10 font-mainTitle font-bold text-[4rem] whitespace-nowrap
          max-[420px]:text-[9.4vw]"
          >
            <p>Lucas Petit - Le Tirilly</p>
            <div className="w-[108%] h-[3px] bg-black -translate-x-[4%]"></div>
            <p>Développeur Fullstack</p>
          </div>
        </React.Fragment>
      )}
    </section>
  );
}
