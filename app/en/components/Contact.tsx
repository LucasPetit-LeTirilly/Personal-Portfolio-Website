"use client";

import React from "react";
import Image from "next/image";
import BlackEllipsisMobile from "../../../public/black-ellipse-mobile-competences.svg";
import BlackEllipsisDesktop from "../../../public/black-ellipse-desktop-competences.svg";
import BlackSquare from "../../../public/black-square.svg";
import { useWindowSize } from "../../lib/customHooks";

export default function Contact() {
  const { windowSize } = useWindowSize();
  return (
    <section id="contact" className="relative pl-5 pr-5 pb-[3rem]">
      {(windowSize.width ?? 0) < 620 ? (
        <React.Fragment>
          <Image
            src={BlackEllipsisMobile}
            alt="Black half-circle"
            className="relative top-0 left-[50%] -translate-x-[50%] w-[232px]"
          />
          <h2 className="font-heading text-[1.8rem] text-white absolute top-6 left-[50%] -translate-x-[50%]">
            Contact
          </h2>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Image
            src={BlackEllipsisDesktop}
            alt="Black half-circle"
            className="relative top-0 left-[50%] -translate-x-[50%] w-[33%] lg:w-[25%] z-10"
          />
          <h2
            className="font-heading font-bold text-2xl text-white absolute top-9 left-[50%] -translate-x-[50%] z-10 
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
        className="relative min-[620px]:w-[70%] lg:w-[50%] bg-grey rounded-[2rem] font-koho font-bold text-base mt-5 
        min-[620px]:ml-[auto] min-[620px]:mr-[auto] p-5 lg:p-[2.5rem] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] z-10"
      >
        <p className="text-center">
          Contact me through the form below or directly at:{" "}
          <a href="mailto:lucas.letirilly.petit@gmail.com">
            lucas.letirilly.petit@gmail.com
          </a>
        </p>
        <div className="w-full flex items-center gap-5 mt-3">
          <div className="flex-[1_1_0]">
            <label htmlFor="surname">Surname</label>
            <br />
            <input
              type="text"
              name="surname"
              id="surname"
              className="w-full mt-2 mb-3 h-[2rem] p-1 rounded drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
              required
            />
          </div>
          <div className="flex-[1_1_0]">
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              name="name"
              id="name"
              className="w-full mt-2 mb-3 h-[2rem] p-1 rounded drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full mt-2 mb-3 h-[2rem] p-1 rounded drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
            required
          />
        </div>
        <div>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            className="block w-full mt-2 mb-3 h-[2rem] p-1 rounded drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
            required
          />
        </div>
        <div>
          <label htmlFor="message">Your message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            cols={20}
            className="block w-full mt-2 rounded drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
            required
          ></textarea>
        </div>
        <input
          type="submit"
          value="Submit"
          className="block text-xl text-white font-normal font-koho bg-light-brown 
          rounded-2xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-2 pl-6 pr-6 mt-8 ml-auto mr-auto"
        />
      </form>
      <Image
        src={BlackSquare}
        alt="Background black square"
        className="absolute top-[0%] left-[50%] -translate-x-[50%] z-0
      max-lg:hidden"
      />
    </section>
  );
}
