"use client";

import React from "react";
import Image from "next/image";
import BannerImageMobile from "../../public/hero-banner-mobile3-final4k.png";
import { useWindowSize } from "../lib/customHooks";

export default function HeroBanner() {
  const {windowSize} = useWindowSize();

  return (
    <section className="relative h-[750px]">
      {(windowSize.width ?? 0) <= 640 ? <React.Fragment><Image
        className="object-cover w-full h-full"
        src={BannerImageMobile}
        alt="Dessin d'un soleil noir rayonnant"
      />
      <div className="absolute top-[10%] left-[50%] -translate-x-[50%] z-10 font-mainTitle font-bold text-[2.5rem] whitespace-nowrap">
        <p>Lucas Petit - Le Tirilly</p>
        <div className="w-[108%] h-[3px] bg-black -translate-x-[4%]"></div>
        <p>Développeur Fullstack</p>
      </div>
      </React.Fragment> : <div>paysage</div>}
      
    </section>
  );
}
