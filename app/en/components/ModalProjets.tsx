import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Cross from "../../../public/xmark-solid.svg";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "./Carousel";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "90%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
  pt: 2,
  outline: 0,
  overflowY: "scroll",
};

interface Data {
  title: string;
  images: string[];
  date: string;
  lienGithub: string;
  description: string;
  competences: string;
  problemes: string;
}

interface Props {
  data: Data;
}

export default function BasicModal(props: Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <article className="mx-auto w-[83%] mb-[3rem] lg:w-[44vw] z-10 border-light-brown border-[1px]">
      <Button
        onClick={handleOpen}
        className="w-[100%] h-[25vh] lg:h-[28vh] hover:bg-light-brown normal-case drop-shadow-[5px_4px_4px_rgba(0,0,0,0.25)] rounded-none"
      >
        <p
          className="text-white font-koho font-normal text-2xl absolute top-[50%] left-[50%] -translate-x-[50%]
        -translate-y-[50%]"
        >
          {props.data.title}
        </p>
        <p className="text-white font-koho font-normal text-base absolute bottom-[5%] right-[3%]">
          Clic to dispay details
        </p>
        <Image
          src={props.data.images[0]}
          fill={true}
          alt="Project"
          className="hover:opacity-0 object-cover object-top"
        />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button onClick={handleClose} className="w-full flex justify-end">
            <Image src={Cross} alt="Close window" width={30} height={40} />
          </Button>
          <div className="lg:flex">
            <Carousel images={props.data.images} />
            <div className="lg:ml-5">
              <h3
                id="modal-modal-title"
                className="font-koho text-2xl font-normal text-center mt-4"
              >
                {props.data.title}
              </h3>
              <p className="font-koho text-xl font-normal text-center mt-1 mb-4">
                <time>{props.data.date}</time>
              </p>
              <Link
                href={props.data.lienGithub}
                rel="noopener noreferrer"
                target="_blank"
                className="underline font-bold text-light-brown"
              >
                Link to the GitHub repo
              </Link>
              <p className="mt-4 font-koho text-2xl font-normal">
                Skills acquired:
              </p>
              <p className="text-base font-koho font-normal mt-2">
                {props.data.competences}
              </p>
            </div>
          </div>
          <div className="lg:flex gap-5">
            <div className="flex-[1_1_0]">
              <p className="font-koho text-2xl font-normal mt-2">
                Description:
              </p>
              <p
                id="modal-modal-description"
                className="text-base font-koho font-normal mt-2"
              >
                {props.data.description}
              </p>
            </div>
            <div className="flex-[1_1_0]">
              <p className="font-koho text-2xl font-normal mt-2">Challenges:</p>
              <p className="text-base font-koho font-normal mt-2">
                {props.data.problemes}
              </p>
            </div>
          </div>
        </Box>
      </Modal>
    </article>
  );
}
