import Image from "next/image";
import React from "react";
import BlackCircleMobile from "../../../public/black-circle-mobile-formations.svg";
import ArrowFormationMobile from "../../../public/arrow-formations-mobile.svg";
import ArrowFormationDesktop from "../../../public/arrow-formations-desktop.svg";
import ArrowFormationDesktopWithText from "../../../public/arrow-formations-desktop-with-text.svg";
import { useWindowSize } from "../../lib/customHooks";

export default function Formations() {
  const { windowSize } = useWindowSize();
  return (
    <section className="relative flex flex-col items-center mt-[60px] pb-10 pl-3 pr-3 min-[620px]:mt-[60px]">
      {(windowSize.width ?? 0) < 620 ? (
        <React.Fragment>
          <Image src={BlackCircleMobile} alt="Black circle" width={250} />
          <h2 className="font-heading font-normal text-[1.8rem] text-white absolute top-[100px] left-[50%] -translate-x-[50%]">
            Studies
          </h2>
          <div className="grid grid-cols-3">
            <p
              className="font-koho font-medium text-center min-[470px]:text-[1.2rem] 
          max-[340px]:text-[0.8rem] relative top-[45%]"
            >
              Associate degree in Physics
              <br />
              Universiy of Rennes 1 <br />
              2017
            </p>
            <Image
              src={ArrowFormationMobile}
              alt="Arrow of time of my studies"
              className="mt-10 w-full relative left-[-2.5%]"
            />
            <div className="flex flex-col justify-between">
              <p
                className="font-koho font-medium text-center min-[470px]:text-[1.2rem] 
              max-[340px]:text-[0.8rem] relative top-[20%]"
              >
                Master`&apos;`s degree in sound <br /> École Nationale
                Supérieure Louis-Lumiere
                <br /> 2021
              </p>
              <p
                className="font-koho font-medium text-center min-[470px]:text-[1.2rem] 
              max-[340px]:text-[0.8rem] relative bottom-[10%]"
              >
                OpenClassrooms Web Developer Training 2023
              </p>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Image
            src={BlackCircleMobile}
            alt="Black circle"
            className="max-[1024px]:w-[200px] w-[25%] mt-5"
          />
          <h2
            className="font-heading font-normal absolute text-white top-[17%] lg:top-[16.5%] left-[50%] -translate-x-[50%]
          min-[620px]:text-[2rem] lg:text-[3vw]"
          >
            Studies
          </h2>
          <div className="relative lg:hidden">
            <div className="flex justify-between mt-8">
              <p className="font-koho font-medium text-center text-xl relative left-9 lg:left-0">
                Associate degree in Physics
                <br />
                Universiy of Rennes 1 <br />
                2017
              </p>
              <p className="font-koho font-medium text-center text-xl relative right-2 lg:right-0">
                OpenClassrooms <br /> Web Developer Training <br /> 2023
              </p>
            </div>
            <Image
              src={ArrowFormationDesktop}
              alt="Flèche chronologique de mes formations"
              className="mt-3 w-[600px] lg:w-full"
            />
            <p className="font-koho font-medium text-center text-xl">
              Master`&apos;`s degree in sound <br /> École Nationale Supérieure
              Louis-Lumiere
              <br /> 2021
            </p>
          </div>
          <div className="max-lg:hidden w-full pl-10 pr-10 mt-[70px]">
            <Image
              src={ArrowFormationDesktopWithText}
              alt=" Arrow of time of my studies, Associate degree in Physics in 2017, Master's degree in sound at ENS Louis-Lumière in 2021, OpenClassrooms Web Developer training in 2023."
              className="w-full"
            />
          </div>
        </React.Fragment>
      )}
    </section>
  );
}
