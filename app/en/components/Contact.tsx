"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import BlackEllipsisMobile from "../../../public/black-ellipse-mobile-competences.svg";
import BlackEllipsisDesktop from "../../../public/black-ellipse-desktop-competences.svg";
import BlackSquare from "../../../public/black-square.svg";
import { useWindowSize } from "../../lib/customHooks";

type Inputs = {
  surname: string;
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const { windowSize } = useWindowSize();
  const [emailSent, setEmailSent] = useState("initialState");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const jsonData = JSON.stringify(data);
    fetch("http://localhost:3000/api/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    }).then((res) =>
      res.status === 200
        ? setEmailSent("emailSent")
        : setEmailSent("emailNotSent"),
    );
  };
  let emailConfirmation = null;
  if (emailSent === "emailSent") {
    emailConfirmation = <p className="text-center pt-4">Message sent</p>;
  } else if (emailSent === "emailNotSent") {
    emailConfirmation = (
      <p className="text-center pt-4">
        An error happened and the message could not be sent. Please contact me
        directly at this email adress: :{" "}
        <a href="mailto:lucas.letirilly.petit@gmail.com" className="underline">
          lucas.letirilly.petit@gmail.com
        </a>
      </p>
    );
  }
  return (
    <section id="contact" className="relative pl-5 pr-5 pb-[3rem]">
      {(windowSize.width ?? 0) < 620 ? (
        <React.Fragment>
          <Image
            src={BlackEllipsisMobile}
            alt="Demi-cercle noir"
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
            alt="Demi-cercle noir"
            className="relative top-0 left-[50%] -translate-x-[50%] w-[33%] lg:w-[25%] z-10"
          />
          <h2
            className="font-heading font-bold text-[2rem] lg:text-[3rem] text-white absolute top-9 left-[50%] -translate-x-[50%] z-10 
          min-[620px]:top-[24px] min-[790px]:top-[40px] lg:mt-[-15px] min-[1150px]:mt-[10px]
          "
          >
            Contact
          </h2>
        </React.Fragment>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative min-[620px]:w-[70%] lg:w-[50%] bg-grey rounded-[2rem] font-koho font-bold text-base mt-5 
        min-[620px]:ml-[auto] min-[620px]:mr-[auto] p-5 lg:p-[2.5rem] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] z-10"
      >
        <p className="text-center">
          Contact me through the form below or directly at:{" "}
          <a
            href="mailto:lucas.letirilly.petit@gmail.com"
            className="underline"
          >
            lucas.letirilly.petit@gmail.com
          </a>
        </p>
        <div className="w-full flex items-center gap-5 mt-3">
          <div className="flex-[1_1_0]">
            <label htmlFor="surname">Surname</label>
            <br />
            <input
              {...register("surname")}
              className="w-full mt-2 mb-3 h-[2rem] p-1 rounded drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
            />
          </div>
          <div className="flex-[1_1_0]">
            <label htmlFor="name">Name</label>
            <br />
            <input
              {...register("name")}
              className="w-full mt-2 mb-3 h-[2rem] p-1 rounded drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email">Your email</label>
          <input
            {...register("email", { required: true })}
            className="block w-full mt-2 mb-3 h-[2rem] p-1 rounded drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
          />
        </div>
        <div>
          <label htmlFor="subject">Subject</label>
          <input
            {...register("subject")}
            className="block w-full mt-2 mb-3 h-[2rem] p-1 rounded drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
          />
        </div>
        <div>
          <label htmlFor="message">Your message</label>
          <textarea
            {...register("message")}
            rows={5}
            cols={20}
            className="block w-full mt-2 p-1 rounded drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
          ></textarea>
        </div>
        <input
          type="submit"
          value="Send"
          className="block text-xl text-white font-normal font-koho bg-light-brown 
          rounded-2xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-2 pl-6 pr-6 mt-8 ml-auto mr-auto"
        />
        {emailConfirmation}
      </form>
      <Image
        src={BlackSquare}
        alt="Carré noir en fond"
        className="absolute top-[0%] left-[50%] -translate-x-[50%] z-0
      max-lg:hidden"
      />
    </section>
  );
}
