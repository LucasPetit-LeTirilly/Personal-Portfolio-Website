import Image from "next/image";
import React from "react";
import BlackCircleMobile from "../../public/black-circle-mobile-formations.svg";
import BlackCircleDesktop from "../../public/black-circle-desktop-formations.svg";
import ArrowFormationMobile from "../../public/arrow-formations-mobile.svg";
import ArrowFormationDesktop from "../../public/arrow-formations-desktop.svg";
import { useWindowSize } from "../lib/customHooks";

export default function Formations() {
  const { windowSize } = useWindowSize();
  return (
    <section className="relative flex flex-col items-center mt-[60px] pb-10 pl-3 pr-3 min-[620px]:mt-[60px]">
      {(windowSize.width ?? 0) < 620 ? (
        <React.Fragment>
          <Image src={BlackCircleMobile} alt="Cercle Noir" width={250} />
          <h2 className="font-heading font-normal text-[1.8rem] text-white absolute top-[100px] left-[50%] -translate-x-[50%]">
            Formations
          </h2>
          <div className="grid grid-cols-3">
            <p
              className="font-koho font-medium text-center min-[470px]:text-[1.2rem] 
          max-[340px]:text-[0.8rem] relative top-[45%]"
            >
              License 2 Physique <br />
              Université de Rennes 1 <br />
              2017
            </p>
            <Image
              src={ArrowFormationMobile}
              alt="Flèche chronologique de mes formations"
              className="mt-10 w-full relative left-[-2.5%]"
            />

            <div className="flex flex-col justify-between">
              <p
                className="font-koho font-medium text-center min-[470px]:text-[1.2rem] 
            max-[340px]:text-[0.8rem] relative top-[20%]"
              >
                Master Son <br /> École Nationale Supérieure Louis-Lumiere
                <br /> 2021
              </p>
              <p
                className="font-koho font-medium text-center min-[470px]:text-[1.2rem] 
            max-[340px]:text-[0.8rem] relative bottom-[10%]"
              >
                Formation Développeur Web OpenClassrooms 2023
              </p>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Image
            src={BlackCircleMobile}
            alt="Cercle noir"
            className="w-[25%]"
          />
          <h2
            className="font-heading font-normal absolute text-white top-0 left-[50%] -translate-x-[50%]
          min-[620px]:text-[3.8vw] lg:text-[3vw]"
          >
            Formations
          </h2>
          <Image src={ArrowFormationDesktop} alt="Flèche chronologique de mes formations"/>
        </React.Fragment>
      )}
    </section>
  );
}
