"use client";

import React from "react";
import Image from "next/image";
import BannerImageMobile from "../../../public/hero-banner-mobile-final4k.png";
import BannerImageDesktop from "../../../public/hero-banner-final4k.png";
import LogoArrowDown from "../../../public/circle-arrow-line.svg";
import Link from "next/link";
import { useWindowSize } from "../../lib/customHooks";

export default function HeroBanner() {
  const { windowSize } = useWindowSize();

  return (
    <section id="home" className="relative h-[92vh] sm:h-[93.3vh] z-10">
      {(windowSize.width ?? 0) < 1440 ? (
        <React.Fragment>
          <Image
            className="object-cover w-full h-full min-[790px]:object-top"
            src={BannerImageMobile}
            alt="Picture of a shinning black sun"
            priority={true}
          />
          <div
            className="absolute top-[10%] left-[50%] -translate-x-[50%] z-10 font-mainTitle font-bold text-[2.5rem] whitespace-nowrap
          max-[420px]:text-[9.4vw] min-[790px]:text-[3rem] min-[880px]:text-[4rem] min-[1200px]:text-[4.5rem] min-[1200px]:top-[15%]"
          >
            <div className="relative">
              <h1>
                Lucas Petit - Le Tirilly <br />
                Fullstack Developer
              </h1>
              <div className="absolute top-[50%] w-[108%] h-[3px] bg-black -translate-x-[4%]"></div>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Image
            className="object-cover object-right w-full h-full"
            src={BannerImageDesktop}
            alt="Picture of a shinning black sun"
            priority={true}
          />
          <div
            className="absolute top-[50.15%]  -translate-y-[50%] z-10 font-mainTitle font-bold text-[4rem] whitespace-nowrap
            min-[1440px]:left-[13%] min-[1540px]:left-[15%] min-[2000px]:text-[4vw]"
          >
            <div className="relative">
              <h1>
                Lucas Petit - Le Tirilly <br />
                Fullstack Developer
              </h1>
              <div className="absolute top-[50%] w-[108%] h-[3px] bg-black -translate-x-[4%]"></div>
            </div>
          </div>
          <Link href="#projets-recents">
            <Image
              className="absolute top-[92%] left-[50%] -translate-x-[50%]"
              src={LogoArrowDown}
              alt="Arrow leading to scroll down"
            />
          </Link>
        </React.Fragment>
      )}
    </section>
  );
}
