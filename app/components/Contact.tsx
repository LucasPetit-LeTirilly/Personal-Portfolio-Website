"use client";

import React from "react";
import Image from "next/image";
import BlackEllipsisMobile from "../../public/black-ellipse-mobile-competences.svg";
import BlackEllipsisDesktop from "../../public/black-ellipse-desktop-competences.svg";
import { useWindowSize } from "../lib/customHooks";

export default function Contact() {
  const { windowSize } = useWindowSize();
  return (
    <section id="contact" className="relative pl-5 pr-5">
      {(windowSize.width ?? 0) < 620 ? (
        <React.Fragment>
          <Image
            src={BlackEllipsisMobile}
            alt="Demi-cercle noir"
            className="relative top-0 left-[50%] -translate-x-[50%] w-[232px]"
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
            className="relative top-0 left-[50%] -translate-x-[50%] w-[33%] lg:w-[25%]"
          />
          <h2
            className="font-heading font-bold text-2xl text-white absolute top-9 left-[50%] -translate-x-[50%] 
            min-[620px]:text-[3.8vw] lg:text-[3vw]
          min-[620px]:top-[24px] min-[790px]:top-[40px] lg:mt-[-15px] min-[1150px]:mt-[10px]
          min-[1930px]:mt-[3vw]
          "
          >
            Contact
          </h2>
        </React.Fragment>
      )}
      <form
        action={"adresse a enter"}
        method="get"
        className="bg-grey rounded-[2rem] font-koho font-bold text-base mt-5 pt-3 pl-3 pr-3 pb-5"
      >
        <p className="text-center">
          Vous pouvez me contacter via le formulaire ci-dessous ou directement
          via mon e-mail:{" "}
          <a href="mailto:lucas.letirilly.petit@gmail.com">
            lucas.letirilly.petit@gmail.com
          </a>
        </p>
        <div className="w-full flex justify-between items-center gap-5 mt-3">
          <div>
            <label htmlFor="surname">Nom</label>
            <input
              type="text"
              name="surname"
              id="surname"
              className="block mt-2 mb-3 rounded drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
              required
            />
          </div>
          <div>
            <label htmlFor="name">Prénom</label>
            <input
              type="text"
              name="name"
              id="name"
              className="block mt-2 mb-3 rounded drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="email">Votre e-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full mt-2 mb-3 rounded drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
            required
          />
        </div>
        <div>
          <label htmlFor="subject">Objet</label>
          <input
            type="text"
            name="subject"
            id="subject"
            className="block w-full mt-2 mb-3 rounded drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
            required
          />
        </div>
        <div>
          <label htmlFor="message">Votre message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            cols={20}
            className="block w-full mt-2 rounded drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
            required
          ></textarea>
        </div>
      </form>
    </section>
  );
}
